import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '..', 'src', 'data', 'blog');

function parseFrontmatter(content) {
  const lines = content.split('\n').map(line => line.trim());
  if (lines[0] !== '---') return null;
  let endIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      endIndex = i;
      break;
    }
  }
  if (endIndex === -1) return null;
  const frontmatterStr = lines.slice(1, endIndex).join('\n');
  const body = lines.slice(endIndex + 1).map(line => line.trimEnd()).join('\n');
  // Simple YAML parse (basic)
  const frontmatter = {};
  const keyValuePairs = frontmatterStr.split('\n').filter(line => line.trim());
  let currentKey = null;
  let currentValue = [];
  for (const line of keyValuePairs) {
    if (line.startsWith('- ')) {
      if (currentKey) {
        currentValue.push(line.substring(2));
      }
    } else if (line.includes(':')) {
      if (currentKey) {
        frontmatter[currentKey] = currentValue.length > 1 ? currentValue : currentValue[0] || '';
      }
      const [key, value] = line.split(':', 2);
      currentKey = key.trim();
      const val = value ? value.trim() : '';
      currentValue = val ? [val] : [];
    } else {
      // skip other lines
    }
  }
  if (currentKey) {
    frontmatter[currentKey] = currentValue.length > 1 ? currentValue : currentValue[0] || '';
  }
  return { frontmatter, body };
}

function formatDate(dateStr, isAfterSep2025) {
  const tz = isAfterSep2025 ? '-08:00' : '+08:00';
  return dateStr + 'T00:00:00' + tz;
}

function processFile(filePath) {
  console.log('Processing', filePath);
  const content = fs.readFileSync(filePath, 'utf-8');
  const parsed = parseFrontmatter(content);
  if (!parsed) {
    console.log('No frontmatter for', filePath);
    return;
  }
  let { frontmatter, body } = parsed;

  // Infer date from filename if not present
  if (!frontmatter.date) {
    const fileName = path.basename(filePath, '.md');
    if (/^\d{8}$/.test(fileName)) {
      frontmatter.date = fileName.slice(0,4) + '-' + fileName.slice(4,6) + '-' + fileName.slice(6,8);
    } else if (/^\d{6}$/.test(fileName)) {
      frontmatter.date = fileName.slice(0,4) + '-' + fileName.slice(4,6) + '-01';
    }
  }
  if (!frontmatter.updated) {
    frontmatter.updated = frontmatter.date;
  }

  // Process body for <!-- more --> at the beginning
  let description = '';
  if (body.trim().startsWith('<!-- more -->')) {
    const moreIndex = body.indexOf('<!-- more -->');
    description = body.substring(0, moreIndex).trim();
    body = body.substring(moreIndex + 13).trim();
  }

  // Remove metingjs
  body = body.replace(/<meting-js[^>]*>[\s\S]*?<\/meting-js>/gi, '');

  // Build new frontmatter
  const newFrontmatter = {};
  newFrontmatter.title = frontmatter.title.replace(/^"|"$/g, '');
  if (frontmatter.date) {
    const date = new Date(frontmatter.date + 'T00:00:00');
    const isAfter = date.getFullYear() > 2025 || (date.getFullYear() === 2025 && date.getMonth() >= 8); // 8 is Sep
    newFrontmatter.pubDatetime = formatDate(frontmatter.date, isAfter);
    newFrontmatter.timezone = isAfter ? '-08:00' : '+08:00';
  }
  if (frontmatter.updated) {
    const date = new Date(frontmatter.updated + 'T00:00:00');
    const isAfter = date.getFullYear() > 2025 || (date.getFullYear() === 2025 && date.getMonth() >= 8);
    newFrontmatter.modDatetime = formatDate(frontmatter.updated, isAfter);
  }
  newFrontmatter.categories = Array.isArray(frontmatter.categories) ? frontmatter.categories : frontmatter.categories ? [frontmatter.categories] : [];
  newFrontmatter.tags = Array.isArray(frontmatter.tags) ? frontmatter.tags : frontmatter.tags ? [frontmatter.tags] : ['others'];
  newFrontmatter.description = description;
  if (frontmatter.featured) newFrontmatter.featured = frontmatter.featured === 'true';
  if (frontmatter.draft) newFrontmatter.draft = frontmatter.draft === 'true';
  if (frontmatter.ogImage) newFrontmatter.ogImage = frontmatter.ogImage;
  if (frontmatter.cover) newFrontmatter.ogImage = frontmatter.cover;
  if (frontmatter.canonicalURL) newFrontmatter.canonicalURL = frontmatter.canonicalURL;
  if (frontmatter.hideEditPost) newFrontmatter.hideEditPost = frontmatter.hideEditPost === 'true';

  // Format YAML
  let yaml = '---\n';
  for (const [key, value] of Object.entries(newFrontmatter)) {
    if (Array.isArray(value)) {
      yaml += `${key}:\n`;
      for (const item of value) {
        yaml += `  - ${item}\n`;
      }
    } else if (typeof value === 'string' && value.includes('\n')) {
      yaml += `${key}: |\n`;
      for (const line of value.split('\n')) {
        yaml += `  ${line}\n`;
      }
    } else if (value === '') {
      yaml += `${key}: ""\n`;
    } else if (key === 'pubDatetime' || key === 'modDatetime') {
      yaml += `${key}: ${value}\n`;
    } else if (typeof value === 'string' && value.includes(':')) {
      yaml += `${key}: '${value}'\n`;
    } else {
      yaml += `${key}: ${value}\n`;
    }
  }
  yaml += '---\n';

  const newContent = yaml + body;
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log('Updated', filePath);
}

const files = [];
function getFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getFiles(fullPath);
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
}
getFiles(blogDir);
console.log('Files:', files.length);
for (const file of files) {
  processFile(file);
}

console.log('Processed all blog files.');