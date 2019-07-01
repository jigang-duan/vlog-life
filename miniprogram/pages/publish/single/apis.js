const app = getApp();

const showToast = (title) => {
  wx.showToast({
    title: title,
    icon: 'loading',
    mask: true,
    duration: 1000
  })
}

const uploadFile = (tempFilePath, callback) => {
  if (!tempFilePath) {
    return
  }
  showToast('正在上传...')

  //上传文件
  wx.uploadFile({
    url: app.globalData.config.uploadFileUrl,
    filePath: tempFilePath,
    name: 'uploadfile_ant',
    header: {
      "Content-Type": "multipart/form-data"
    },
    success: res => {
      console.info('上传成功', res);
      wx.hideToast();
      if (res.statusCode < 300) {
        const imgUrl = app.globalData.config.baseUrl + JSON.parse(res.data).url
        callback(imgUrl)
      } else {
        wx.showModal({
          title: '错误提示',
          content: '上传失败',
          showCancel: false,
          success: function (res) { }
        })
      }
    },
    fail: res => {
      console.info(res)
      wx.hideToast();
      wx.showModal({
        title: '错误提示',
        content: '上传失败',
        showCancel: false,
        success: function (res) { }
      })
    }
  })
}

const fetchCategories = (callback) => {
  app.getUserOpenId((err, openid) => {
    if (err) {
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
  })
}

const newFood = ({ title, categoryId, desc, imageUrl, videoThumbUrl, videoUrl }, callback) => {
  app.getUserOpenId((err, openid) => {
    if (err) {
      return
    }
    showToast('提交中...')
    wx.request({
      url: `${app.globalData.config.baseUrl}/foods?withVideo=true`,
      method: 'POST',
      header: {
        'x-userid': openid
      },
      data: {
        title,
        categoryId,
        type: 'video',
        tag: '视频',
        desc,
        imageUrl: imageUrl || videoThumbUrl,
        item: {
          title,
          type: 'type',
          desc,
          imageUrl: videoThumbUrl || imageUrl,
          videoUrl
        }
      },
      success(res) {
        wx.hideToast()
        if (res.statusCode > 300) {
          wx.showModal({
            title: '发布视频作品失败',
            content: res.data.detail[0].message,
            showCancel: false,
            success: function (res) { }
          })
          return
        }
        callback()
      }
    })
  })
}

module.exports = {
  fetchCategories,
  uploadFile,
  newFood
}