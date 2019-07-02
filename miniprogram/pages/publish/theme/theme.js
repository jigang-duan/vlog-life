// miniprogram/pages/publish/theme/theme.js
const apis = require('./apis')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    imgUrl: null,
    categorys: [],
    categoryIdx: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    apis.fetchCategories(res => {
      console.info(res)
      this.setData({
        categorys: res.data
      })
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    const {
      title,
      desc
    } = e.detail.value
    const {
      imgUrl,
      categoryIdx,
      categorys
    } = this.data
    const categoryId = categoryIdx ? categorys[categoryIdx].id : null

    if (title && categoryId && imgUrl) {
      const data = {
        title,
        categoryId,
        desc,
        imageUrl: imgUrl
      }
      apis.newFood(data, () => {
        wx.navigateBack()
      })
    }
  },

  PickerChange(e) {
    this.setData({
      categoryIdx: e.detail.value
    })
  },

  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        apis.uploadFile(res.tempFilePaths[0], (imgUrl) => {
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