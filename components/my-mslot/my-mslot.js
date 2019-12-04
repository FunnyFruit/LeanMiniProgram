// components/my-mslot/my-mslot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  /**
   * 多插槽属性开关
   */
  options:{
    multipleSlots:true
  },
  // 监听数据的改变 data / properties的数据 
  observers:{
    counter:function(newVal){
        console.log(newVal)
    }
  },

  /**
   * 组件的生命周期
   * 1.监听组件在页面的生命周期：：可以监听自己的生命周期，也可以监听页面的什么周期
   * 
   */
  // 监听页面的生命周期
  pageLifetimes:{
    show(){
      console.log("监听组件所在页面显示出来时")
    },
    hide(){
      console.log('监听组件所在页面隐藏时')
    },
    resize(){
      console.log('页面尺寸改变时')
    }
  },

  lefetimes:{
    created(){
      console.log("我被加载啦")
    }
  }


})
