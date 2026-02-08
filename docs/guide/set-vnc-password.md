# 设置 VNC 密码

在使用 Kali 桌面环境 (KeX) 之前，您需要设置一个 VNC 连接密码。

## 功能入口

在 Termux-X 的 Kali NetHunter 菜单中点击 **设置密码**。

## 功能说明

点击后，终端将执行 `nethunter kex passwd` 命令。请按照提示操作：

1.  **输入密码**：输入您想要设置的 VNC 密码（输入时不会显示字符）。
2.  **确认密码**：再次输入以确认。
3.  **只读密码**：系统会询问是否设置只读密码 (Would you like to enter a view-only password?)，一般输入 `n` (否) 即可。

设置完成后，您即可使用该密码连接 Kali 桌面。
