const App = getApp()

Page({
  onLoad: function () {

    wx.connectSocket({
      url: "ws://localhost:8080/WebSocket1/chat1",
    })
    wx.onSocketOpen(function () {
      console.log('WebSocket连接已经打开!')
      wx.sendSocketMessage({
        data: 'HELLO,WORLD' + Math.random() * 0XFFFFFF.toString()
      })
    });
    wx.onSocketMessage(function (data) {
      console.log(data);
    });
    wx.onSocketClose(function () {
      console.log('WebSocket连接已经关闭!')
    });
  },   
  setclose:function (e) {
    console.log('WebSocket连接正在关闭!')
    wx.closeSocket();

  }  
})