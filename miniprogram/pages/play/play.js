// miniprogram/pages/play/play.js
const util = require('../../utils/util.js')

const app = getApp();

const vid2vUrl = vid => vid && `https://baobab.kaiyanapp.com/api/v1/playUrl?vid=${vid}&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true`

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
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
          createdTime: util.formatDateTime(new Date(it.createdTime)),
          videoUrl: it.videoUrl ? it.videoUrl : vid2vUrl(it.vid)
        }
      })
    }

    console.log(vinfo)

    this.setData({
      info: vinfo,
      oneself: vinfo.authorId === app.globalData.openid,
      isShared: vinfo.isShared
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
  },

  tapShare(e) {
    const id = this.data.info.id
    app.getUserOpenId((err, openid) => {
      if (err) {
        return
      }
      wx.request({
        url: `${app.globalData.config.baseUrl}/foods/${id}/shard`,
        method: 'PUT',
        header: {
          'x-userid': openid
        },
        success: res => {
          if (res.statusCode === 200) {
            this.setData({
              isShared: true
            })
          }
        },
        fail: err => {
          console.error(err)
        }
      })
    })
  }
})