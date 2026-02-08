# Termux-X ROOT功能

## 超级管理员身份

实际上 Termux 不需要 root 权限也可以折腾各种各样的操作的，大家不必对 root 抱有啥幻想，本文的操作基本上没有涉及到手机要用到 root 的地步。

### 手机没有 root

利用 proot 可以为手机没有 root 的用户来模拟一个 root 的环境，这里主要是经典的 Linux 文件系统布局上的模拟。

```bash
pkg install proot -y
```

然后终端下面输入:

```bash
termux-chroot
```

即可模拟 root 环境，该环境模仿 Termux 中的常规 Linux 文件系统，但是不是真正的 root。

![termux-chroot](/img/root/1.png)

输入 `exit` 可回到普通用户的文件系统。

### 手机已经 root

安装 tsu，这是一个 su 的 Termux 版本，是一个真正的 root 权限，用来在 Termux 上替代 su，操作不慎可能对手机有安全风险，因为官方封装了，所以安装也很简单：

```bash
pkg install tsu -y
```

然后终端下面输入:

```bash
tsu
```

即可切换 root 用户，这个时候会弹出 root 授权提示，给予其 root 权限，效果图如下:

![termux-chroot](/img/root/2.png)

在管理员身份下，输入 `exit` 可回到普通用户身份。

## Termux-X 特有 ROOT 功能列表

以下功能集成了 Termux-X 的特有能力，方便进行更高级的操作：

### 1. [网络ADB](/features/zt/network-adb)
开启网络 ADB 调试功能，允许您通过网络连接调试设备，无需 USB 连接。

### 2. [Docker检查](/features/zt/docker-check)
快速检查您的设备内核是否支持运行 Docker 容器。这是在移动设备上运行容器化应用的第一步。

### 3. [Frida 逆向 Beerus 框架 (Hook工具)](/features/zt/beerus)
集成了强大的 Frida 动态插桩工具和 Beerus 框架，方便进行应用逆向分析和 Hook 操作。

## 注意事项

- **ROOT 权限**: 使用上述功能通常需要您的 Android 设备已经获取了 ROOT 权限。
- **风险提示**: ROOT 操作具有一定风险，请确保您了解相关知识并谨慎操作。
