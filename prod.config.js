module.exports = {
  projectName: "消息路由APP", // 项目名称
  // 前端打包脚本（注释掉即不执行该命令，直接执行后续更新）
  script: "npm run build",

  // java打包脚本（注释掉即不执行该命令，直接执行后续更新）
  // script: "mvn package -Dmaven.skip=true",

  // 配置项如下，如106等（key命名不可出现特殊字符，不可以数字开头），支持多环境部署，再还有其他环境按照下面格式写即可

  // （1）单纯前端更新dist静态资源配置案例（无docker）
  104: {
    name: "104环境", // 环境名称
    host: "192.168.78.104", // 服务器ip地址
    port: 22, // ssh连接端口（一般默认22）
    username: "", // ssh登录服务器用户名
    password: "", // ssh登录服务器密码
    distPath: "dist", // 当前工程下该文件夹下所有文件上传服务器（前不加斜杠表示当前工程目录下相对路径，如前加斜杠就是本机绝对路径)
    webDir: "/root/zzftest/", // 文件上传服务器绝对路径
  },
  // (2)前端更新静态资源到docker并重启配置案例
  106: {
    name: "106环境", // 环境名称
    host: "192.168.78.106", // 服务器ip地址
    port: 22, // ssh连接端口（一般默认22）
    username: "", // ssh登录服务器用户名
    password: "", // ssh登录服务器密码
    distPath: "dist", // 当前工程下该文件夹下所有文件上传服务器（前不加斜杠标识相对当前工程目录，如加斜杠就需要写出本地完整绝对路径)
    webDir: "/root/temp/messageRouteApp/dist", // 文件上传服务器绝对路径
    dockerName: "messageroute", // docker名称
    dockerWebDir: "/usr/app", // 容器中文件存放位置
    // lastCmd: 'pm2 restart app' // 所有动作执行完之后在服务器上执行的自定义命令(不配置即不执行)
  },
  // （3）单文件上传，更新到docker配置案例
  conf106: {
    name: "conf106环境", // 环境名称
    host: "192.168.78.106", // 服务器ip地址
    port: 22, // ssh连接端口（一般默认22）
    username: "", // ssh登录服务器用户名
    password: "", // ssh登录服务器密码
    // distPath: 'conf/systemConf.hjson',  // 当前工程中需上传服务器的文件名  webserver
    distPath: "application-dev.properties", // java环境
    webDir: "/root/temp/messageRouteApp", // 文件上传服务器绝对路径
    dockerName: "messageroute", // docker名称
    dockerWebDir: "/usr/app", // 容器中文件存放位置
  },
  // （4）本地文件夹下多文件上传，更新到docker配置案例
  muti106: {
    name: "conf106环境", // 环境名称
    host: "192.168.78.106", // 服务器ip地址
    port: 22, // ssh连接端口（一般默认22）
    username: "", // ssh登录服务器用户名
    password: "", // ssh登录服务器密码
    distPath: "src/api", // 当前工程该文件夹下的所有文件均需要上传服务器（两端不加斜杠）
    webDir: "/root/temp/messageRouteApp/fuck", // 文件上传服务器绝对路径
    dockerName: "messageroute", // docker名称
    dockerWebDir: "/usr/app", // 容器中文件存放位置
  },

  // （5）webserver更新重启pm2配置案例
  247: {
    name: "247环境", // 环境名称
    host: "192.168.78.247", // 服务器ip地址
    port: 22, // ssh连接端口（一般默认22）
    username: "", // ssh登录服务器用户名
    password: "", // ssh登录服务器密码
    distPath: "build", // 需要上传服务器的文件夹（前不加斜杠标识相对当前工程目录，如加斜杠就是完整绝对路径)
    webDir: "/root/apps/", // 文件上传服务器绝对路径
    lastCmd: "pm2 restart app", // 所有动作执行完之后在服务器上执行的自定义命令
  },
};
