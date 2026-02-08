# 双击窗口工具箱 (Double-Tap Toolbox)

在 Termux-X 终端界面**双击屏幕**，即可呼出强大的工具箱菜单。该功能旨在提供便捷的快捷操作、系统管理和网络服务入口。

![](/img/zt/1.jpg)

## 顶部快捷菜单 (Top Menu)
弹窗顶部的导航栏提供了最常用的功能入口：

- **会话 (Session)**: 管理当前的终端会话，新建或切换会话。
- **工具箱 (Toolbox)**: 打开如下文所述的网格状工具面板（显示更多高级功能）。
- **剪贴板 (Clipboard)**: 查看和管理剪贴板历史记录，支持快速粘贴。
- **键盘 (Keyboard)**: 切换显示/隐藏软键盘或内置功能键栏。
- **帮助 (Help)**: 查看相关帮助文档。

## 工具箱面板 (Toolbox Panel)
点击顶部菜单的 **工具箱** 按钮后，将显示以下功能网格（如图所示）：

![](/img/zt/2.jpg)

### 系统与环境
- **安装模块 (Install Module)**: 快速安装 Linux 发行版（如 Kali, Ubuntu）或渗透测试工具集。
- **默认启动文件 (Default Startup File)**: 一键恢复默认的 Shell 启动脚本（救砖神器，当 `.bashrc` 配置错误导致无法启动时使用）。
- **编辑启动文件 (Edit Startup File)**: 使用内置编辑器修改当前 Shell 的启动配置文件，方便添加环境变量或 Alias。
- **X86 Alpine**: 启动基于 QEMU 的 X86 架构 Alpine Linux 模拟环境。
- **创建数据包信息 (Create Package Info)**: 导出当前环境已安装所有软件包的列表，用于备份或迁移。
- **卸载 (Uninstall)**: **警告**！一键清除 Termux-X 所有数据和文件，重置为初始状态。

### 网络服务
- **启动/停止浏览器终端 (Browser Terminal)**: 启动 Web 终端服务（ttyd/gotty），允许在同一局域网下的电脑或手机浏览器中操作 Termux。
- **安装/启动/停止网络Linux目录 (Network Linux Directory)**: 部署 FileBrowser 服务，提供基于 Web 的可视化文件管理器，支持远程上传/下载/编辑文件。
- **FTP服务 (FTP Server)**: 开启 FTP 服务端口（默认 8021 或 2121），允许 FTP 客户端连接进行文件传输。

### 输入与快捷方式
- **内置键盘 (Built-in Keyboard)**: 切换显示 Termux-X 自带的扩展功能键栏（Extra Keys）。
- **常用快捷方式 (Common Shortcuts)**: 系统预置的常用路径跳转（如 `/sdcard`）和维护命令。
- **自定义快捷方式 (Custom Shortcuts)**: 用户自行添加的快捷指令集合。

## 命令定义 (Command Definition)
在双击弹窗的主界面（未打开工具箱网格时），中间区域显示的是**命令定义**列表。
- **功能**：允许用户预先录制或编写常用的 Shell 命令。
- **使用**：点击列表中的命令项即可快速执行，无需手动输入繁琐的指令。
- **状态**：如果尚未添加任何命令，将显示“没有找到命令”的提示。
