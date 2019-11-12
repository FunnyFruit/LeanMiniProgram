Page({
  data:{
    name:"coderwhy",
    age: 18,
    students: [
      { id: 101, name: 'mike', age: 28 },
      { id: 102, name: 'mike2', age: 22 },
      { id: 103, name: 'mike3', age: 21 },
      { id: 104, name: 'mike4', age: 24 },
      { id: 105, name: 'mike5', age: 22 },
      { id: 106, name: 'mike6', age: 26 },
    ],
    counter:0,
    num:100
      },

  handleBtnClick() {
    //界面数据不会刷新
    //this.data.counter += 1

    //this.setData
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnClick1() {
    //界面数据不会刷新
    //this.data.counter += 1

    //this.setData
    this.setData({
      num: this.data.num - 1
    })
  }

})