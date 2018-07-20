// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTan: 0,
    tabArr: ['图片打卡', '位置打卡'],
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
    activityArr: [
      {
        per: 20
      },
      {
        per: 30
      },
      {
        per: 40
      },
      {
        per: 50
      },
      {
        per: 55
      },
      {
        per: 78
      },
      {
        per: 90
      },
      {
        per: 95,
        finish: true
      },
      {
        per: 100
      }
    ],
    title: 'card'
  },
  tabChoose (e) {
    this.setData({
      currentTan: e.currentTarget.dataset.index
    })
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
