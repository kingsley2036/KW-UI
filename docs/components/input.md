---
title:input
---

# 输入框

<ClientOnly>
 <input-demo1></input-demo1>
 
 ::: details 点击查看代码
 ```html
  <g-input value="中文"></g-input>
  <g-input value="中文" disabled></g-input>
  <g-input value="中文" readonly></g-input>
  <g-input error="密码输入错误" icon="error1"></g-input>
 ```
 :::
</ClientOnly>
<ClientOnly>
 <input-demo2></input-demo2>
 
 ::: details 点击查看代码
 
 ```js
 data:{ value: '1' }
 ```
```html
 <g-input v-model="value"></g-input>
  <div> value: {{value}} </div>
```
 :::
</ClientOnly>
<input-attributes></input-attributes>