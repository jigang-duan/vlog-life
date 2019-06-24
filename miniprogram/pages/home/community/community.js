// miniprogram/pages/home/community/community.js
const mock = require('../../../mock/mock.js')
const app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    screenHeight: app.globalData.screenHeight,
    list: mock.list
  }

})