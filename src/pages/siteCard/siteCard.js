// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showLocation: true,
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
    circles: [],
    title: 'siteCard'
  },
  // 距离计算
  distance (lat1, lng1, lat2, lng2) {
    let radLat1 = lat1 * Math.PI / 180.0
    let radLat2 = lat2 * Math.PI / 180.0
    let a = radLat1 - radLat2
    let b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0
    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)))
    s = s * 6378.137
    s = Math.round(s * 10000) / 10000
    if (s > 500) return false
    else return true
  },
  record () {
    if (this.data.status) this.showModal()
    this.setData({
      status: true
    })
  },
  // 设置打卡范围圆
  setScircle (latitude, longitude) {
    let circle = {
      latitude,
      longitude,
      color: '#ffad0eff',
      fillColor: '#00a0e980',
      radius: 250,
      strokeWidth: 1
    }
    this.data.circles.push(circle)
    this.setData({
      circles: this.data.circles
    })
  },
  getUserLocation () {
    let that = this
    wx.getLocation({
      type: 'gcj02',
      success (res2) {
        that.setData({
          needSetting: false,
          latitude: res2.latitude,
          longitude: res2.longitude
        })
      },
      fail () {
        that.setData({
          needSetting: true
        })
      }
    })
  },
  openSetting () {
    let that = this
    wx.openSetting({
      success (res) {
        if (res.authSetting['scope.userLocation']) {
          that.getUserLocation()
        }
      }
    })
  },
  showModal () {
    let that = this
    wx.showModal({
      title: '记录结束',
      content: `打卡时长: ${that.data.time || '20分钟'}`,
      showCancel: false,
      confirmText: '返回',
      confirmColor: '#00a0e9'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    this.getUserLocation()
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
