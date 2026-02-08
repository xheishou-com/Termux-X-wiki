# 卸载 (Uninstall)

**⚠️ 警告**：
此操作将批量卸载 Termux-X 的扩展插件和相关组件。请谨慎使用！

**功能简介**：
"卸载" 按钮实际上是一个**批量卸载工具**，它会尝试卸载一系列与 Termux 生态系统相关的应用程序包。这通常用于清理不再需要的插件，或者在出现严重兼容性问题时重置环境。

**卸载列表**：
点击此按钮将尝试卸载以下应用（如果已安装）：
1.  **Termux API** (`com.termux.api`)
2.  **Termux Boot** (`com.termux.boot`)
3.  **Termux Styling** (`com.termux.styling`)
4.  **Termux Tasker** (`com.termux.tasker`)
5.  **Termux:X11** (`com.termux.x11`)
6.  **Material Files** (`me.zhanghai.android.files`) - 文件管理器
7.  **Web Server** (`org.join.web.serv`)
8.  **Termux Float** (`com.termux.window`)
9.  **ZeroCoreManage** (`com.xinhao.zerocoremanage`) - ZeroTermux 核心扩展
10. **bVNC** (`com.iiordanov.bVNC`) - VNC 客户端

**使用方法**：
1. 打开工具箱，点击 **卸载**。
2. 系统会弹出一个列表或依次弹出卸载确认框。
3. 您需要对每个应用的卸载请求点击确认。

**注意**：
- 此功能**不会**卸载 Termux-X 主程序本身。
- 此功能**不会**删除 Termux 主程序内的数据（除非您卸载了 Termux-X 主程序）。
- 这是一个快速清理 Termux 全家桶插件的便捷方式。
