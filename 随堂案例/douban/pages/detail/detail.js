// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "movie_info":{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    let {id,title} =  options;

    //动态设置头部信息
    wx.setNavigationBarTitle({
      title,
    })


    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/elessar/subject/'+id,
      success:function(data){
        console.log(data);
        _this.setData({
          movie_info:data.data
        })
      }
    })
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