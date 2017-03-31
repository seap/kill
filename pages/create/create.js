// pages/create/create.js
Page({
  data:{
    cards: [
      {id: 1, number: 3, name: '狼人', image: 'http://onkaj0xu3.bkt.clouddn.com/f_001.png'},
      {id: 2, number: 3, name: '平民', image: 'http://onkaj0xu3.bkt.clouddn.com/f_001.png'},
      {id: 3, number: 1, name: '预言家', image: 'http://onkaj0xu3.bkt.clouddn.com/f_001.png'},
      {id: 4, number: 1, name: '女巫', image: 'http://onkaj0xu3.bkt.clouddn.com/f_001.png'},
      {id: 5, number: 1, name: '猎人', image: 'http://onkaj0xu3.bkt.clouddn.com/f_001.png'}

    ]
  },
  bindDecreaseTap: function(e) {
    const index = e.currentTarget.dataset.index
    const { cards } = this.data
    const number = cards[index].number
    if (number > 0) {
      cards[index].number = number - 1
      this.setData({cards})
    }
  },
  bindIncreaseTap: function(e) {
    const index = e.currentTarget.dataset.index
    const { cards } = this.data
    const number = cards[index].number
    if (number < 9) {
      cards[index].number = number + 1
      this.setData({cards})
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
