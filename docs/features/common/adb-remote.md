# ADB 远程调试工具

Termux-X 内置了强大的图形化 ADB (Android Debug Bridge) 工具箱，允许您直接在手机上管理和调试 Android 设备（包括本机和远程设备），甚至支持无需 Root 权限的本地无线调试。

## 功能入口

在 Termux-X 工具箱中点击 **ADB远程** 图标即可进入。

![](/img/common/42.png)

## 核心功能

### 1. 网络 ADB (无需 Root)
*   **本地激活**：通过 Android 11+ 的“无线调试”功能，实现本机无 Root 激活 ADB。
*   **连接命令**：内置 `adb connect` 引导，方便快速连接目标设备。

### 2. ADB 命令管理
提供了可视化的命令管理界面，您可以：
*   **添加命令**：自定义常用的 ADB 命令（如 `adb shell wm size` 修改分辨率）。
*   **一键运行**：点击即可执行保存的命令，无需重复输入。
*   **命令分类**：支持对命令进行分类管理，添加解释说明。

### 3. 应用与文件管理
*   **应用管理**：通过 ADB 卸载、安装、冻结应用。
*   **文件传输**：支持 `adb push` 和 `adb pull` 操作，方便在设备间传输文件。

### 4. 快捷操作
工具箱内置了常用的快捷指令：
*   **修改分辨率/DPI**：快速调整屏幕显示参数。
*   **查看设备信息**：一键获取设备型号、Android 版本、IP 地址等。
*   **无线调试开关**：快速开启或关闭远程调试端口。

## 使用提示
> **注意**：部分高级功能（如直接修改系统设置）可能需要 Root 权限或在“开发者选项”中开启特定权限。

##  连接本机演示：

### 通过无线调试进行配对

1.  **开启无线调试**：
    首先打开手机系统的 **“开发者选项”**，找到 **“无线调试”** 选项。
    *   先打开开关。
2.  **获取配对码**：
    在无线调试详情页中，点击 **“使用配对码配对设备”**。

3.  **分屏操作 (关键步骤)**：
    > **⚠️ 重要提示**：一定！一定！一定！要使用 **小窗** 或 **分屏** 模式打开 Termux-X-adb调试。
    > 因为一旦离开设置页面，配对码可能会刷新失效。

![](/img/common/43.png)


4.  **输入配对**：
    在 Termux-X 的 ADB 远程界面中，输入获取的 **配对码** 和 **端口号**，点击无线配对即可。

![](/img/common/44.jpg)

配对成功过后如图：会有个也配对的设备显示出来， 配对成功后，您会在列表中看到已配对的设备。此时可以关闭分屏模式。
![](/img/common/45.png)
5.  **连接设备**：
然后如图输入IP+端口连接设备，要注意的是连接端口和配对端口是不一样的，注意分辨，如图来连接图：
    <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
      <img src="/img/common/46.png" alt="已配对设备" style="width: 30%; min-width: 200px; border-radius: 8px;" />
      <img src="/img/common/47.png" alt="连接设备" style="width: 30%; min-width: 200px; border-radius: 8px;" />
      <img src="/img/common/48.png" alt="连接成功" style="width: 30%; min-width: 200px; border-radius: 8px;" />
    </div>

如上图所示，连接成功后会在列表中有显示连接成功的设备，此时点击连接成功的设备即可进入控制台。

功能展示：

<div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
  <img src="/img/common/49.jpg" style="width: 30%; min-width: 200px; border-radius: 8px;" />
  <img src="/img/common/50.jpg" style="width: 30%; min-width: 200px; border-radius: 8px;" />
  <img src="/img/common/51.jpg" style="width: 30%; min-width: 200px; border-radius: 8px;" />
  <img src="/img/common/52.jpg" style="width: 30%; min-width: 200px; border-radius: 8px;" />
  <img src="/img/common/53.jpg" style="width: 30%; min-width: 200px; border-radius: 8px;" />
  <img src="/img/common/54.jpg" style="width: 30%; min-width: 200px; border-radius: 8px;" />
</div>