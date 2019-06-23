// miniprogram/pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    src: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=163507&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true',
    played: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const info = JSON.parse(options.info)
    const vinfo = {
      ...info,
      items: info.items.map(it => {
        return {
          ...it,
          src: it.src ? it.src : `https://baobab.kaiyanapp.com/api/v1/playUrl?vid=${it.vid}&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true`
        }
      })
    }
    console.info(vinfo)
    this.setData({
      info: vinfo
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContexts = this.data.info.items.map(it => wx.createVideoContext(`myVideo-${it.id}`))
  },

  play: function (e) {
    const index = e.currentTarget.dataset.index
    this.videoContexts[index].play()
  },

  onPlay: function (e) {
    const index = e.target.dataset.index
    const info = this.data.info
    this.videoContexts.forEach((ctx, i) => {
      if (index !== i) {
        ctx.pause()
      }
    });
    info.items[index].played = true
    this.setData({
      info
    })
  }
})