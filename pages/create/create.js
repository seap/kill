// pages/create/create.js
Page({
  data:{
    cards: [
      {id: 1, number: 3},
      {id: 2, number: 3},
      {id: 3, number: 3},
      {id: 4, number: 3}
    ]
  },
  bindDecreaseTap: function(e) {
    const index = e.currentTarget.dataset.index
    const { cards } = this.data
    const number = cards[index].number
    if (number > 0) {
      cards[index].number = --number
      this.setData({
        cards: cards
      })
    }

  },
  bindIncreaseTap: function(e) {
    const index = e.currentTarget.dataset.index
    const { cards } = this.data
    const number = cards[index].number
    if (number < 9) {
      cards[index].number = ++number
      this.setData({
        cards: cards
      })
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
