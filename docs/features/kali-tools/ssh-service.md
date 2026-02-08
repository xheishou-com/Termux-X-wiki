# Kali SSH 服务

Termux-X 支持在 Kali NetHunter 环境中管理 SSH 服务，允许您通过 SSH 远程连接到 Kali 系统。

## 启动 SSH

### 功能入口
在 Termux-X 的 Kali NetHunter 菜单中点击 **启动SSH**。

### 功能说明
系统将执行以下自动化步骤：
1.  检查并安装 OpenSSH Server (如果未安装)。
2.  生成 SSH 主机密钥 (`ssh-keygen -A`)。
3.  配置允许 Root 登录。
4.  将 SSH 端口设置为 **2222** (避免与 Termux 自身的 SSH 冲突)。
5.  启动 SSH 服务。

启动成功后，您可以使用 SSH 客户端连接到设备的 2222 端口。

## 停止 SSH

### 功能入口
在 Termux-X 的 Kali NetHunter 菜单中点击 **停止SSH**。

### 功能说明
系统将执行停止命令，关闭 Kali 环境中的 SSH 服务进程。建议在不使用时关闭服务以节省资源和提高安全性。
