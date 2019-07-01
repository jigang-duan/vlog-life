const util = require('../../utils/util.js')
const app = getApp()

const fetchFoods = ({ categoryId, offset, limit }, callback) => {
  const success = res => callback(util.mapResWithTime(res))
  app.getUserOpenId((err, openid) => {
    if (err) {
      return
    }
    wx.request({
      url: `${app.globalData.config.baseUrl}/foods`,
      method: 'GET',
      header: {
        'x-userid': openid
      },
      data: {
        categoryId,
        offset,
        limit
      },
      success
    })
  })
}

module.exports = {
  fetchFoods,
}