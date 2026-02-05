# 🔥 Termux-X Kali NetHunter 概览

Termux-X 将 Kali NetHunter 的强大渗透能力带到了您的移动设备上。通过创新的容器技术与深度定制的 UI 集成，您可以随时随地进行安全测试，而无需繁琐的命令操作。

## 🌟 核心特性

*   **开箱即用**：无需手动刷机，一键下载并部署 Kali NetHunter 环境。
*   **图形化管理**：侧边栏直观展示安装、启动、停止等状态，告别黑屏命令行。
*   **桌面体验**：支持 VNC 连接，直接在手机上运行完整的 Kali 桌面环境 (XFCE4/KeX)。
*   **工具丰富**：预装常用渗透工具，并支持通过 `apt` 安装 Kali 软件仓库中的数千款工具。

## 📚 模块内容

### 1. 基础操作
*   **[安装/重装](/guide/nethunter-install)**：环境部署的第一步。
*   **[启动终端](/guide/nethunter-start)**：进入命令行的 Kali 世界。
*   **[Root终端](/guide/nethunter-desktop)**：获取最高权限（需设备 Root），解锁底层硬件访问。

### 2. 桌面环境
*   **[启动桌面](/guide/start-desktop)**：开启图形化操作界面。
*   **[停止桌面](/guide/start-nethunter)**：释放系统资源。
*   **[设置密码](/guide/nethunter-terminal)**：保障 VNC 连接安全。

### 3. 服务管理
*   **[启动 SSH](/guide/set-root-password)**：允许远程连接到您的 Kali 环境。
*   **[停止 SSH](/guide/install-kali-tools)**：关闭服务以节省电量。

### 4. 工具生态
*   **[安装 Kali 工具集](/guide/update-kali-tools)**：一键补全 Nmap, Metasploit 等核心工具。

---

## ⚠️ 重要提示

*   **设备性能**：运行 Kali 图形桌面建议设备具备至少 4GB RAM。
*   **存储空间**：完整安装可能需要 2GB-10GB 不等的存储空间，请确保存储充足。
*   **Root 权限**：虽然基础功能免 Root 可用，但 WiFi 注入、蓝牙攻击等涉及硬件的功能必须在 Root 环境下运行。
