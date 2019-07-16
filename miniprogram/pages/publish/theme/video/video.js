// miniprogram/pages/publish/theme/video/video.js
const apis = require('./apis')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodId: null,
    videoList: [],
    videoThumbUrl: null,
    videoUrl: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      foodId: options.foodId
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    const {
      title,
      desc
    } = e.detail.value
    const {
      videoThumbUrl,
      videoUrl,
      foodId
    } = this.data

    if (title && foodId && videoUrl) {
      const data = {
        foodId,
        title,
        desc,
        videoUrl,
        videoThumbUrl
      }
      apis.newFoodItem(data, () => {
        wx.navigateBack({
          delta: 2
        })
      })
    }
  },

  ChooseVideo() {
    wx.chooseVideo({
      sourceType: ['album'],
      maxDuration: 120,
      success: (res) => {
        console.info(res)
        apis.uploadFile(res.thumbTempFilePath, (videoThumbUrl) => {
          this.setData({
            videoThumbUrl
          })
        })
        apis.uploadFile(res.tempFilePath, (videoUrl) => {
          this.setData({
            videoList: [res.thumbTempFilePath],
            videoUrl,
          })
        })
      },
    })
  },
})