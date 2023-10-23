---
title: 微信小程序那些事
cover: 'https://npm.elemecdn.com/picture-bed@1.0.7/cover/bg-02.jpg'
background: url(https://npm.elemecdn.com/picture-bed@1.0.7/cover/bg-02.jpg)
tags: wechat
comments: true
date: 2022-09-24 15:53:16
updated: 2022-09-27 15:53:16
---

{% note green 'fas fa-fan' modern %}
记录下小程序开发中经常用到的东西,避免每次都要找浪费时间
{% endnote %}

## 授权相关
### 获取用户头像
```html
<button open-type="chooseAvatar" @chooseavatar="getAvatar">获取头像</button>
<script>
  getAvatar(e) {
    console.log(e.target.avatarUrl) // 获取微信头像或用户自定义头像
  }
</script>
```
### 进行地址选择
```html
<button open-type="chooseAddress" @tap="getAddress">选择收获地址</button>
<script>
uni.authorize({
  scope: 'scope.address',
  success: () => {
    uni.chooseAddress({
      success(res) {
        console.log(res) // 包括省市区/联系人/手机号码填写
      }
    })
  }
})
</script>
```

## 网络相关
### 发送请求
```js
wx.request({
  url: '/test',
  data: { a: '' },
  method: 'POST',
  header: {
    'content-type': 'application/json'
  },
  success (res) {
    console.log(res.data)
  }
})
```

## 页面相关
### 轮播图
```html
<swiper class="swiper" indicator-dots>
  <swiper-item>
    <view class="item">1</view>
  </swiper-item>
  <swiper-item>
    <view class="item">2</view>
  </swiper-item>
  <swiper-item>
    <view class="item">3</view>
  </swiper-item>
</swiper>

<style>
.swiper { height: 200px; }
.item {
  background-color: cyan;
  height: 100%;
}
</style>
```

### 长按选中
```html
<text selectable></text>
```

### 上拉刷新与下拉加载
```json
// pages.json
"enablePullDownRefresh": true,
"onReachBottomDistance": 120 // 触底距离
```

### 全局组件
```json
// pages.json
"easycom": {
  "autoscan": true,
  "custom": {
    "^u-(.*)": "/components/$1.vue"
  }
},
```

```js
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
```

---
{% referfrom '1.','uni.authorize','https://uniapp.dcloud.net.cn/api/other/authorize.html' %}
{% referfrom '2.','pages.json配置项','https://zh.uniapp.dcloud.io/collocation/pages.html' %}
{% referfrom '3.','uniapp导航api','https://uniapp.dcloud.net.cn/api/router.html' %}
{% referfrom '4.','小程序分包','https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html' %}
{% referfrom '5.','小程序支付','https://uniapp.dcloud.net.cn/api/plugins/payment.html#requestpayment' %}