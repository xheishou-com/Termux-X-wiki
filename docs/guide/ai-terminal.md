# 🤖 AI 终端 (AI Terminal)

在 Termux-X 的侧边栏 "AI 助手" 区域中，右侧有一个独立的 **"AI终端"** 按钮。点击该按钮，您将获得一个强大的 AI 命令行工具箱。

不同于左侧的 "AI对话"（图形化聊天界面），这里的工具是**纯命令行 (CLI)** 版本的，直接运行在 Shell 中，能够与您的系统深度交互，通过管道（pipe）处理数据，或者作为脚本的一部分被调用。

点击 **"AI终端"** 按钮后，会弹出包含以下两个核心 AI 引擎的菜单：

![](/img/AI/22.png)
*(示意图：点击 AI 终端后弹出的 Gemini 和 iFlow 选项)*

## 1. Gemini CLI

**Gemini** 是 Google 推出的原生多模态 AI 模型。在 Termux-X 中，我们集成了 Gemini 的命令行版本 (`gemini-cli`)，让您可以在终端中直接与 Google 的先进 AI 进行对话。

### 🌟 核心特性
*   **原生 CLI 体验**：无需离开终端即可提问、生成代码或翻译文本。
*   **双环境支持**：
    *   **Termux 环境**：作为普通用户运行，适合日常辅助、代码查询。
    *   **Kali NetHunter 环境**：以 Root 权限运行，适合需要系统级操作建议的渗透测试场景。
*   **自动部署**：首次点击时，系统会自动检测并安装依赖（通过 `npm install -g @google/gemini-cli`）。

### 🚀 使用方法
1.  点击菜单中的 **Gemini** 图标。
2.  在弹出的对话框中选择运行环境（Termux 或 Kali）。
3.  进入终端界面，输入您的问题即可开始交互。

---

## 2. iFlow

**iFlow** 是一个专注于工作流自动化的 AI CLI 工具。它旨在通过自然语言指令，帮助用户快速构建和执行复杂的操作流程。

### 🌟 核心特性
*   **流程自动化**：擅长理解多步骤任务，并将其转化为可执行的脚本流。
*   **国内优化**：安装源包含 Gitee 镜像 (`https://gitee.com/iflow-ai/iflow-cli`)，对国内网络环境更加友好。
*   **双环境支持**：同样支持 Termux 和 Kali NetHunter 两种运行模式。

### 🚀 使用方法
1.  点击菜单中的 **iFlow** 图标。
2.  选择运行环境。
3.  系统会自动执行安装脚本（首次运行）或直接启动工具。
4.  在 `iflow>` 提示符下输入您的需求。

---

## ⚠️ 常见问题

*   **显示 "未安装"？**
    *   如果您在按钮下方看到红色的 "未安装" 字样，通常是指 **Kali NetHunter** 环境尚未安装。虽然 Gemini/iFlow 可以在 Termux 环境下运行，但为了获得完整体验（特别是 Root 权限操作），建议您在 "Kali Nethunter" 区域点击 "安装/重装"。
*   **安装失败？**
    *   请确保您的网络畅通（部分 npm 源可能需要科学上网）。
    *   如果是 Kali 环境，请先确保 Kali NetHunter 已正确安装并运行。
*   **如何更新？**
    *   **Gemini**: 在终端运行 `npm update -g @google/gemini-cli`
    *   **iFlow**: 在终端运行 `npm update -g @iflow-ai/iflow-cli`

---

## 📚 相关功能

*   [AI 配置](/guide/ai-configuration)：配置 API Key 和模型参数。
*   [命令辅助](/guide/command-assistant)：将自然语言转换为单条 Linux 命令。
*   [AI 对话](/guide/ai-code-audit)：图形化的 AI 聊天界面。
*   [AI IDE](/guide/ai-code-generation)：智能代码编辑器。
