// miniprogram/pages/home/category/category.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    screenHeight: app.globalData.screenHeight,
    list: [{
        key: 'life',
        title: '生活',
        desc: '快乐,健康,生活感悟',
        icon: '/images/life.png'
      },
      {
        key: 'work',
        title: '工作',
        desc: '更好的明天',
        icon: '/images/work.jpeg'
      },
      {
        key: 'travel',
        title: '旅行',
        desc: '发现世界的奇妙和广阔',
        icon: '/images/travel.jpg'
      },
      {
        key: 'learning',
        title: '学习',
        desc: '学习使我快乐',
        icon: '/images/learning.jpeg'
      }
    ]
  },

  scroll: function(e) {
    console.log(e)
  },

  enterList: function(e) {
    wx.navigateTo({
      url: `/pages/list/list?info=${JSON.stringify(e.target.dataset.info)}`
    })
  }
})