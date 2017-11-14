# mapp
这是一个fork自[pwa](https://github.com/vuejs-templates/pwa)的用于移动端开发的基于vue的前端框架。

## 集成模块
集成`vue`、`vue-router`做基础框架，因为考虑到移动端开发的功能和复杂程度并没有集成`vuex`，而是使用一个`vue bus`的模式实现，开发中遵守一定的规则就可以。
集成`simple-vue-validator`做表单验证，集成loadsh做js工具集，loadsh请使用如下按需加载的方式以减少打包体积，其余模块请按需添加。
```js
import { isArray, fill } from 'lodash'
```

## 代码约束
`src`目录下的代码使用`vue`的编码习惯，使用的规范是[eslint-plugin-vue-libs](https://github.com/vuejs/eslint-plugin-vue-libs)

## 样式约定
- 因为使用`vw` `vh`作为尺寸单位，所以移动端要求浏览器是 `["iOS >= 7", "Android >= 4.4"]`，低端版本不考虑，对就是这么任性。
- 全面使用`flex`布局，尽量使用提供的`flex`辅助类进行dom布局。

## 其它功能
- `npm run build`时会复制`build/_redirects`到`dist/`目录下，方便使用`Netlify`等工具的部署。
- 在全局安装了`svgo`命令后执行`npm run optimize-svg`会优化`/static/img/icons/safari-pinned-tab.svg`文件。
  本地安装`svg2png`和`to-ico`模块后执行`npm run icons`会根据`/static/img/icons/safari-pinned-tab.svg`文件生成所有的图标文件。
  这2个命令只是辅助用途，用来根据单个svg文件快速生成项目的各种logo和icon文件。实际项目中这些文件可能是单独生成的。
- `vue` `vue-router` `simple-vue-validator`在发布时使用了npm官方的cdn地址来加速请求，实际使用时请替换为更快的cdn。
- 路由通过`meta.order`约定该页面的展示层级顺序，数字越小表示页面越靠前。在转场时从大`order`跳转到小`order`是右滑的返回效果，反之是左滑的前进效果。
- 由于基于`pwa`项目，所以`pwa`项目的特性都包括，例如`service-worker`、`manifest`、`theme`等，具体可搜索修改。

## 运行命令
```bash
# 开发
npm run dev

# 构建，使用 npm run build --report可查看打包后每个模块的占用体积从而优化代码
npm run build

# 代码检查
npm run lint
```

## CI/CD
这里只提供一个思路，具体根据自身情况定制。
- 如果使用`Netlify`部署可直接在`Netlify`中配置执行命令为`npm run build`，目标目录为`dist`。
- 如果是其它静态部署服务，建议先通过CI执行`npm run build`，然后通过ssh的方式将构建后的`dist`目录推送到目标服务容器（注：该容器需要支持redirect功能，具体可查看[Example Server Configurations](https://router.vuejs.org/en/essentials/history-mode.html)）。
- 如果不支持ssh部署的方式，可以先CI执行`npm run build`，然后将构建后的`dist`目录推送到项目的`build`目录，
  部署服务器通过webhook的方式订阅项目更新，捕获到`build`分支提交后执行`git pull`或下载项目的行为，可参考我的另一个项目[phook](https://bitbucket.org/erguotou520/phook)
