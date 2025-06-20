import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://Eofs.github.io',
  lang: 'zh-CN',
  title: 'CatBox',
  subtitle: '你好，欢迎来到猫猫们的箱庭',
  description: '猫箱',
  favicon: 'favicon.ico',
  author: {
    name: '见崎美咲',
    avatar: 'https://cdn.jsdelivr.net/gh/Eofs791/blog-assets@main/img/avatar.ico',
    status: {
      emoji: '🩷',
      message: 'I am your etoile.'
    },
  intro: '好想被治愈'
  },


  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'Bangumi',
      link: 'https://bgm.tv/user/eofs',
      icon: 'i-ri-tv-line',
      color: '#FF8EB3',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/397924646',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://x.com/mi7sa9ki1',
      icon: 'i-ri-twitter-x-fill',
      color: 'black',
    },
    {
      name: 'Steam',
      link: 'https://steamcommunity.com/id/CatCake791/',
      icon: 'i-ri-steam-line',
      color: 'black',
    },
    {
      name: 'QQ',
      link: 'https://qm.qq.com/q/XBnLzH6sE0',
      icon: 'i-ri-qq-line',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Eofs791',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'E-Mail',
      link: 'mailto:791sno@gmail.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },

  ],

  mediumZoom: { enable: true },

  search: {
    enable: false,
  }, 

  statistics: {
    enable: true,
    readTime: {
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    description: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.jsdelivr.net/gh/Eofs791/blog-assets@main/img/alipay.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.jsdelivr.net/gh/Eofs791/blog-assets@main/img/qqpay.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.jsdelivr.net/gh/Eofs791/blog-assets@main/img/wechatpay.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
