# 启动桌面 (Start Desktop)

在 Termux-X 中，"启动桌面" 功能用于一键启动 X11 图形化环境。

## 功能说明
点击该按钮后，系统将自动执行一系列命令来初始化 X11 服务并启动 XFCE4 桌面环境。

## 执行流程
1. **唤起 Termux:X11 应用**：启动配套的 X11 显示服务 APP (`com.termux.x11`)。
2. **启动 X11 服务**：在后台运行 `termux-x11` 服务。
3. **设置环境变量**：配置 `DISPLAY` 环境变量指向本地 X11 服务。
4. **启动桌面环境**：运行 `startxfce4` 启动桌面。

## 手动执行命令
如果您希望在终端中手动启动，可以复制并运行以下命令：

```bash
am start -n com.termux.x11/com.termux.x11.MainActivity && termux-x11 :0 & sleep 6; export DISPLAY=:0 && startxfce4 &
```

如图表示启动正常：
![](/img/x11/3.jpg)

如图启动完成：
![](/img/x11/1.jpg)

## 注意事项
- 首次使用前请确保已点击 [X11环境](/features/x11/settings) 按钮安装必要的组件。
- 必须安装配套的 **Termux:X11** 安卓应用才能显示画面。
- 启动后大约需要等待 6 秒钟（`sleep 6`）让服务就绪。
