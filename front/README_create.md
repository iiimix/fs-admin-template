
# 项目搭建过程说明

## 项目根目录，创建front前端项目，使用vue-cli create命令
```
vue create front
```

>注意：创建项目过程中，需要使用到上下箭头来选择，需要在git安装路径`xxx/etc/bash.bashrc`文件末尾添加命令别名`alias vue='winpty vue.cmd'`，重启git bash终端即可生效。其他方案见[官网](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)


## 选择预设配置（Please pick a preset）-->选择手动自定义（Manually select features）

## 选择自定义特性
- babel
- router
- Vuex
- CSS Pre-processors
- Linter / Formatter
- Unit Testing

## router使用 history mode还是其他模式，选择否（N）
histor模式需要服务端支持始终返回index页面，前端处理服务异常等问题，建议使用hash模式


## 选择样式预处理器（pick a css pre-processor）,选择Sass-SCSS

为了后续支持ant-design-vue，这里改为选择less

## 选择ESLint+Prettier

## 选择Lint on save

## 选择单元测试解决方案，选择Jest

## 所有配置单独文件，选择In dedicated config files，与其相对应的是单个配置文件`vue.config.js`,配置说明见[官网](https://cli.vuejs.org/zh/config/#vue-config-js)

## 是否保存特性配置，保存方便下次创建项目使用，随后输入一个特性配置名称即可


## 引入`Ant-design-vue`
`npm i -S ant-design-vue`

## 增加less-loader，由于antd-design-vue使用了less
- 1. 使用`vue add style-resources-loader`
- 2. 选择less
- 3. 安装less, less-loader
```npm i -D less less-loader```
- 4. 修改vue.config.js,增加css
```
css: {
    loaderOptions: {
      less: {
        // less 变量覆盖，用于自定义ant design主题色
        modifyVars: {
        },
        javascriptEnabled: true
      }
    }
  }
```
- 5. 修改style对应scss为less

## 增加全局filter配置，位于utils/filter.js
- 1. 安装moment时间插件
- 2. 新增第一个filter，moment日期时间过滤器
