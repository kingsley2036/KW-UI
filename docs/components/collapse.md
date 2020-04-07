---
title:collapse
---

# 手风琴

<ClientOnly>
 <collapse-demo1></collapse-demo1>
 ::: details 点击查看代码
 
 ```js
selectedTab:['2','3']
```
 
 ```html
 <g-collapse :selected.sync="selectedTab"  >
      <g-collapse-item title="标题1" name="1">
          内容111
      </g-collapse-item>
      <g-collapse-item title="标题2" name="2">
          内容222222
      </g-collapse-item>
      <g-collapse-item title="标题3" name="3">
          内容33333333333
      </g-collapse-item>
 </g-collapse>
 ```
 :::
</ClientOnly>

<ClientOnly>
 <collapse-demo2></collapse-demo2>
 
::: details 点击查看代码
```js
 data:{selectedTab:['1'] }
```

```html
 <g-collapse :selected.sync="selectedTab"  single>
   <g-collapse-item title="标题1" name="1">
       内容111
   </g-collapse-item>
   <g-collapse-item title="标题2" name="2">
       内容222222
   </g-collapse-item>
   <g-collapse-item title="标题3" name="3">
       内容33333333333
   </g-collapse-item>
 </g-collapse>
```
 :::
</ClientOnly>

<collapse-attributes></collapse-attributes>
<collapse-item-attributes></collapse-item-attributes>
