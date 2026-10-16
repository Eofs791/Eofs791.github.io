import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://blog.saikai.moe/',
  lang: 'zh-CN',
  title: 'Catarium',
  subtitle:'',
  author: {
    name: 'Eofs',
    avatar: '/avatar.svg',
    status: {
      emoji: '💤',
      message: '冬眠中...'
    },
    intro: ''
  },
  description: '',
  favicon: '/favicon.svg',
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
    {
      name: '开往 Travellings',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'black'
    }
  ],
  
  orderBy: 'updated',

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
        url: 'https://cdn.jsdelivr.net/gh/Eofs791/catpic@main/img/alipay.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.jsdelivr.net/gh/Eofs791/Catpic@main/img/qqpay.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.jsdelivr.net/gh/Eofs791/catpic@main/img/wechatpay.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
