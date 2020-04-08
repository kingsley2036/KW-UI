---
title:button
---

# 按钮

<ClientOnly>
 <button-demo></button-demo>
 ::: details 点击查看代码
 ```html
    <g-button>默认按钮</g-button>
    <g-button icon="settings">图标按钮</g-button>
    <g-button :isLoading="loading" @click="changeLoading">加载按钮</g-button>
    <g-button disabled>禁用按钮</g-button>
 ```
 :::
</ClientOnly>

<ClientOnly>
<button-groupdemo></button-groupdemo>

 ::: details 点击查看代码
 ```html
  <g-button-group>
     <g-button icon="left">上一页</g-button>
     <g-button>更多</g-button>
     <g-button icon="right" icon-position="right">下一页</g-button>
  </g-button-group>
 ```
 :::

</ClientOnly>

<button-attributes></button-attributes>


