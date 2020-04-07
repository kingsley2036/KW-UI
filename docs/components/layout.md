---
title:layout
---

# 布局

<ClientOnly>
 <layout-demo1></layout-demo1>
 ::: details 点击查看代码
 ```html
  <g-layout style="color: white; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">
      header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
  </g-layout>
 ```
 :::
</ClientOnly>

<ClientOnly>
 <layout-demo2></layout-demo2>
 ::: details 点击查看代码
 
 ```html
  <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
     <g-header style="height: 50px; background:lightskyblue;">
       header
     </g-header>
     <g-layout>
       <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
         sider
       </g-sider>
       <g-content style="height: 100px; background:deepskyblue;">
         content
       </g-content>
     </g-layout>
     <g-footer style="height: 50px; background:lightskyblue;">
       footer
     </g-footer>
   </g-layout>
 ```
 :::
</ClientOnly>