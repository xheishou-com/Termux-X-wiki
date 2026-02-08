# Kali 换源

为了提高 Kali NetHunter 中软件包的下载速度，Termux-X 提供了 Kali 软件源的一键切换功能。

## 功能入口

在 Termux-X 菜单中点击 **Kali换源**。

## 支持的源

Termux-X 支持一键切换到以下国内优质镜像源：
- **Kali 官方源**
- **Kali 清华源**
- **Kali 中科大源**
- **Kali 阿里云源**

## 使用步骤

1. 点击 **Kali换源** 选项。
2. 在弹出的菜单中选择您偏好的镜像源。
3. 系统将自动替换 `/etc/apt/sources.list` 文件并运行 `apt update` 更新缓存。
