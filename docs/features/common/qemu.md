# QEMU 虚拟机

Termux-X 提供了便捷的 QEMU 虚拟机管理功能，支持多种运行模式和系统模拟。集成 `utqemu` 脚本，方便用户快速配置和启动虚拟机。

## 功能入口

在 Termux-X 工具箱中点击 **QEMU** 图标即可访问。

![](/img/common/11.jpg)



## 核心功能

### 1. 海的QEMU (utqemu)
提供了一键运行 QEMU 脚本的功能，支持多种架构和版本管理。
- **线上脚本**：自动下载并运行最新的 `utqemu.sh` 脚本。
- **本地脚本**：运行本地存储的 `utqemu.sh` 脚本。

![](/img/common/12.jpg) 

### 2. Zero 高级管理
启动高级 QEMU 管理窗口（RunWindowActivity），提供图形化的参数配置：
- CPU/内存/硬盘配置
- 显卡/声卡/网卡选择
- VNC/SPICE 远程连接设置

### 3. Windows 模拟预设
快速启动 Windows 模拟脚本（需存储权限）：
- **Win7模拟**：自动生成 `qemu_win7.sh`，适用于 Windows 7 及以上系统。
- **WinXp**：自动生成 `qemu_winxp.sh`，适用于 Windows XP 等老旧系统。

## 使用注意事项 (Best Practices)

根据 `utqemu` 脚本的经验总结，为了获得最佳性能，请注意以下几点：

### CPU 核心数配置
*   **TCG 加速限制**：通过 TCG (Tiny Code Generator) 加速时，**CPU 核心数不是越多越好**。
*   **建议设置**：**2-8 核**。过多的核心数反而会增加手机 CPU 负担，导致性能下降甚至卡顿。

### 显卡与游戏兼容性
*   **经典游戏**：在 Windows XP 下运行经典游戏（如星际争霸、帝国时代）时，建议使用 **Cirrus** 显卡以获得更好的兼容性。
*   **显示模式性能排序**：分屏模拟时的显示性能通常为：`ASPICE > VNC > XSDL`。

### QEMU 版本选择
*   **QEMU < 5.0**：对 Windows XP 模拟效果较好。
*   **QEMU > 5.0**：对 Windows 7 及以上系统模拟效果较好。
*   **QEMU 6.0+**：似乎恢复了对旧版 Windows 系统的良好支持。

### 硬件配置与兼容性
*   **主板与硬盘**：`Q35` 主板与 `SATA`/`Virtio` 硬盘接口可能在部分系统上导致启动失败，遇到问题时尝试切换回标准 PC 架构和 IDE 接口。
*   **大页文件 (Hugepages)**：虽然可以分担设备 RAM 占用，但会显著增加 CPU 负担，且创建大容量文件较慢，请审慎使用。

### 编译与安装
*   脚本支持编译安装 **Box86 + Box64 + Wine** 环境（Proot 模式），支持 i386 与 x86_64 双架构运行，适合尝试运行 x86 Linux 应用或游戏。

## 快速上手：Windows 模拟器启动示例

以下以启动 Windows XP 为例，介绍如何在 Termux-X 中使用 QEMU 模拟器。

### 1. 启动与环境配置
1.  在 Termux-X 工具箱中点击 **QEMU**。

![](/img/common/13.png)

2.  选择 **海的QEMU** (或 Zero/uTermux 模拟器选项)。

![](/img/common/15.png)

3.  **初次运行环境安装**：
    *   如果是第一次运行，请点击 **在线安装** 以配置 QEMU 运行环境。
    *   等待安装完成，进入环境检测界面。如果显示环境未安装，请点击安装。

![](/img/common/16.png)

### 2. 系统镜像准备
1.  **下载系统**：根据需求下载 Windows 系统镜像（例如 Windows XP）。

![](/img/common/17.png)

2.  **解压与放置**：
    *   将下载好的系统镜像包解压。
    *   将解压后的文件放置到手机内部存储的指定目录：`/sdcard/xinhao/windows/`。
    
    ![](/img/common/18.png)
    
    > **注意**：目录路径必须严格一致 (`/xinhao/windows/`)，否则模拟器可能无法识别。

### 3. 启动模拟器
1.  回到 Termux-X 的 QEMU 界面。
2.  点击 **启动**。
3.  打开 **VNC 任务** 查看模拟器画面。

![](/img/common/19.png)

### 4. 等待启动
*   第一次启动通常需要较长时间（约 2 分钟左右），请耐心等待直至进入 Windows 桌面。

![](/img/common/20.png)