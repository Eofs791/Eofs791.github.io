import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: string;
  show?: boolean;
}

export const SOCIALS: Social[] = [
{
  name: "Bangumi",
  href: "https://bgm.tv/user/eofs",
  linkTitle: `${SITE.author} on Bangumi`,
  icon: "ri:tv-line",
  show: true,
},
{
  name: "BiliBili",
  href: "https://space.bilibili.com/397924646",
  linkTitle: `${SITE.author} on BiliBili`,
  icon: "ri:bilibili-fill",
},
{
  name: "Twitter",
  href: "https://x.com/mi7sa9ki1",
  linkTitle: `${SITE.author} on Twitter`,
  icon: "ri:twitter-line",
},
{
  name: "Steam",
  href: "https://steamcommunity.com/id/CatCake791/",
  linkTitle: `${SITE.author} on Steam`,
  icon: "ri:steam-line",
},
{
  name: "QQ",
  href: "https://qm.qq.com/q/XBnLzH6sE0",
  linkTitle: `${SITE.author} on QQ`,
  icon: "ri:qq-line",
},
{
  name: "GitHub",
  href: "https://github.com/Eofs791",
  linkTitle: `${SITE.author} on GitHub`,
  icon: "ri:github-line",
  show: true,
},
{
  name: "E-Mail",
  href: "mailto:791sno@gmail.com",
  linkTitle: `Send an email to ${SITE.author}`,
  icon: "ri:mail-line",
  show: true,
},
{
  name: "开往 Travellings",
  href: "https://www.travellings.cn/go.html",
  linkTitle: `${SITE.author} Travellings`,
  icon: "ri:train-line",
  show: true,
},
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Comparte este post en X`,
    icon: "ri:twitter-line",
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Envia este post por correo`,
    icon: "ri:mail-line",
  },
] as const;
