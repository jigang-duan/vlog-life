const list = [
  {
    id: '1',
    image: 'http://img.kaiyanapp.com/f1ae1cd706655db9fd23b177d0477798.jpeg',
    tag: '主题',
    type: 'theme',
    desc: '出去看看,去看看外面的世界,去感受与平常生活中不一样的环境',
    avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
    title: '一场说走就走的旅行',
    date: '十天前',
    comments: [
      {
        id: 1,
        avatar: 'http://qzapp.qlogo.cn/qzapp/1104373357/B6974039CB0A90A7888C924DEAECC8EE/100',
        name: '莫甘娜',
        date: '2018年12月4日',
        content: '凯尔，你被自己的光芒变的盲目。'
      },
      {
        id: 2,
        avatar: 'http://qzapp.qlogo.cn/qzapp/1104373357/4AC2B0B9D8758B314A2A87B74F27791C/100',
        name: '🌵HEALTH🌵',
        date: '2019-6-23',
        content: '一切逝去都是为了更好的诞生'
      }
    ],
    isLike: true,
    attention: 12,
    appreciate: 5,
    message: 2
  },
  {
    id: '2',
    image: 'http://img.kaiyanapp.com/448780fd71b1ee35f48956ecf649b505.jpeg',
    tag: '视频',
    type: 'video',
    desc: '黄老板热舞！Ed 新歌「Cross Me」MV',
    avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
    title: 'Cross Me',
    date: '十天前',
    comments: [],
    isLike: false,
    attention: 12,
    appreciate: 5,
    message: 2
  }
]

module.exports = {
  list,
}