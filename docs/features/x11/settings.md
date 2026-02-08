# X11 环境 (X11 Environment)

Termux-X 内置了对 X11 图形化环境的便捷支持，允许用户在 Android 设备上运行完整的 Linux 桌面环境（如 XFCE4）。该功能位于侧边栏菜单（左侧抽屉）中。

## 功能入口

在终端界面**向右滑动**或点击左上角菜单按钮，打开左侧抽屉菜单，找到 **X11 环境** 相关选项。

## 核心功能

### 1. X11 Environment (安装环境)
这是配置图形化环境的第一步。点击此按钮将自动执行以下操作：
- 安装 `x11-repo` 软件源。
- 更新软件包列表。
- 安装 `termux-x11-nightly`（X11 服务端支持）。
- 安装 XFCE4 桌面环境组件 (`xfce4-terminal`, `xfce4-appfinder`, `xfce4-panel`, `xfce4-session`, `xfce4-settings`)。

**执行命令：**
```bash
pkg install x11-repo -y && pkg update -y && pkg install termux-x11-nightly -y && pkg install xfce4-terminal xfce4-appfinder xfce4-panel xfce4-session xfce4-settings -y
```

出现如图表示安装好了：
![](/img/x11/2.jpg)

### 2. 启动桌面 (Start Desktop)
安装完成后，点击此按钮启动图形化桌面。
- **前置检查**：会自动检测手机是否安装了配套的 `Termux:X11` APP (`com.termux.x11`)。
- **未安装提示**：如果未检测到 APP，会弹出对话框提示下载安装（跳转至下载链接）。
- **启动逻辑**：
  1. 唤起 `Termux:X11` APP。
  2. 在后台启动 X11 服务 (`termux-x11 :0`)。
  3. 设置显示环境变量 (`export DISPLAY=:0`)。
  4. 启动 XFCE4 桌面 (`startxfce4`)。

**执行命令：**
```bash
am start -n com.termux.x11/com.termux.x11.MainActivity && termux-x11 :0 & sleep 6; export DISPLAY=:0 && startxfce4 &
```

### 3. 停止桌面 (Stop Desktop)
用于强制停止 X11 相关进程。当桌面卡死或需要关闭服务时使用。

**执行命令：**
```bash
pkill -f com.termux.x11
```

### 4. 辅助工具
- **启动 SSH (Start SSH)**: 快速启动 SSH 服务（默认端口 8022），方便电脑端远程连接管理。
- **设置密码 (Set Password)**: 执行 `passwd` 命令，用于设置/修改当前用户的登录密码（SSH 连接时需要）。

## X11 设置 (Features Settings)
点击 **X11 Features Settings** 可进入高级设置页面，对 X11 的显示分辨率、触控模式等进行更细致的配置。
