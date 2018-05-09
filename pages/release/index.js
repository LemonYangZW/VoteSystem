const app=getApp()
Page({
  /**
   * 初始化数据
   */
  data: {
    tname: '',
    tcontent: '',
    tnumber:'',
    price:'',
    phone:''
  },

  /**
   * 监听任务名称输入
   */
  listenertnameInput: function (e) {
    this.data.tname = e.detail.value;

  },

  /**
   * 监听电话号码输入
   */
  listenerphoneInput: function (e) {
    this.data.phone = e.detail.value;

  },

  /**
   * 监听任务内容输入
   */
  listenertcontentInput: function (e) {
    this.data.tcontent = e.detail.value;
  },
/**
   * 监听需求数量
   */
  listenertnumberInput: function (e) {
    this.data.tnumber = e.detail.value;
  },
  /**
     * 监听每票价格
     */
  listenerpriceInput: function (e) {
    this.data.price = e.detail.value;
  },
  /**
   * 监听提交按钮
   */
  listenerSubmit: function () {
    
    //打印收入账号和密码
    console.log('任务名称为: ', this.data.tname);
    console.log('任务内容为: ', this.data.tcontent);
    console.log('需求数量为: ', this.data.tnumber);
    console.log('每票价格为: ', this.data.price);
    console.log('电话号码为: ', this.data.phone);
    wx.request({
      url: 'http://193.112.185.121:8080/VoteSystemServer/doAdd.do',
      data: {
        tname: this.data.tname,
        tcontent: this.data.tcontent,
        tnumber:this.data.tnumber,
        price:this.data.price,
        phone:this.data.phone
      },
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success:function(res){
        
      },
      fail: function (res) {
        console.log('submit fail');
      },
      complete: function (res) {
        console.log('submit complete');
      }
    })
    
  },
  bindPhoto :function(e) {

    var that = this;

    wx.chooseImage({

      count: 1,

      sizeType: ['original', 'compressed'],// 指定原图或者压缩图

      sourceType: ['album',
        'camera'], // 指定图片来源

      success: function (res) {

        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        wx.uploadFile({
          url: 'http://localhost:8080/VoteSystemServer/doUpload.do',
          filePath: tempFilePaths[0],//图片路径，如tempFilePaths[0]
          name: 'image',
          header: {
            "Content-Type": "multipart/form-data"
          },
          formData:
          {
            userId: 123 //附加信息为用户ID
          },
          success: function (res) {
            console.log(res);
          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {

          }
        })

      }

    })

  },
  

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
    
  }
})
