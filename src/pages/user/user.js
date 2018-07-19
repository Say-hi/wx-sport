// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
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
        i: '../../../images/card.png',
        t: '打卡',
        url: '../card/card'
      },
      {
        i: '../../../images/user_h.png',
        t: '我的',
        url: '../user/user',
        active: true
      }
    ],
    urlArr: [
      {
        i: 'icon-09',
        t: '新手指南',
        url: '../ruler/ruler'
      },
      {
        i: 'icon-tongzhi',
        t: '官方通知',
        url: '../notice/notice'
      },
      {
        i: 'icon-fankuiyijian',
        t: '意见反馈',
        url: '../feedback/feedback'
      }
    ],
    title: 'user'
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
