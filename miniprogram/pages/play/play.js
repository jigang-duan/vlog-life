// miniprogram/pages/play/play.js
const util = require('../../utils/util.js')

const app = getApp();

const vid2vUrl = vid => vid && `https://baobab.kaiyanapp.com/api/v1/playUrl?vid=${vid}&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true`

const showToast = (title) => {
  wx.showToast({
    title: title,
    icon: 'loading',
    mask: true,
    duration: 1000
  })
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    info: {},
    played: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      other: options.other
    })
  },

  onShow: function () {
    const self = this
    const foodId = this.data.id
    const other = this.data.other
    app.getUserOpenId((err, openid) => {
      if (err) {
        return
      }
      showToast('...')
      wx.request({
        url: `${app.globalData.config.baseUrl}/foods/${foodId}`,
        method: 'GET',
        header: {
          'x-userid': openid
        },
        success(res) {
          wx.hideToast()
          if (res.statusCode > 300) {
            return
          }
          const info = res.data
          self.setData({
            info,
            oneself: other ? false : info.authorId === app.globalData.openid,
            isShared: info.isShared
          })
          wx.request({
            url: `${app.globalData.config.baseUrl}/multipart/color`,
            data: {
              url: info.imageUrl
            },
            success(res) {
              const color = `linear-gradient(45deg, ${res.data[0].color}, ${res.data[1].color})`
              self.setData({
                color
              })
            }
          })
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('on ready')
    if (this.data.info.items) {
      this.videoContexts = this.data.info.items
        .map(it => wx.createVideoContext(`myVideo-${it.id}`))
    }
  },

  play: function (e) {
    const index = e.currentTarget.dataset.index
    this.videoContexts[index].play()
  },

  onPlay: function (e) {
    const index = e.target.dataset.index
    const info = this.data.info
    if (!this.videoContexts && this.data.info.items) {
      this.videoContexts = this.data.info.items
        .map(it => wx.createVideoContext(`myVideo-${it.id}`))
    }
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

  onProgress: function (e) {
    console.info(e.detail)
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