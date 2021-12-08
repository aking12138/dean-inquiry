module.exports = {
  // 输出文件目录
  outputDir: "dist", // 默认dist
  // 用于嵌套生成的静态资产（js,css,img,fonts）目录
  assetsDir: 'assets',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  indexPath: "index.html", // Default: 'index.html'
  filenameHashing: true,
  // 构建多页时使用
  pages: undefined,
  // eslint-loader是否在保存的时候检查
  lintOnSave: true,
  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // css相关配置
  css: {
  },
  //开发模式反向代理配置，生产模式请使用Nginx部署并配置反向代理
  devServer: {
    port: 8085,
    proxy: {
      "/api": {
        //本地服务接口地址
        //target: "http://192.168.3.169:8080",
        target: "http://localhost:8083/admin",
        //远程演示服务地址,可用于直接启动项目
        ws: true,
        pathRewrite: {
          "^/api": '',
        },
      },
    },
  },
  // PWA 插件相关配置
  pwa: {},
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
};
