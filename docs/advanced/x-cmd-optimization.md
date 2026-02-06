# 🚀 x-cmd：Termux 体验优化神器

[x-cmd](https://cn.x-cmd.com/) 是专为终端环境打造的增强指令集，其 `x termux` 模块致力于简化 Termux 的操作流程、提升配置效率，为新手用户提供更友好、易上手的终端体验。

## 📖 简介

**Termux** 是一个运行在 Android 系统上的终端应用，具备类 Linux 的环境支持。通过它，用户可以在移动设备上使用标准的 Shell、包管理器、编程语言（如 Python、Node.js）、版本控制工具（如 Git）以及远程连接工具（如 SSH）等。

**x termux** 是 x-cmd 专为 Termux 环境打造的增强指令集。它不改变 Termux 的底层结构，而是作为功能增强补充，适用于多数非 root 环境。

> 💡 **小贴士**：在 Termux 环境中，x-cmd 提供了一个更简洁的命令别名 **`m`**（来源于 "machine"），默认映射为 `x termux`。

## 🔥 常用增强功能

### 1. 📦 包管理增强：可视化与自动化

Termux 自带的 `pkg` 命令虽然强大，但 `x-cmd` 提供了更高层次的封装：

*   **自动安装依赖**：当你运行某个未安装命令（如 `x python`）时，x-cmd 会自动调用 `pkg install` 进行安装，无需手动查找包名。
*   **交互式包选择 (`m pkg`)**：结合 `fzf` 实现可视化的包搜索与选择。
    ```bash
    m pkg
    ```
    你可以在终端中打开交互式界面，浏览、搜索、选择、安装 Termux 包，无需手动敲命令或记忆复杂包名。

    ![x-cmd pkg interface](/img/advanced/1.webp)

    

*   **运行语言环境**：
    ```bash
    x python  # 自动安装并运行 Python
    x node    # 自动安装并运行 Node.js
    ```

### 2. 🌐 快速切换镜像源 (`m cr`)

由于网络环境差异，官方源在部分地区可能访问缓慢。使用 `m cr` 可以快速切换国内镜像（如 TUNA、USTC、阿里云）。

```bash
m cr
```
✅ **功能亮点**：
*   提供交互界面进行镜像选择。
*   自动备份、更新并刷新源配置，无需手动编辑文件。
   ![x-cmd cr interface](/img/advanced/2.webp)

### 3. 📱 系统信息查看 (`m pp`)

Android 的 `getprop` 命令输出信息量巨大且难以阅读。x-cmd 提供的 `pp` 命令对其进行了美化封装，并结合 `fzf` 提供交互式筛选。

**基本用法**：
```bash
m pp       # 交互式查看系统属性
```
![x-cmd pp interface](/img/advanced/3.webp)



**进阶用法**：
*   **正则筛选**（例如查找 sms 相关属性）：
    ```bash
    m pp ^sms
    ```
*   **JSON 格式输出 + 正则过滤**：
    ```bash
    m pp -j ^gsm
    ```
*   **查询指定属性值**（例如查看 SIM 卡运营商）：
    ```bash
    m pp get gsm.sim.operator.alpha
    ```

## ✅ 总结

借助 `x termux`，Termux 用户可以在原生功能基础上获得更友好、更高效的终端使用体验。

**适合人群**：
*   需要快速配置开发/远程环境的用户
*   在移动设备上执行日常脚本、连接服务器的运维人员
*   希望提升交互体验、避免手动配置的新手用户

📘 **更多资源**：
*   [x-cmd 官网](https://x-cmd.com/)
*   [Termux Cookbook (x-cmd)](https://cn.x-cmd.com/mod/termux/cookbook-1)
