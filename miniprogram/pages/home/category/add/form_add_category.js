// miniprogram/pages/home/category/add/form_add_category.js
const apis = require('./apis')
const app = getApp();

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
    imgList: [],
    imgUrl: null
  },

  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(this.data.imgUrl)
    
    if (e.detail.value.title && this.data.imgUrl) {
      const data = {
        title: e.detail.value.title,
        desc: e.detail.value.desc,
        iconUrl: this.data.imgUrl
      }
      apis.newCategory(data, res => {
        const pages = getCurrentPages()
        const prevPage = pages[pages.length - 2]
        const prevComponent = prevPage.selectComponent('#home')
          .selectComponent('#category')
        prevComponent.setData({
          list: res.data
        })
        wx.navigateBack()
      })
    }
  },
  formReset: function() {
    wx.navigateBack()
  },

  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        apis.uploadImage(res.tempFilePaths, (imgUrl) => {
          this.setData({
            imgList: res.tempFilePaths,
            imgUrl
          })
        });
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '记录者',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList,
            imgUrl: null
          })
        }
      }
    })
  }
})