
module.exports = {
  publicPath: "./" // 默认'/'，部署应用包时的基本 URL
  // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  // assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
  // pages,


    //   devServer: {
    //     // overlay: { // 让浏览器 overlay 同时显示警告和错误
    //     //   warnings: true,
    //     //   errors: true
    //     // },
    //     // open: false, // 是否打开浏览器
    //     // host: "localhost",
    //     // port: "8080", // 代理断就
    //     // https: false,
    //     // hotOnly: false, // 热更新
    //     proxy: {
    //       "/api": {
    //         target:
    //           "https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets", // 目标代理接口地址
    //         secure: false,
    //         changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
    //         // ws: true, // 是否启用websockets
    //         pathRewrite: {
    //           "^/api": "/"
    //         }
    //       }
    //     }
    //   }
};