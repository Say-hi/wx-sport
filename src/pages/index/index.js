// 获取全局应用程序实例对象
const app = getApp()
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    testImg: app.data.testImg,
    indicatorColor: '#ffffff',
    indicatorActiveColor: '#3caa78',
    currentTan: 0,
    hot: 'https://c.jiangwenqiang.com/workProject/payKnowledge/hot.png',
    tabArr: ['官方活动', '主题活动'],
    tabArr2: [
      {
        i: '../../../images/index_h.png',
        t: '活动',
        url: '../index/index',
        active: true
      },
      {
        i: '../../../images/card.png',
        t: '打卡',
        url: '../card/card'
      },
      {
        i: '../../../images/user.png',
        t: '我的',
        url: '../user/user'
      }
    ]
  },
  tabChoose (e) {
    this.setData({
      currentTan: e.currentTarget.dataset.index
    })
  },
  getLocation () {
    let that = this
    wx.getLocation({
      type: 'gcj02',
      success (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        app.su('userLocation', res)
        that.getIndex()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    app.setBar('首页')
    app.getSelf(this)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // console.log(' ---------- onReady ----------')
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // console.log(' ---------- onShow ----------')
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // console.log(' ---------- onHide ----------')
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // console.log(' ---------- onUnload ----------')
  },
  onShareAppMessage () {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // console.log(' ---------- onPullDownRefresh ----------')
  }
})
