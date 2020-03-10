##  KW UI 一个基于Vue的UI框架
[![Build Status](https://travis-ci.com/kingsley2036/KW-UI.svg?branch=master)](https://travis-ci.com/kingsley2036/KW-UI)
#### 介绍
使用Vue构建的UI框架
#### 安装
 使用本框架前请在css中开启border-box
```
*,*::before,*::after{box-sizing:border-box};
IE8以上浏览器支持此样式
``` 
```
npm install kw-ui
```
或
```
yarn add kw-ui
```
#### 开始使用
## hello world
```js
import {Button} from 'kw-ui'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button':Button
  }
})
```

####  作者:kingsley