module.exports = {
  projectName: "消息路由APP", // 项目名称
  script: "npm run build", // 打包脚本（注释掉即不执行该命令，直接上传）

  // 根据需要进行配置，如prod106等（key命名不可出现特殊字符，不可以数字开头），支持多环境部署
  // 上传服务器并采用docker方式部署重启配置案例
  prod106: {
    name: "prod106环境",
    host: "192.168.78.106", // 服务器地址,其中xxx为手动输入ip末尾
    port: 22, // ssh port，一般默认22
    username: "root", // 登录服务器用户名
    password: "", // 登录服务器密码
    distPath: "dist", // 当前工程中需要上传服务器的文件夹（前不加斜杠标识相对当前工程目录，如加斜杠就需要写出本地完整绝对路径)
    webDir: "/root/temp/messageRouteApp", // 打包文件上传服务器地址(会将上一行配置的distPath文件夹上传到该位置)
    dockerName: "messageroute", // docker名称
    dockerWebDir: "/usr/app", // 容器中文件存放位置
    // lastCmd: 'pm2 restart app' // 所有动作执行完之后在服务器上执行的自定义命令
  },
  // 单文件上传，更新到docker配置案例
  confdocker106: {
    name: "conf106环境",
    host: "192.168.78.106", // 服务器地址,其中xxx为手动输入ip末尾
    port: 22, // ssh port，一般默认22
    username: "root", // 登录服务器用户名
    password: "", // 登录服务器密码
    distPath: "src/App.vue", // 当前工程中需要上传服务器的文件名相对路径
    webDir: "/root/temp/messageRouteApp", // 打包文件上传服务器地址
    dockerName: "messageroute", // docker名称
    dockerWebDir: "/usr/app", // 容器中文件存放位置
  },
  // 单纯前端更新dist静态资源配置案例（无docker）
  104: {
    name: "104环境",
    host: "192.168.78.104", // 服务器地址,其中xxx为手动输入ip末尾
    port: 22, // ssh port，一般默认22
    username: "root", // 登录服务器用户名
    password: "", // 登录服务器密码
    distPath: "dist", // 需要上传服务器的文件夹（前不加斜杠标识相对当前工程目录，如加斜杠就是完整绝对路径)
    webDir: "/opt/nginx/",
  },
  // webserver部署重启pm2配置案例（无docker）
  247: {
    name: "247环境",
    host: "192.168.78.247", // 服务器地址,其中xxx为手动输入ip末尾
    port: 22, // ssh port，一般默认22
    username: "root", // 登录服务器用户名
    password: "", // 登录服务器密码
    distPath: "dist/favicon.ico", // 需要上传服务器的文件夹（前不加斜杠标识相对当前工程目录，如加斜杠就是完整绝对路径)
    webDir: "/root/apps/",
    lastCmd: "pm2 restart app", // 所有动作执行完之后在服务器上执行的自定义命令
  },
  228: {
    name: "228环境",
    host: "192.168.78.228", // 服务器地址,其中xxx为手动输入ip末尾
    port: 22, // ssh port，一般默认22
    username: "root", // 登录服务器用户名
    password: "", // 登录服务器密码
    distPath: "dist", // 需要上传服务器的文件夹（前不加斜杠标识相对当前工程目录，如加斜杠就是完整绝对路径)
    webDir: "/root/temp/messageRouteApp/dist",
    dockerName: "messageroute", // docker名称
    dockerWebDir: "/usr/app", // 容器中文件存放位置
  },
  // 再还有多余的环境按照这个格式写即可
};
