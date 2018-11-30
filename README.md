##  学习Vue.js的简易demo

### 前言

一直想学Vue，所以就放在了暑假学习的计划中，第一阶段的学习终于在月末有了成果，这些代码是[Vue教学视频](https://space.bilibili.com/16050117/#/favlist?fid=1993790) 里面的demo，部分代码不一样。
- [线上地址](http://vue-demo_1.demo.gotoss.cn/)
### 项目结构

````
.src
|-api  //axios获取数据
| +-- index.js
|-assets
|-components  //组件
| +-- MHeader.vue
| +-- Swiper.vue //轮播
| +-- Tabbar.vue
|-mock  //json-server 数据
| +-- data.json
|-page //页面
| +--Add.vue
| +--Cart.vue
| +--Detail.vue
| +--Home.vue
| +--List.vue
|-router //路由
|-store //Vuex
| +--getters.js
| +--index.js
| +--mutations.js
| +--mutations-type.js
|-main.js
|-App.vue
````

### 用到的主要模块

- [Vant](https://youzan.github.io/vant/)
- [json-server](https://www.npmjs.com/package/json-server)

### 运行程序

```
npm install
json-server -w src\mock\data.json
npm run dev
```


