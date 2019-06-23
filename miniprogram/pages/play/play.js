// miniprogram/pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    src: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=163507&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true',
    playing: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const info = JSON.parse(options.info)
    console.info(info)
    this.setData({
      info
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  play: function (e) {
    this.videoContext.play()
  },

  onPlay: function () {
    this.setData({
      playing: true
    })
  }
})