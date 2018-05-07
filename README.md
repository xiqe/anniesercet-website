# anniesercet-website
基于vue-cli与nuxt1.0+的前端构建框架，该项目属于纯静态，目录结构可随意修改动态。


### 拷贝项目模板

``` bash
$ git clone git@github.com:xiqe/anniesercet-website.git
```

### 安装依赖模块

``` bash
# install dependencies
$ npm install # Or yarn install
```

### 本地开发环境

``` bash
# serve with hot reload at localhost:8080
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

### 目录结构

``` js
- anniesercet-web/         # 项目名称
  + assets/                # img/css/js等资源文件
  + components/            # vue components
  + dist/                  # 生成静态页面文件夹
  + layouts/               # 模版文件
  + middleware/            # 中间件
  + pages/                 # 页面文件（文件目录结构即为router结构）
  + plugins/               # 存放插件
  + static/                # 编译输出目录
  + store/                 # vuex目录
  eslintrc.js              # eslint
  nuxt.config.js           # nuxt配置文件
  package.json             # 项目配置
  README.md                # 项目说明
```


### 部署&发布

纯静态页面型的应用，直接把`dist`文件夹部署到指定机器即可（先配置好机器ip、密码、上传路径等信息）

###项目地址

[http://anniesecret.com/](http://anniesecret.com/?_blank)


