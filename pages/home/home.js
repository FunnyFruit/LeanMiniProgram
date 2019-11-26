// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['鞋子','衣服','裤子','滑稽']

  },
  handleBtnClick(){
    console.log("卧槽 不要点我");
  },

  handleToucheStart(){
    console.log('handleToucheStart')
  },

  handleToucheMove() {
    console.log('handleToucheMove')
  },
  handleTouchend() {
    console.log('handleTouchend')
  },
  handleTap() {
    console.log('handleTap')
  },
  handleLongpress() {
    console.log('handleLongpress')
  },

  handleEventClick(event){
      console.log('=====',event)
  },
  handleEnentEnd(event){
    console.log("+++++",event)

  },
  
   handleInner(event) {
    console.log("内层的view", event)
  },
  
  
   handleOuter(event) {
    console.log("外层的view", event)
  },

  handleItemClick(event) {
    console.log('----', event)
    const dataset = event.currentTarget.dataset
    const title = dataset.item
    const index = dataset.index
    console.log(title,index)
},
// 事件冒泡和事件的捕获
  handleCaptureView1(){
    console.log("handleCaptureView1")
  },
  handleBindView1(){
    console.log("handleBindView1")
  },
  handleCaptureView2() {
    console.log("handleCaptureView2")

  },
  handleBindView2() {
    console.log("handleBindView2")

  }, handleCaptureView3() {
    console.log("handleCaptureView3")

  },
  handleBindView3() {
    console.log("handleBindView3")

  },


})