# 启动 Kali 桌面 (KeX)

Termux-X 支持通过 KeX (Kali NetHunter Desktop Experience) 启动 Kali Linux 的图形化桌面环境。

::: warning 重要提示
**首次启动前，必须先设置 VNC 连接密码！**
如果您尚未设置，请先点击菜单中的 **[设置密码](/guide/set-vnc-password)** 进行配置，否则无法连接桌面。
:::

## 功能入口

在 Termux-X 的 Kali NetHunter 菜单中点击 **启动桌面**。


## 功能说明

点击后，系统将执行以下操作：
1. 启动 VNC 服务器 (`nethunter kex`)。
2. 自动配置显示环境变量 (`DISPLAY=:1`)。
3. 尝试调起已安装的 VNC 客户端（如 NetHunter KeX 客户端）进行连接。

![](/img/nethunter/12.jpg)

::: tip 状态提示
Termux-X 界面显示如图所示的日志信息并保持状态，表示 VNC 服务已成功启动并在后台运行。此时请勿关闭 Termux-X 终端窗口。
:::

## 依赖说明

- 需要安装 **Kali NetHunter** 容器。
- 建议安装 **NetHunter KeX** 客户端以获得最佳体验。

## NetHunter KeX 客户端配置

推荐使用 **NetHunter KeX** 客户端连接桌面，配置参数参考下图：

![](/img/nethunter/13.jpg)

1.  **VNC 连接设定**：`127.0.0.1` 端口 `1` (对应 5901)。
2.  **VNC 密码**：输入您之前设置的 VNC 密码。
3.  点击右上角的 **连接** 按钮即可进入桌面。

### 桌面效果预览

![](/img/nethunter/14.jpg)

连接成功后，您将看到类似上图的 Kali Linux 桌面环境。

## 常见问题

### 连接失败 (Connection failed)

![](/img/nethunter/2.png)

如果您遇到如上图所示的 **"Error! Connection failed"** 错误，通常是由于 Android 系统的 Phantom Process Killer（幻影进程杀手）机制杀死了后台的 VNC 进程。

**解决方法：**

1.  进入手机的 **"开发者选项"**。
2.  找到 **"停止限制子进程"** (或类似名称，如 "Disable child process restrictions") 选项。
3.  **开启** 该选项。

![](/img/nethunter/15.jpg)

开启后，重启 Termux-X 并重新尝试启动桌面即可。
