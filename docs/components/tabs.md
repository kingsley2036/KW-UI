---
title:tabs
---

# 标签

<ClientOnly>
 <tabs-demo></tabs-demo>
 
 ::: details 点击查看代码
 ```js
  data:{
            selected: 'sports'
          }
```
```html
      <g-tabs :selected="selected" >
            <g-tabs-head >
                <g-tabs-item name="sports">
                    <g-icon name="sports" class="iconStyle"></g-icon>
                    体育</g-tabs-item>
                <g-tabs-item name="finance">
                    <g-icon name="finance" class="iconStyle"></g-icon>
                    财经</g-tabs-item>
                <g-tabs-item name="entertainment" disabled>
                    <g-icon name="entertainment" class="iconStyle"></g-icon>
                    娱乐</g-tabs-item>
                <template slot="actions">
                    <button>设置</button>
                </template>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="sports">体育资讯</g-tabs-pane>
                <g-tabs-pane name="finance">财经资讯</g-tabs-pane>
                <g-tabs-pane name="entertainment">娱乐资讯</g-tabs-pane>
            </g-tabs-body>
      </g-tabs>
```
        

 :::
</ClientOnly>
<tabs-attributes></tabs-attributes>
<tabs-item-attributes></tabs-item-attributes>
<tabs-pane-attributes></tabs-pane-attributes>