import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '见崎的猫箱',
    },

    pages: [
      {
        name: '分类',
        url: '/categories/',
        icon: 'i-ri-apps-line',
      },
      {
        name: '标签',
        url: '/tags/',
        icon: 'i-ri-bookmark-3-line',
      },
      {
        name: '网页收藏',
        url: '/links/',
        icon: 'i-ri-links-fill',
        
      }
    ],

    nav: [
      {
        text: '分类',
        link: '/categories/',
        icon: 'i-ri-apps-line',
      },
      {
        text: '标签',
        link: '/tags/',
        icon: 'i-ri-bookmark-3-line',
      },
      {
        text: '网页收藏',
        link: '/links/',
        icon: 'i-ri-links-fill',
      }
    ],

    footer: {
      since: 2025,
      powered: true
    },
  },

  unocss: { safelist },
})
