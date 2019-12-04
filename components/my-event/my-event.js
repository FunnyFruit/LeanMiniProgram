// components/my-event/my-event.js
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
   * 
   */
  methods: {
    // 事件
    handleIncrement(){
      // 将数据传出到当前计数
      this.triggerEvent('increment',{},{})
    }

  }
})
