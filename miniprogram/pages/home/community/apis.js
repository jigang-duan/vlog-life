const util = require('../../../utils/util')
const app = getApp()

const fetchFoods = ({ offset, limit }, callback) => {
  const success = res => callback(util.mapResWithTime(res))
  wx.request({
    url: `${app.globalData.config.baseUrl}/foods`,
    method: 'GET',
    data: {
      isShared: true,
      offset,
      limit
    },
    success
  })
}

module.exports = {
  fetchFoods,
}