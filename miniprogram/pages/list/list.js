// miniprogram/pages/list/list.js
const mock = require('../../mock/mock.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      title: '主题'
    },
    list: mock.list
  },

  enterPlayPage: function(e) {
    const info = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/play/play?info=${JSON.stringify(info)}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const info = JSON.parse(options.info)
    this.setData({
      info
    })
  }
})