// miniprogram/pages/home/share/share.js
const mock = require('../../../mock/mock.js')
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    screenHeight: app.globalData.screenHeight,
    list: mock.list
  },

  enterPlayPage: function (e) {
    const info = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/play/play?info=${JSON.stringify(info)}`
    })
  },
})