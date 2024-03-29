// miniprogram/pages/home/index.js
const app = getApp();
const TAGS = [{
    key: 'category',
    title: '分类'
  },
  {
    key: 'share',
    title: '分享'
  },
  {
    key: 'community',
    title: '发现'
  }
]

Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    TabCur: 0,
    scrollLeft: 0,
    CustomBar: app.globalData.CustomBar,
    tabs: TAGS
  },

  methods: {
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id - 1) * 60
      })
    }
  }
})