// components/mcom/mcom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[],
      observer:function(newVal,oldVal){
          console.log(newVal,oldVal)
      }
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event){
      //取出前台传入的index
     const index = event.currentTarget.dataset.index
    //  修改currentIndex数据
      this.setData({
        currentIndex:index
      })

    // 通知页面内部的点击事件
      this.triggerEvent('itemclick',{index,title:this.properties.title[index]},{})

    }

  },
  /**
  *更改class属性
  */ 
  externalClasses:['titleclass']

})
