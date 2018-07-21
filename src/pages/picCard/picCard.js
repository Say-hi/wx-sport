// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
let numArr = []
for (let i = 0; i < 100; i++) {
  numArr.push(i.toString())
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabArr2: [
      {
        i: '../../../images/index.png',
        t: '活动',
        url: '../index/index'
      },
      {
        i: '../../../images/card_h.png',
        t: '打卡',
        url: '../card/card',
        active: true
      },
      {
        i: '../../../images/user.png',
        t: '我的',
        url: '../user/user'
      }
    ],
    upImgArr: [
      app.data.testImg
    ],
    testImg: app.data.testImg,
    title: 'picCard',
    one_index: -1,
    two_index: -1,
    numArr: numArr
  },
  showImg (e) {
    app.showImg(e)
  },
  del (e) {
    this.data.upImgArr.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      upImgArr: this.data.upImgArr
    })
  },
  bindPickerChange (e) {
    if (e.currentTarget.dataset.type === 'one') {
      this.setData({
        one_index: e.detail.value
      })
    } else {
      this.setData({
        two_index: e.detail.value
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    app.getSelf(this)
    // TODO: onLoad
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})
