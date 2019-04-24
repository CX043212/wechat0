//index.js
//获取应用实例
const app = getApp()
const util = require("../../utils/util.js");
Page({
  data:{
    "movie_showing":[],
  },
  onLoad(){
    this.handleMovie();
  },
  handleMovie(){
    var _this = this;
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&start=0&count=8&loc_id=108288&_=0',
      success:function(data){
        console.log(data.data.subject_collection_items);

      
        data.data.subject_collection_items.map((item)=>{
          item.n = util.ratingTo(item.rating ? item.rating.value:0)
        })

        _this.setData({
          movie_showing: data.data.subject_collection_items
        })
      }
    })
  },
  handleTo(e){
    console.log(e);
    let id = e.currentTarget.dataset.id;
    let title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id + "&title=" + title,
    })
  }
})
