---
title:popover
---

# popover

<ClientOnly>
 <popover-demo></popover-demo>
 ::: details 点击查看代码
 ```html
 <g-popover>
    <g-button>上方弹出</g-button>
    <template slot="content">弹出内容</template>
 </g-popover>
 <g-popover position="bottom">
   <g-button>下方弹出</g-button>
   <template slot="content">弹出内容</template>
 </g-popover>
 <g-popover position="left">
   <g-button>左边弹出</g-button>
   <template slot="content">弹出内容</template>
 </g-popover>
 <g-popover position="right">
   <g-button>右边弹出</g-button>
   <template slot="content">弹出内容</template>
 </g-popover>
 ```
 :::
</ClientOnly>
<ClientOnly>
 <popover-demo1></popover-demo1>
 
 ::: details 点击查看代码
 
 ```html
 <g-popover trigger="hover">
   <g-button>上方弹出</g-button>
   <template slot="content"> 弹出内容 </template>
 </g-popover>
 <g-popover position="bottom" trigger="hover">
   <g-button>下方弹出</g-button>
   <template slot="content"> 弹出内容 </template>
 </g-popover>
 <g-popover position="left" trigger="hover">
   <g-button>左边弹出</g-button>
   <template slot="content"> 弹出内容 </template>
 </g-popover>
 <g-popover position="right" trigger="hover">
   <g-button>右边弹出</g-button>
   <template slot="content"> 弹出内容 </template>
 </g-popover>
 ```
 :::
</ClientOnly>

<popover-attributes></popover-attributes>