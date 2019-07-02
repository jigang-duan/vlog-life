// miniprogram/pages/home/share/share.js
const mock = require('../../../mock/mock.js')
const apis = require('./apis')
const app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    screenHeight: app.globalData.screenHeight,
    list: [],
    total: 0
  },

  lifetimes: {
    attached() {
      const self = this
      if (this.data.list && this.data.list.length) {
        return
      }
      console.log('fetchFoods', 'start')
      apis.fetchFoods({
        offset: 0,
        limit: 5
      }, data => {
        console.log('fetchFoods', data)
        this.setData({
          list: data.list,
          total: data.total
        })
      })
    }
  },

  methods: {
    enterPlayPage(e) {
      const info = e.currentTarget.dataset.item
      wx.navigateTo({
        url: `/pages/play/play?id=${info.id}`
      })
    },
    scrolltolower(e) {
      const { list, total, info } = this.data
      const offset = list.length
      if (offset < total) {
        console.info('scrolltolower', offset)
        apis.fetchFoods({
          offset: offset,
          limit: 5
        }, data => {
          this.setData({
            list: [...list, ...data.list],
            total: data.total
          })
        })
      }
    }
  }
})