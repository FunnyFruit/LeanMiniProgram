// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      message:"Mike龙",
      fastname:"Mike",
      lastname:"long",
      age:20,
      time:new Date().toLocaleString(),
      isActive:false,
      isShow:true,
      score:50,
      movies:['滑稽果','滑稽树','滑稽水'],
      nums:[
        [1,2,3,4,5],
        [11,22,44,55,22],
        [3,2,1,5,4]
      ],
      letters:['a','b','c','d']
  },


  onLoad(){
    // 定时器
    setInterval(()=>{
      this.setData({
        time:new Date().toLocaleString()
      })
    },1000)
  },

  handleSwitchColor(){
    this.setData({
      // 将data里面的isActive数据取反。
      isActive:!this.data.isActive
    })

  },

// wx:if显示、隐藏内容
  handleChangeShow(){
    // 将data里面的isshow取反
    this.setData({
      isShow:!this.data.isShow
    })
  },

  // 增加分数
  handleAddScore(){
    this.setData({
      score:this.data.score + 6
    })
  }

})