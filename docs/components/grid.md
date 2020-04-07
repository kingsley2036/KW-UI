---
title:grid
---

# 网格

<ClientOnly>
 <grid-demo1></grid-demo1>
 ::: details 点击查看代码
 
 ```html
<g-row class="demoRow">
   <g-col span="8"><div class="demoCol">8</div> </g-col>
   <g-col span="8"> <div class="demoCol">8</div> </g-col>
   <g-col span="8"> <div class="demoCol">8</div> </g-col>
</g-row>
<g-row class="demoRow">
    <g-col span="6"> <div class="demoCol">6</div> </g-col>
    <g-col span="6"> <div class="demoCol">6</div> </g-col>
    <g-col span="6"> <div class="demoCol">6</div> </g-col>
    <g-col span="6"> <div class="demoCol">6</div> </g-col>
</g-row>
<g-row class="demoRow">
     <g-col span="4"> <div class="demoCol">4</div> </g-col>
     <g-col span="4"> <div class="demoCol">4</div> </g-col>
     <g-col span="4"> <div class="demoCol">4</div> </g-col>
     <g-col span="4"> <div class="demoCol">4</div> </g-col>
     <g-col span="4"> <div class="demoCol">4</div> </g-col>
     <g-col span="4"> <div class="demoCol">4</div> </g-col>
</g-row>
 ```
 :::
</ClientOnly>

<ClientOnly>
 <grid-demo2></grid-demo2>
 
 ::: details 点击查看代码
 ```html
  <g-row class="demoRow" gutter="10">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
  </g-row>
  <g-row class="demoRow" gutter="10">
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
  </g-row>
 ```
 :::
</ClientOnly>
<ClientOnly>
 <grid-demo3></grid-demo3>
 
 ::: details 点击查看代码
 ```html
 <g-row class="demoRow" gutter="10">
     <g-col span="4">
       <div class="demoCol">4</div>
     </g-col>
     <g-col span="4" offset="4">
       <div class="demoCol">4</div>
     </g-col>
     <g-col span="4" offset="8">
       <div class="demoCol">4</div>
     </g-col>
 </g-row>
 <g-row class="demoRow" gutter="10">
     <g-col span="2">
       <div class="demoCol">2</div>
     </g-col>
     <g-col span="2" offset="2">
       <div class="demoCol">2</div>
     </g-col>
     <g-col span="2">
       <div class="demoCol">2</div>
     </g-col>
     <g-col span="2" offset="2">
       <div class="demoCol">2</div>
     </g-col>
     <g-col span="2">
       <div class="demoCol">2</div>
     </g-col>
     <g-col span="2" offset="2">
       <div class="demoCol">2</div>
     </g-col>
     <g-col span="2">
       <div class="demoCol">2</div>
     </g-col>
     <g-col span="2" offset="2">
       <div class="demoCol">2</div>
     </g-col>
 </g-row>
 ```
 :::
</ClientOnly>

<row-attributes></row-attributes>
<col-attributes></col-attributes>