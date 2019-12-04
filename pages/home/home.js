// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0

  },
  handleIncrement(event){
    console.log(event)
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleTabClick(event) {
    console.log(event)
  },
  handleIncrementCpn(){
    console.log("1-092094-1029340-");
    //修改my-sel内的counter的数据
    // 1. 获取组件对象 const my_sel = this.selectComponent('id|class')
    
    const my_sel = this.selectComponent('#my_sel')
    console.log(my_sel)
    //修改组件内的数据:通过一个方法接口，来修改数据
    /*
    组件对象.setData({
      组件属性：值
    })
    */
    

    // 通过方法来修改数据：调用组件的接口
    my_sel.incrementCounter(10);

  }
})