// components/my-prop/my-prop.js
Component({
  /**
   * 外界传入数据使用的东西
   * 组件的属性列表
   * 字段：类型
   */
  properties: {
    title:{
      type:String,
      value:'默认标题',
      //随时更新数据时 观察者：：::
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    },content: {
      type: String,
      value: '默认内容',
      //随时更新数据时 观察者：：::
      observer: function (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }

  },

  /**
   *更换class属性 
   */ 
  externalClasses:['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
