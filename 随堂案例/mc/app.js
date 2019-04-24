//app.js
App({
 globalData:{
   iw:"",
   ih:""
 },
 onLaunch(){
   var _this = this;
   wx.getSystemInfo({
     success:function(res){
       _this.globalData.iw = res.windowWidth;
       _this.globalData.ih = res.windowHeight;
     }
   })
 }
})