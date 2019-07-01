const list = [
  {
    id: '1',
    imageUrl: 'http://img.kaiyanapp.com/f1ae1cd706655db9fd23b177d0477798.jpeg',
    tag: '主题',
    type: 'theme',
    desc: '活着的意义就是在轮回中挣扎!',
    avatar: {
      avatarUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
    },
    title: '活着的意义',
    createdTime: '十天前',
    items: [
      {
        id: 'v-1-1',
        image: 'http://img.kaiyanapp.com/f1ae1cd706655db9fd23b177d0477798.jpeg',
        title: '挣扎',
        desc: '一次次的重生，消逝。不只是传统意义上的，而是从心与灵魂的死亡开始。明明知道自己的存在无甚意义，甚至不会给这个浩渺的宇宙留下任何东西，可还是想活着。为了我们爱的人，为了清晨的第一缕光，为了晚暮的第一颗星，盼望着发送的爱得到回应。人类太过渺小，请为自己而活。BGM：Porter Robinson「Goodbye To A World」。From 混剪晓佳',
        date: '十天前',
        vid: '163507'
        // url: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=163507&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true'
      },
      {
        id: 'v-1-2',
        image: 'http://img.kaiyanapp.com/448780fd71b1ee35f48956ecf649b505.jpeg',
        title: '黄老板热舞！Ed 新歌「Cross Me」MV',
        desc: '黄老板 Ed Sheeran 联手嘻哈双咖 Chance The Rapper PnB Rock 全新合作曲「Cross Me 」MV 新鲜出炉！继上支单曲「I dont care」后黄老板再次大玩绿幕后期，这次是真人捕捉。不过这么会跳舞的黄老板其实是……From Ed Sheeran',
        date: '十天前',
        vid: '164597'
        // url: 'https://baobab.kaiyanapp.com/api/v1/playUrl?vid=164597&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&ptl=true'
      }
    ],
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
        date: '2019年6月23日',
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
    image: 'http://img.kaiyanapp.com/822be8e14933a6ec3444699debf6e0a9.jpeg',
    tag: '主题',
    type: 'theme',
    desc: '出去看看,去看看外面的世界,去感受与平常生活中不一样的环境',
    avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
    title: '一场说走就走的旅行',
    date: '十天前',
    items: [],
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
        date: '2019年6月23日',
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
    items: [],
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