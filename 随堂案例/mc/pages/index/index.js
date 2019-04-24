//index.js
//获取应用实例
const app = getApp()
const api = require("../../api/index.js");
Page({
  data:{
    longitude:"",
    latitude:"",
    markers:[
      // {
      //   iconPath: '/resources/others.png',
      //   id: 0,
      //   latitude: 23.099994,
      //   longitude: 113.324520,
      //   width: 50,
      //   height: 50
      // }
    ],
    controls:[
      {
        iconPath: '/imgs/pin.png',
        position: {
          left: app.globalData.iw/2 - 11,
          top: (app.globalData.ih-115)/2,
          width: 22,
          height: 31
        },
        clickable: true
      },
      {
        id:1,
        iconPath: '/imgs/center.png',
        position: {
          left: 20,
          top: app.globalData.ih - 140,
          width: 34,
          height: 33
        },
        clickable: true
      }
    ]
  },
  onLoad(){
    var _this = this;
    wx.getLocation({
      type: 'gcj02',
      success:function(res){
        console.log(res)
        _this.setData({
            longitude: res.longitude,
            latitude: res.latitude
        })
      }
    })

    //获取发布的信息

    wx.request({
      url: api.add,
      method:"get",
      success:function(data){
        console.log(data)

        let markers = _this.data.markers;

      
        data.data.map((item)=>{
            item.iconPath = "/imgs/"+item.type+".png";
            markers.push(item)
        })


        _this.setData({
          markers
        })

      }
    })



    //创建地图实例对象
    this.map = wx.createMapContext("map")
  },
  //触发地图空间的方法
  controltap(){
    this.map.moveToLocation();
  },
  //跳转发布
  handlePublic(){
    wx.navigateTo({
      url: '/pages/public/public',
    })
  },
  //跳转到搜索页面
  handleSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  //点击markers跳转详情信息
  markertap(e){
    let id = e.markerId;

   wx.navigateTo({
     url: '/pages/detail/detail?id='+id,
   })
  }
})
