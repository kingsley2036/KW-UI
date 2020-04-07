---
title:toast
---

# toast

<ClientOnly>
 <toast-demo1></toast-demo1>
 ::: details 点击查看代码
 ```html
 <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
 <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
 <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
 ```
 :::
</ClientOnly>

<ClientOnly>
 <toast-demo2></toast-demo2>
 
 ::: details 点击查看代码
 ```html
<div>
<g-button @click="onClickButton">上方弹出</g-button>
</div>
```
 
 ```js
methods: {
            onClickButton () {
              this.$toast('你知道我在等你吗？', {
                closeButton: {
                  text: '知道了',
                  callback: () => {
                    console.log('他说知道了')
                  }
                }
              })
            }
        }
 ```
 :::
</ClientOnly>

<toast-attributes></toast-attributes>