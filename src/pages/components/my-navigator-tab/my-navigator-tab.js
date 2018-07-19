// components/component-tag-name.js
// const app = getApp()
Component({
  externalClasses: ['mask', 'mask-in'],
  properties: {
    propNav: {
      type: Array,
      value: [
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
    }
  },
  data: {}
})
