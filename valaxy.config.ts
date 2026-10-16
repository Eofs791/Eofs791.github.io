import type { UserThemeConfig } from 'valaxy-theme-yun'
import { $t, defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline/index.js'

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
    colors: {
      primary: '#F5A9B8',
    },

    fireworks: {
      enable: true,
      colors: ['#FFC1CC', '#F48CA9', '#E06C8C']
    },

    banner: {
      enable: true,
      title: '見崎的貓箱',
    },

    pages: [
      {
        name: $t('themeConfig.nav.friends'),
        url: '/friends/',
        icon: 'i-ri-links-fill',
      },
    ],

    nav: [
      {
        text: $t('themeConfig.nav.archives'),
        link: '/archives/',
        icon: 'i-ri-folder-history-line',
      },
      {
        text: $t('themeConfig.nav.categories'),
        link: '/categories/',
        icon: 'i-ri-archive-drawer-line',
      },
      {
        text: $t('themeConfig.nav.tags'),
        link: '/tags/',
        icon: 'i-ri-price-tag-3-line',
      },
      {
        text: $t('themeConfig.nav.friends'),
        link: '/friends/',
        icon: 'i-ri-links-fill',
      },
    ],

    footer: {
      since: 2025,
      powered: true
    },
  },

  unocss: { safelist },

  modules: {
    rss: {
      extractImagePathsFromHTML: false,
    }
  },

  siteConfig: {
    comment: {
      enable: true
    },
  },

  addons: [
    addonWaline({
      serverURL: 'https://waline-blush-ten.vercel.app/',
    }),
  ],
})
