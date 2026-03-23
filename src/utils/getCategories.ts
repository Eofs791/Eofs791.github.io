import type { CollectionEntry } from "astro:content";

export interface CategoryTreeItem {
    name: string;
    posts: CollectionEntry<"blog">[];
    children: CategoryTreeItem[];
}

export function getCategoryTree(posts: any[]): CategoryTreeItem[] {
    const root: Record<string, any> = {};

    posts.forEach((post) => {
        let currentLevel = root;
        const categories: string[] = post.data?.categories;

        categories.forEach((cat, index) => {
            if (!currentLevel[cat]) {
                currentLevel[cat] = {
                    name: cat,
                    posts: [],
                    children: {},
                }
            }

            if (index == categories.length - 1) {
                currentLevel[cat].posts.push(post);
            }

            currentLevel = currentLevel[cat].children;
        });
    });

    function objectToArrayTree(obj: Record<string, any>): CategoryTreeItem[] {
        return Object.values(obj).map((node) => {
            return {
                name: node.name,
                posts: node.posts,
                children: objectToArrayTree(node.children),
            };
        });
    }

    return objectToArrayTree(root);
}