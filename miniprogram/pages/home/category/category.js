// miniprogram/pages/home/category/category.js
const app = getApp();



Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    screenHeight: app.globalData.screenHeight,
    list: [{
        key: 'life',
        title: '生活',
        desc: '快乐,健康,生活感悟',
        icon: '/images/life.png'
      },
      {
        key: 'work',
        title: '工作',
        desc: '更好的明天',
        icon: '/images/work.jpeg'
      },
      {
        key: 'travel',
        title: '旅行',
        desc: '发现世界的奇妙和广阔',
        icon: '/images/travel.jpg'
      },
      {
        key: 'learning',
        title: '学习',
        desc: '朝牛逼的道路一路狂奔!',
        icon: '/images/learning.jpeg'
      }
    ]
  },

  lifetimes: {
    attached() {
      console.log('Component-category lifetimes >> attached')
      app.getUserOpenId((err, openid) => {
        if (err) {
          return
        }
        wx.request({
          url: `${app.globalData.config.baseUrl}/categories`,
          method: 'GET',
          success(res) {
            console.info(res)
          }
        })
      })
    }
  },

  methods: {
    scroll(e) {
      console.log(e)
    },
    enterList(e) {
      wx.navigateTo({
        url: `/pages/list/list?info=${JSON.stringify(e.target.dataset.info)}`
      })
    }
  }
})