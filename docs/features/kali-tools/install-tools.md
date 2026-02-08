# 安装 Kali 工具集

Termux-X 提供了一键安装 Kali Linux 默认工具集的功能，帮助您补全渗透测试所需的工具。

::: warning 前置要求
**使用此功能前，必须先安装 Kali NetHunter 环境！**
如果您尚未安装，请先参考 [安装/重装 Kali NetHunter](/guide/nethunter-install) 进行安装。
:::

## 功能入口

在 Termux-X 的 Kali NetHunter 菜单中点击 **安装Kali工具集**。

## 功能说明

点击后，系统将在 Kali Root 环境中执行以下命令：

```bash
apt update && apt install kali-linux-default -y && apt upgrade -y
```

![](/img/nethunter/17.jpg)

如图所示，系统将开始自动下载并安装 Kali 工具集。
> **提示**：安装过程主要取决于您的网络速度，通常需要 **10 - 20 分钟** 不等，请保持耐心并确保设备电量充足。

### 包含内容
这将安装 `kali-linux-default` 元包，其中包含了 Kali Linux 发行版中默认提供的常用安全工具。

#### 安装过程中的配置

![](/img/nethunter/19.jpg)

在解压和安装过程中，可能会弹出如图所示的配置界面（例如 `sslh configuration` 或其他服务配置）。

**操作方法：**
- 使用键盘的 **方向键**（上下左右）来切换选项。
- 选中默认选项（通常是红色高亮显示的）或推荐选项。
- 按 **回车键 (Enter)** 确认并继续。

#### 解压阶段

![](/img/nethunter/20.jpg)

完成配置确认后，系统将自动进入工具集的解压阶段，如图所示将显示大量绿色的文件解压日志。

![](/img/nethunter/21.jpg)

此阶段无需用户操作，这个过程根据手机性能不同通常需要 **10 - 20 分钟**，请耐心等待直到安装完成。

#### 额外配置提示

![](/img/nethunter/22.jpg)

在安装末期，可能会遇到如上图所示的系统用户更改提示（如 `GID of user '_apt'`）。

**操作方法：** 保持默认选择 `<Yes>`，直接按 **回车键** 确认即可。

![](/img/nethunter/23.jpg)

同样，如果遇到关于配置文件更新的提示（如 `configuration file sshd_config`），也请保持默认选择（通常是 `keep the local version currently installed`），直接按 **回车键** 确认。

#### 安装完成

![](/img/nethunter/24.jpg)

当终端窗口停止滚动日志，并重新显示命令提示符（如 `root@localhost:~#`）时，即表示 Kali 工具集已成功安装完成。

此时，您可以关闭此窗口，开始使用 Kali Linux 的强大功能了。

### 常见问题

#### 依赖包下载中断

![](/img/nethunter/18.jpg)

如果在安装过程中出现类似上图的大量红色错误提示，通常是因为网络波动导致部分依赖包下载中断。

**解决方法：**

无需担心，只需**再次点击**菜单中的 **安装Kali工具集** 即可。
> `apt` 包管理器会自动检测已下载的文件，并从中断处继续下载未完成的软件包。重复此步骤直到所有包下载完成并开始解压安装。

#### 下载失败或 404 错误

![](/img/nethunter/16.jpg)

如果您在安装过程中遇到类似上图的错误（如 `404 Not Found` 或 `Failed to fetch`），通常是因为当前的 Kali 软件源连接不稳定或同步有问题。

**解决方法：**

1.  在 Termux-X 菜单中找到并点击 **[Kali换源](/features/kali-tools/source-switching)**。
2.  在弹出的列表中选择 **Kali 官方源**。
3.  等待源切换完成后，再次尝试点击 **安装Kali工具集**。
