//index.js
//获取应用实例
const app = getApp()

Page({
   data:{
     banner:[
       "https://m.zhe800.com.cn/uploads/Advert/3/20170809134845986.jpg",
       "https://m.zhe800.com.cn/uploads/Advert/3/20170809134902636.jpg",
        "https://m.zhe800.com.cn/uploads/Advert/3/20170809134902636.jpg"
     ],
     goods:[]
   },
   onLoad(){
     
     this.handleGoods();
   },
   handleGoods(){
     var _this = this;
     wx.request({
       url: 'https://m.zhe800.com.cn/getlist?page=' + app.globalData.page,
       success: function (data) {
         console.log(data.data.data);
         _this.setData({
           goods: [..._this.data.goods,...data.data.data]
         }, () => {
           app.globalData.page++;
           console.log(app.globalData.page)
         })
       }
     })
   },
   onReachBottom(){
     this.handleGoods();
   }
})
