/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

const host = '127.0.0.1:7001'
const scheme = 'http'
const weapp = 'weapp'

const config = {

  // 下面的地址配合云端 Server 工作
  host,

  baseUrl: `${scheme}://${host}`,

  // 登录地址，用于建立会话
  loginUrl: `${scheme}://${host}/${weapp}/login`,

  // 测试的请求地址，用于测试会话
  requestUrl: `${scheme}://${host}/${weapp}/testRequest`,

  // 用code换取openId
  openIdUrl: `${scheme}://${host}/${weapp}/openid`,

  // 测试的信道服务接口
  tunnelUrl: `${scheme}://${host}/${weapp}/tunnel`,

  // 生成支付订单的接口
  paymentUrl: `${scheme}://${host}/${weapp}/payment`,

  // 发送模板消息接口
  templateMessageUrl: `${scheme}://${host}/${weapp}/templateMessage`,

  // 发送订阅消息接口
  subscribeMessageUrl: `${scheme}://${host}/${weapp}/subscribeMessage`,

  // 上传文件接口
  uploadFileUrl: `${scheme}://${host}/${weapp}/upload`,

  // 下载示例图片接口
  downloadExampleUrl: `${scheme}://${host}/static/weapp.jpg`
}

module.exports = config
