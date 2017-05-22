# 蕨菜微信端

> 蕨菜前端微信app

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 开发底层封装流程

```
  1、先写mock数据，参考utils下的mock包中的文件，每一个mock文件对应一个请求
  写完mock文件后，在main.js中把这个mock引入进来，如：
  import userMock from './utils/mock/userMock'
  Vue.use(userMock)
  2、然后开始写model，在models包下新建一个model，更改path为相应的地址
  3、之后写vuex层的东西，在modules包下新建一个模块，写完这个模块后不要忘记了
  在store中将你写的模块注册添加。
  4、在应用层中直接调用dispatch分发事件。。。
```
# 开发业务层流程

```
  1、不要修改models包，vuex包，utils包，App.vue以及main.js文件！！！
     不要修改models包，vuex包，utils包，App.vue以及main.js文件！！！
     不要修改models包，vuex包，utils包，App.vue以及main.js文件！！！
     重要的事情说三遍。
  2、在components包下写页面的业务逻辑以及布局，如果需要调用相应的网络请求
     可以去找封装底层人员询问接口。
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
