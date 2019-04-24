//logs.js
const util = require('../../utils/util.js')
const api = require("../../api/index.js");
Page({
    data:{
      address:"点击选择，要勾选哦",
      type:"sell",
      info:"",
      tel:"",
      flag:true
    },
    dataInfo:{
      type:"sell"
    },
    //获取地址
    getAddress(){
      var _this = this;
      wx.chooseLocation({
        success:function(data){
          console.log(data);

          _this.setData({
            address:data.address
          })

          _this.dataInfo.address = data.address;
          _this.dataInfo.latitude = data.latitude;
          _this.dataInfo.longitude = data.longitude;
        }
      })
    },
  //获取类型
  radioChange(e){
    let val = e.detail.value;

    this.setData({
      type:val
    })

    this.dataInfo.type = val;
  },
  //获取需求
  handleChangeInfo(e){
    let val= e.detail.value;

    this.setData({
      info:val
    })

    this.dataInfo.info = val;
  },
  //联系电话
  handleChangeTel(e){
    let val = e.detail.value;

    this.setData({
      tel:val
    })

    this.dataInfo.tel = val;
  },
  //发布
  handlePublic(){
    var _this = this;
    wx.request({
      url: api.add,
      method:"post",
      data:this.dataInfo,
      success:function(){
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000,
          })

        setTimeout(()=>{
          _this.setData({
            flag:false
          })
        },2000)
      }
    })
  },
  handleTo(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  }
})
