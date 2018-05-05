import WxValidate from './assets/plugins/wx-validate/WxValidate'
import WxService from './assets/plugins/wx-service/WxService'


App({
  onLaunch() {
    console.log('onLaunch')
  },
  onShow() {
    console.log('onShow')
  },
  onHide() {
    console.log('onHide')
  },
  getUserInfo() {
    return this.WxService.login()
      .then(data => {
        console.log(data+'====================')
        return this.WxService.getUserInfo()
      })
      .then(data => {
        console.log(data)
        this.globalData.userInfo = data.userInfo
        return this.globalData.userInfo
      })
  },
  globalData: {
    userInfo: null
  },
  renderImage(path) {
    if (!path) return ''
    if (path.indexOf('http') !== -1) return path
    return `${this.__config.domain}${path}`
  },
  
  WxValidate: (rules, messages) => new WxValidate(rules, messages),
 
  WxService: new WxService,
 
})