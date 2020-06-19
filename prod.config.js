module.exports = {
  projectName: "xxx", // 项目名称
  dev: {
    //采用docker部署的情况
    name: "106环境",
    script: "npm run build", // 前端打包命令
    host: "xxx.xxx.xxx.xxx", // 服务器地址
    port: 22, // ssh port，一般ssh为22
    username: "xxxx", // 登录服务器用户名,也可以手动输入
    password: "xxxxxx", // 登录服务器密码,也可以手动输入
    distPath: "dist", // 将会将该文件夹打包上传(不可加斜杠)
    webDir: "/root/temp/messageRouteApp", // 打包文件上传服务器地址(末尾不可加斜杠)
    // 配置重启命令
    // restartCmd: "", // 程序上传之后触发重启命令（不配置则不执行,node版本要高于10）,如：pm2 restart webserver --update-env
    // 下面是关于docke更新的配置
    dockerName: "messageroute", // docker名称(如果只是上传到服务器，则dockerName和dockerWebDir无需配置)
    dockerWebDir: "/usr/app/", // 容器中文件存放位置
  },
  207: {
    // 不采用docker部署的情况
    name: "207环境",
    script: "npm run build", // 前端打包命令
    host: "xxx.xxx.xxx.xxx", // 服务器地址
    port: 22, // ssh port，一般ssh为22
    username: "xxxx", // 登录服务器用户名
    password: "xxxxxx", // 登录服务器密码
    distPath: "dist", // 将会将该文件夹打包上传,也不加斜杠
    webDir: "/root/temp/messageRouteApp", // 打包文件上传服务器地址(末尾不要加斜杠)
  },
  // 再还有多余的环境按照这个格式写即可
};
