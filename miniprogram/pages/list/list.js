// miniprogram/pages/list/list.js
const apis = require('./apis')

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      title: '主题'
    },
    total: 0,
    list: []
  },

  enterPlayPage: function(e) {
    const info = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/play/play?info=${JSON.stringify(info)}`
    })
  },

  scrolltolower(e) {
    const {
      list,
      total,
      info
    } = this.data
    const offset = list.length
    if (offset < total) {
      console.info('scrolltolower', offset)
      apis.fetchFoods({
        categoryId: info.id,
        offset: offset,
        limit: 5
      }, data => {
        this.setData({
          list: [...list, ...data.list],
          total: data.total
        })
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const info = JSON.parse(options.info)
    console.debug(info)
    this.setData({
      info
    })

    apis.fetchFoods({
      categoryId: info.id,
      offset: 0,
      limit: 5
    }, data => {
      console.debug(data)
      this.setData({
        list: data.list,
        total: data.total
      })
    })
  }
})