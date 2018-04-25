var util = require('../../utils/util.js');
var today = util.formatTime(new Date((new Date()).getTime() + (1000 * 60 * 60 * 24 * 7))).split(' ')[0];
var minday = util.formatTime(new Date()).split(' ')[0];
var maxday = util.formatTime(new Date((new Date()).getTime() + (1000 * 60 * 60 * 24 * 62))).split(' ')[0];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    moneyList: [
      { name: 500, value: 500, disabled: false },
      { name: 1000, value: 1000, disabled: false },
      { name: 2000, value: 2000, disabled: false },
      { name: 3000, value: 3000, disabled: true }
    ],
    typeList: [
      { name: '英语', value: 0 },
      { name: '数学', value: 1 },
      { name: '社会实践', value: 2 },
      { name: '大数据', value: 3 },
      { name: 'Oracle', value: 4 },
      { name: '其他', value: 5 }
    ],
    typeIndex: 0,
    date: today,
    minday: today,
    maxday: maxday,
    times: '12:00'
  },
  typeChange(e) {
    this.setData({
      typeIndex: +e.detail.value
    })
  },
  starttimeChange(e){
    this.setData({
      times: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})