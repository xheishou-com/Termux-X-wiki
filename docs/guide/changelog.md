# 📝 更新日志 (Changelog)

### v0.118.3.59 (2026.01.30)
*   **新增**：**AI IDE**  ，内置 **Builder 模式**，支持 AI 自动构建项目、生成文件、即时预览与代码补全
*   **新增**：**远程协助**功能，支持屏幕共享、远程控制、文字输入等，方便远程调试与协助
*   **新增**：**AI 对话 MCP 客户端**，支持 Model Context Protocol，扩展 AI 能力
*   **优化**：App 整体性能与体验优化，提升流畅度
*   **修复**：修复已知 Bug，提升稳定性

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
<img src="/img/update/7.jpg" height="300" />
<img src="/img/update/8.jpg" height="300" />
<img src="/img/update/9.jpg" height="300" />
<img src="/img/update/10.jpg" height="300" />
<img src="/img/update/11.jpg" height="300" />
<img src="/img/update/12.jpg" height="300" />
</div>

### v0.118.3.58 (2026.01.24)
*   **新增**：完善 ADB 远程功能，功能详情：
    *   **🔌 连接**：ADB 连接 (USB/WiFi)、Android 11+ 无线配对码连接
    *   **📱 设备**：硬件配置查看、电池状态监控、存储空间分析
    *   **📦 应用**：安装/卸载、**应用提取**、应用冻结/解冻、清除数据
    *   **📂 文件**：内部存储浏览、文件高速上传/下载
    *   **🚀 进程**：实时内存监控、结束进程
    *   **🎮 遥控**：模拟物理按键、虚拟遥控器、**文字输入**
    *   **🛠️ 工具**：截图/录屏、设备重启、**设备镜像投屏（目前还有问题）**、获取顶层窗口、性能监控、日志抓取
    *   **💻 Shell**：内置终端执行自定义命令 (Ping 等)
*   **优化**：优化菜单栏布局，调整功能分类
*   **优化**：诸多性能优化及细节调整
*   **修复**：修复已反馈的 Bug（如 SnowView 空指针异常等）
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
<img src="/img/update/1.jpg" height="300" />
<img src="/img/update/2.jpg" height="300" />
<img src="/img/update/3.jpg" height="300" />
<img src="/img/update/3.png" height="300" />
</div>

### v0.118.3.57 (2026.01.10)
*   **新增**：在线脚本下载运行逻辑优化，支持自动识别当前环境。若在 Kali Shell 中运行 Termux 脚本，会自动切换至 Termux 会话执行，避免环境错误
*   **新增**：在线脚本支持 Kali Root 环境自动部署。下载的脚本会自动复制到 Kali Root 目录并赋予权限执行，解决路径权限问题
*   **新增**：菜单栏新增“Kali换源”快捷入口，支持一键切换 Kali Linux 软件源（官方、清华、中科大、阿里云），自动进入 Root 环境执行
*   **新增**：在线脚本下载完成后自动识别python脚本文件， 并自动 执行
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
 <img src="/img/update/1.png" height="400" />
<img src="/img/update/2.png" height="400" />
</div>

### v0.118.3.56 (2026.01.06)
*   **新增**：集成 **Dirb** 目录扫描工具图形化界面，支持自定义字典、代理、Cookie 及高级扫描选项，自动调用 Kali NetHunter Root 环境执行
*   **优化**：**Nmap** 扫描配置升级，移除 Root 权限强依赖选项，新增免 Root 常用扫描模式（-Pn, -sV, -sC），提升非 Root 环境下的可用性
*   **修复**：优化 Kali 工具调用逻辑，自动检测并安装缺失工具，修复命令执行时的 Shell 兼容性问题
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
 <img src="/img/update/4.jpg" height="400" />
<img src="/img/update/5.jpg" height="400" />
</div>

### v0.118.3.56 (2026.01.06)
*   **优化**：QEMU/UTermux 界面中“显示环境”安装逻辑优化，未安装 VNC 插件时自动跳转至下载站
*   **修复**：更新脚本和下载站链接，下载站更新VNC 插件和kali Nethunetr基础包+gemini cli +iflow cli系统包，恢复即用
 
### v0.118.3.56 (2026.01.04)
*   **优化**：Kali NetHunter 安装流程，新增镜像源自动故障切换与重试机制，
*   **交互**：主界面“新增”按钮升级为“AI终端”，集成 Gemini 与 iFlow 垂直菜单
*   **美化**：更新 AI终端、Gemini、iFlow 专属图标
<img src="/img/update/4.png" height="400" />
### v0.118.3.56 (2025.12.31)
*   **新增**：Kali 工具集一级分类菜单，支持信息收集、漏洞扫描、Web应用等13大类常用工具的一键调用
*   **新增**：Kali 工具集一键安装/更新按钮，支持自动安装 kali-linux-default 并升级系统
<img src="/img/update/6.jpg" height="400" />

### v0.118.3.55 (2025.12.31)
*   **修复**：Kali NetHunter 菜单操作（启动/停止桌面等）改为新建会话执行，避免在当前 Shell 中冲突
*   **修复**：修复 Kali KeX 启动脚本报错及自动退出问题
*   **新增**：增加ADB功能
*   **优化**：优化布局
*   **修复**：修复未知bug

### v0.118.3.54 (2025.12.29)
*   **新增**：扩展按键栏增加第三排常用按键（INS, DEL, \, |, ~, =, +）
*   **优化**：将新增的常用按键行置顶显示，操作更便捷


### v0.118.3.53 (2025.12.29)
*   **修复**：增加滑出菜单区域，支持第二屏按键扩展
*   **新增**：增加更多键位支持，提供更丰富的操作选项
*   **优化**：调整 TerminalToolbarViewPager 以支持多页按键显示

### v0.118.3.52 (2025.12.27)
 
*   **优化**：Kali NetHunter 安装流程，内置汉化安装脚本，无需网络下载，提高安装成功率
*   **新增**：AI 助手支持多轮对话，具备上下文记忆能力，支持连续追问
*   **重构**：全新聊天式界面布局，集成滚动历史记录与底部输入框
*   **美化**：引入 Markwon 库渲染 Markdown 内容，代码块、列表、粗体等格式完美显示
*   **交互**：增强代码块交互，支持点击代码块弹出“执行/复制”菜单，实现一键运行
*   **修复**：AI 助手命令执行逻辑，支持自动创建文件并运行等多步操作 

### v0.118.3.51 (2025.12.26)
*   **修复**：CamPhish 文件导出功能，现在可以正确导出并查看捕获的文件
*   **优化**：文件导出使用独立会话，不再干扰前台进程
*   **新增**：支持查看 .webm 格式的视频文件
*   **修复**：文件列表点击无响应的问题
*   **修复**：停止按钮状态检测及 Ctrl+C 信号发送逻辑

### v0.118.3.50 (2025.12.20)
*   首次发布 基于ZeroTermux 定制版Termux-X
*   集成 Kali Nethunter 工具集
*   添加 Seeker 地理位置追踪工具
*   添加 AI命令生成，命令解释工具集
*   集成 CamPhish 摄像头钓鱼工具
