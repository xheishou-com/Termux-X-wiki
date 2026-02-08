# 在 Android 手机安装 OpenClaw 机器人

> 拿出你的旧手机，手把手教你在 Android 手机安装 OpenClaw 机器人。看着别人一口气买了 40 台 Mac Mini 部署 OpenClaw，口水直流？其实你的安卓旧手机也能变身 Linux 服务器！

## 简介

OpenClaw 是一个强大的机器人框架，目前已经可以接入飞书、钉钉、企业微信等国内通讯工具。实测一台红米 10X 手机（Android 12），功耗不到 5W，比云服务更香，还能拥有一台随身携带的 Linux 服务器。

## 步骤一：下载并安装 Termux-

首先，你需要在 Android 手机上安装 Termux。

- **下载地址**：[Termux-X 下载](/online/downloads)
- **支持版本**：Android 7.0+

安装成功后，点击 Termux-X 图标进入终端。


## 步骤二：安装 Ubuntu 容器

我们将使用 `proot-distro` 安装 Ubuntu 系统，并在其中部署 OpenClaw。

### 1. 准备环境

在 Termux（或 SSH 终端）中执行：

```bash
# 更新 Termux 软件源和包
pkg update && pkg upgrade -y

# 安装 proot-distro
pkg install proot-distro -y

# 安装并登录 Ubuntu
proot-distro install ubuntu
proot-distro login ubuntu
```
![](/img/advanced/1.jpg)

### 2. 安装依赖 (在 Ubuntu 容器内)

登录 Ubuntu 后（终端提示符会改变），执行以下命令：

```bash
# 更新 Ubuntu 软件源
apt update && apt upgrade -y

# 安装基础工具
apt install curl git build-essential -y

# 安装 Node.js (OpenClaw 需要 Node.js 22+)
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs

# 验证 Node.js 版本
node -v
```
![](/img/advanced/2.jpg)

### 3. 安装 OpenClaw

```bash
# 安装 OpenClaw CLI (如果迟迟安装不好，挂代理试试)
npm install -g openclaw@latest

# 验证安装
openclaw --version
```
![](/img/advanced/1.png)



## 步骤三：配置 OpenClaw

初始化配置：

```bash
openclaw onboard
```
![](/img/advanced/3.jpg)

按照提示操作：
1.  选择模型。
2.  一路输入 `yes` 或按回车确认默认设置。

![](/img/advanced/2.png)

## 步骤四：运行 Gateway

启动 OpenClaw Gateway 服务：

```bash
openclaw gateway --verbose
```
![](/img/advanced/4.png)

启动成功后，在手机浏览器（或同一局域网的电脑浏览器）输入：
`http://127.0.0.1:18789/` （如果是电脑访问，请将 `127.0.0.1` 换成手机 IP）

查看页面是否正常打开，并在页面中进行对话测试。

![](/img/advanced/4.jpg)
![](/img/advanced/5.jpg)


## 步骤五：后台运行（守护进程）

Android 没有传统 Linux 的 systemd 服务。为了避免终端关闭后机器人停止运行，我们可以创建一个脚本来后台保活。

### 1. 创建启动脚本

```bash
cat > openclawRun.sh <<EOF 
#!/bin/bash

# 定义进程名
PROCESS_NAME="openclaw"
LOG_DIR="/root"
LOG_FILE="\$LOG_DIR/openclawRun.log"
GATEWAY_LOG="\$LOG_DIR/gateway.log"

while true; do
    # 检查进程是否存在
    if ! pgrep -x "\$PROCESS_NAME" > /dev/null; then
        echo "\$(date): \$PROCESS_NAME 进程不见了，正在重启..." >> "\$LOG_FILE"
        
        # 启动进程并重定向输出
        cd "\$LOG_DIR" || exit 1
        openclaw gateway --verbose >> "\$GATEWAY_LOG" 2>&1 &
        
        # 记录进程ID
        echo "\$(date): 重启的进程PID: \$!" >> "\$LOG_FILE"
    fi
    
    # 每30秒检查一次
    sleep 30
done 
EOF
```

### 2. 赋予执行权限并运行

```bash
chmod +x openclawRun.sh

# 启动后台运行模式
nohup sh openclawRun.sh >> gateway.log &
```

### 3. 查看日志

```bash
tail -f gateway.log
```
![](/img/advanced/5.png)

## 小结

通过以上步骤，你已经成功在旧 Android 手机上部署了 OpenClaw 机器人。
1.  **低功耗**：旧手机功耗极低，适合 24 小时运行。
2.  **多功能**：不仅可以运行 OpenClaw，还是一个随身携带的 Linux 服务器。
3.  **扩展性**：OpenClaw 支持接入多种国内通讯工具，方便快捷。

快去试试吧！

参考配置地址： 
