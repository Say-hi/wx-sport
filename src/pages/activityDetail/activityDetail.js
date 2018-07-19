// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    testImg: app.data.testImg,
    infoArr: [
      {
        i: 'icon-date-2',
        l: '活动时间',
        r: '123'
      },
      {
        i: 'icon-didian',
        l: '活动地点',
        r: '311321'
      },
      {
        i: 'icon-renyuanguanli',
        l: '参加人数',
        r: '311321'
      },
      {
        i: 'icon-qian',
        l: '契约金',
        r: '(0-100可选)',
        ruler: 1
      },
      {
        i: 'icon-liebiaomoshi',
        l: '完成条件',
        r: '(0-100可选)',
        ruler: 1
      },
      {
        i: 'icon-web__jiangli',
        l: '完成奖励',
        r: '阿斯顿发送到发送到发撒旦法撒旦法阿斯顿发撒旦法阿斯顿发撒旦法阿斯顿发阿斯顿发',
        ruler: 1
      }
    ],
    moneyArr: ['1', '20', '30', '50', '0'],
    currentMoney: -1,
    payChoose: 0,
    title: 'activityDetail'
  },
  apply () {
    if (!this.data.payMoney) return app.setToast(this, {content: '请选择契约金额度'})
  },
  payNow () {
    if (this.data.currentMoney < 0) return app.setToast(this, {content: '请选择契约金额度'})
    this.setData({
      payMoney: this.data.moneyArr[this.data.currentMoney] + '元'
    })
    this.maskChange()
  },
  showImg (e) {
    app.showImg(e)
  },
  maskChange () {
    this.setData({
      maskShow: !this.data.maskShow
    })
  },
  moneyChoose (e) {
    if (e.currentTarget.dataset.type === 'money') {
      this.setData({
        currentMoney: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        payChoose: e.currentTarget.dataset.index
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    app.setBar('活动报名')
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
