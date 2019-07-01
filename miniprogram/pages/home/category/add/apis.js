const app = getApp();

const showToast = (title) => {
  wx.showToast({
    title: title,
    icon: 'loading',
    mask: true,
    duration: 1000
  })
}

const uploadImage = (tempFilePaths, callback) => {
  showToast('正在上传...')

  //上传文件
  wx.uploadFile({
    url: app.globalData.config.uploadFileUrl,
    filePath: tempFilePaths[0],
    name: 'uploadfile_ant',
    header: {
      "Content-Type": "multipart/form-data"
    },
    success: res => {
      console.info('上传图片成功', res);
      wx.hideToast();
      const imgUrl = app.globalData.config.baseUrl + JSON.parse(res.data).url
      callback(imgUrl)
    },
    fail: res => {
      wx.hideToast();
      wx.showModal({
        title: '错误提示',
        content: '上传图片失败',
        showCancel: false,
        success: function (res) { }
      })
    }
  })
}

const newCategory = ({ title, desc, iconUrl }, callback) => {
  app.getUserOpenId((err, openid) => {
    if (err) {
      return
    }
    showToast('提交中...')
    wx.request({
      url: `${app.globalData.config.baseUrl}/categories`,
      method: 'POST',
      header: {
        'x-userid': openid
      },
      data: {
        title,
        desc,
        iconUrl
      },
      success(res) {
        console.info('创建分类', res)
        wx.hideToast()
        if (res.statusCode >= 400) {
          wx.showModal({
            title: '新建分类失败',
            content: res.data.detail[0].message,
            showCancel: false,
            success: function (res) { }
          })
          return
        }
        wx.request({
          url: `${app.globalData.config.baseUrl}/categories`,
          method: 'GET',
          header: {
            'x-userid': openid
          },
          success: callback
        })
      }
    })
  })
}

module.exports = {
  uploadImage,
  newCategory
}