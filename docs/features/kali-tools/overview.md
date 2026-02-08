# Termux-X Kali 工具集

Termux-X 集成了 Kali NetHunter 的强大渗透测试工具库，让您可以在移动设备上进行专业的安全测试。

## 工具概览

我们为您精选并适配了以下核心工具，所有工具均已集成图形化启动界面：

### 基础工具
*   **常用 Kali 工具**：一键安装和管理常用的渗透测试工具包。
*   **Kali 换源**：快速切换 Kali 软件源，加速下载。

### 信息收集
*   **Nmap**：网络发现和安全审计的神器。
*   **Dirb**：Web 目录扫描工具，查找隐藏的 Web 对象。

### 漏洞利用
*   **Metasploit**：全球最常用的渗透测试框架，集成 Payload 生成器。
*   **Sqlmap**：自动化 SQL 注入和数据库接管工具。

### 社会工程学
*   **Seeker**：高精度地理位置获取工具。
*   **CamPhish**：摄像头钓鱼工具。

## 使用前提

*   **Kali 环境**：所有 Kali 工具都依赖于 Kali NetHunter 容器环境。请确保您已在侧边栏中完成 [Kali NetHunter 的安装](/guide/nethunter-install)。
*   **Root 权限**：部分工具（如 Nmap 的某些扫描模式、Seeker 的内网穿透）需要 Root 权限才能发挥全部功能。Termux-X 会尝试自动获取权限。

请点击左侧菜单选择具体的工具查看详细使用教程。
