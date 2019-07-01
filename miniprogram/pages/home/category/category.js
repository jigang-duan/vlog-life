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
    list: []
  },

  lifetimes: {
    attached() {
      const self = this
      if (this.data.list && this.data.list.length) {
        return
      }
      app.getUserOpenId((err, openid) => {
        if (err) {
          return
        }
        wx.request({
          url: `${app.globalData.config.baseUrl}/categories`,
          method: 'GET',
          header: {
            'x-userid': openid
          },
          success(res) {
            self.setData({
              list: res.data
            })
          }
        })
      })
    },
    ready() {
      console.info('ready')
    },
    moved() {
      console.info('moved')
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