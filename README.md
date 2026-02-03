# ZeroTermux Wiki

[![Website](https://img.shields.io/badge/Website-Live-brightgreen.svg)](https://wiki.zerotermux.dev/)
[![Powered by VitePress](https://img.shields.io/badge/Powered%20by-VitePress-blueviolet)](https://vitepress.dev/)

欢迎来到 ZeroTermux Wiki 的官方源码仓库！本文档库旨在为 [ZeroTermux](https://github.com/hanxinhao000/ZeroTermux) 用户提供全面、准确的指南、教程和常见问题解答。

**在线访问 👉 [https://wiki.zerotermux.dev/](https://wiki.zerotermux.dev/)**

## 📖 关于此项目

本 Wiki 使用 [VitePress](https://vitepress.dev/) 构建，所有内容的源文件都存放在本 GitHub 仓库的 `docs` 目录下。

我们致力于打造一个开放、协作的知识库，帮助用户更好地使用 ZeroTermux。

## 🚀 如何贡献

我们非常欢迎并感谢任何形式的贡献，无论是修正一个错别字，还是撰写一篇全新的教程。

贡献内容非常简单，推荐使用行业标准的 **Fork & Pull Request** 流程。

### 主要贡献流程

1.  **Fork 本仓库**
    点击页面右上角的 `Fork` 按钮，将此仓库复制到你自己的 GitHub 账号下。

2.  **创建新分支 (Branch)**
    在你的 Fork 仓库中，从 `main` 分支创建一个新的分支来存放你的修改。分支名最好能描述你的工作内容，例如 `add-install-guide` 或 `fix-typo-in-homepage`。

3.  **进行修改**
    在 `docs` 目录下创建新的 `.md` 文件或修改现有文件。
    * **新页面**：如果你创建了一个全新的页面，请记得在 `docs/.vitepress/config.mjs` 文件的 `sidebar`（侧边栏）配置中添加对应的链接，这样用户才能在导航中找到它。
    * **内容编写**：请使用标准的 Markdown 语法。你也可以使用 VitePress 提供的[自定义容器](https://vitepress.dev/guide/markdown#custom-containers)来美化页面，如 `:::tip`、`:::warning`、`:::danger` 等。

4.  **提交拉取请求 (Pull Request)**
    完成修改后，回到你的 Fork 仓库页面，提交一个 Pull Request (PR) 到本仓库的 `main` 分支。请在 PR 中简要说明你做了哪些修改和原因。

5.  **代码审查与合并**
    我们会尽快审查你的 PR。一旦通过，你的贡献就会被合并到主分支，网站将在几分钟内自动完成部署和更新！

### 快速修正 (针对小的错别字)

如果你只是发现了一个简单的错别字，可以直接在 GitHub 上点击对应文件右上角的**铅笔图标**进行在线编辑，然后直接提交修改。

## 🛠️ 本地开发环境

如果你想在本地电脑上预览你的修改，可以按照以下步骤操作：

1.  **克隆你的 Fork 仓库到本地**
    ```bash
    git clone https://github.com/你的用户名/zerotermux-wiki.git
    ```

2.  **进入项目目录**
    ```bash
    cd zerotermux-wiki
    ```

3.  **安装依赖**
    确保你已经安装了 [Node.js](https://nodejs.org/) (v18+)。
    ```bash
    npm install
    ```

4.  **启动本地开发服务器**
    ```bash
    npm run docs:dev
    ```
    执行后，终端会显示一个本地网址 (通常是 `http://localhost:5173`)。在浏览器中打开它，你就可以实时预览你的修改了。

## 📄 许可证

本项目下的所有文档内容均采用 MIT License 授权。
