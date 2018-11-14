# learn-vue-music
>学写一个音乐播放器

## 计划:
- [ ] (第一步使用原课程中的打包逻辑)用 js 模块的思想研究一下 webpack 配置
- [ ] 完成主项目前端内容(简单的代码不好意思地 copy 一下别人现有的代码以求快速产品迭代 [参考1]()  [参考2]())
- [ ] 后端试用一下 express 比较和 koa 的区别
- [ ] 计划使用其它 js 代替better-scroll
- [ ] 发布前迁移至`nuxt.js`,将前面代码设置为分支
- [ ] QQ音乐和网易云两种风格皮肤切换
- [ ] 新功能
  - [ ] "添加至下一首播放"
  - [ ] title 栏随播放的曲目而滚动
  - [ ] 对用户访问进行统计分析(初期:七牛云静态资源,后期:自己码后端统计代码,~~通用统计 js 会被广告拦截插件屏蔽掉~~)
  - [ ] 爬取网易云评论
- [ ] 开 Issue 和 PR 解决一下各种 bug
  - [ ] 请求音频失败时的处理
  - [ ] 移动端 input 引起的缩放异常

## 知识点总结:
### 1. SVG
### 2. 音频信息处理
### 3. 移动端滚动
### 4. Webpack 配置
- 别名(alias + resolve)[腾讯文档](https://webpack.docschina.org/configuration/resolve/):
    ```js
    module.exports = {
    //...
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.js',
                'src': resolve('src'),
            }
        }
    },
    ```
    其中`$`表示精确匹配

