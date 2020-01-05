module.exports = {
  theme: 'vuepress-theme-blog-enhance',
  title: '扩散性百万甜面包',
  description: '个人主页，随便写写',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-110549153-1'
      }
    ],
    [
      'vuepress-plugin-rss',
      {
        base_url: '/',
        site_url: 'https://himself65.com',
        copyright: '2020 Himself65',
        count: 7
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/'
      }
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/himself65'
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/himself_65'
        }
      ]
    },
    directories: [
      {
        id: 'post',
        dirname: 'posts',
        path: '/',
        // layout: 'IndexPost', defaults to `Layout.vue`
        itemLayout: 'Post',
        itemPermalink: '/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 5
        }
      }
    ]
  }
}
