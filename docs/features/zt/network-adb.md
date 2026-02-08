# 🌐 网络ADB (Network ADB)

**网络ADB** (ADB over Network) 允许您通过 Wi-Fi 网络连接到设备的 ADB 调试接口，而无需 USB 数据线连接。这对于远程调试、无线文件传输或在没有 USB 线的场景下非常有用。

## ⚠️ 前置要求

*   **Root 权限**：此功能需要您的 Android 设备已获取 Root 权限。Termux-x 需要 Root 权限来修改系统属性以开启/关闭网络调试端口。

## 🚀 功能说明

Termux-x 提供了便捷的一键开启和关闭功能。

### 1. 开启网络ADB (Enable Network ADB)
*   **操作**：点击侧边栏的 **网络ADB** 按钮。
*   **效果**：
    1.  应用会请求 Root 权限。
    2.  设置系统属性 `service.adb.tcp.port` 为 `5555`。
    3.  重启 `adbd` 服务。
*   **连接方法**：
    在电脑或其他设备上，使用以下命令连接：
    ```bash
    adb connect <设备IP地址>:5555
    ```

### 2. 关闭网络ADB (Disable Network ADB)
*   **操作**：点击侧边栏的 **关闭网络ADB** 按钮。
*   **效果**：
    1.  应用会请求 Root 权限。
    2.  设置系统属性 `service.adb.tcp.port` 为 `-1`。
    3.  重启 `adbd` 服务（恢复为 USB 模式）。

## 🔒 安全提示
*   开启网络ADB后，任何连接到同一 Wi-Fi 网络的人都可能尝试连接您的设备。
*   建议仅在受信任的网络环境中使用，并在使用完毕后**立即关闭**该功能。
