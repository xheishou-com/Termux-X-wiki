# Sqlmap 注入工具

Sqlmap 是一款开源的渗透测试工具，它可以自动检测和利用 SQL 注入漏洞并接管数据库服务器。

## 功能入口

在 Termux-X 左侧菜单栏的 **Kali Tools** (或渗透测试) 分类下点击 **Sqlmap** 图标。

![sqlmap](/img/kali-tools/20.png)



## 功能说明

点击按钮后会弹出 **Sqlmap 配置对话框** (`SqlmapDialog`)，该工具将在 **Kali NetHunter Root 环境** 中运行。

### 核心功能

1.  **自动环境准备**：
    *   工具会自动尝试切换到名为 `Kali-Root` 的终端会话。
    *   如果当前未安装 `sqlmap`，会在执行前自动尝试使用 `apt-get install sqlmap -y` 进行安装。
2.  **向导模式 (Wizard)**：
    *   勾选 `Wizard` 复选框可启动向导模式。此模式下，Sqlmap 会通过简单的问题引导初学者完成注入测试，适合新手。
3.  **常规配置**：
    *   **目标 URL**：输入包含参数的目标网址（例如 `http://testphp.vulnweb.com/artists.php?artist=1`）。
    *   **Data (POST)**：输入 POST 数据内容，用于测试 POST 注入。
    *   **Cookie**：输入 Cookie 字符串，用于需要登录的测试。
4.  **枚举选项**：
    *   **自动回答 (--batch)**：所有提问自动选默认项，实现无人值守扫描。
    *   **随机 User-Agent (--random-agent)**：随机选择浏览器标识，避免被 WAF 拦截。
    *   **获取数据库 (--dbs)**：列出所有数据库名称。
    *   **获取表 (--tables)**：列出指定数据库中的表名。
    *   **获取列 (--columns)**：列出指定表中的列名。
    *   **导出数据 (--dump)**：导出表中的数据。
5.  **检测强度**：
    *   **Level (1-5)**：测试等级。默认 1，最高 5（会测试 Cookie 和 Referer）。
    *   **Risk (1-3)**：风险等级。默认 1，最高 3（可能会对数据库造成修改）。

![sqlmap](/img/kali-tools/21.jpg)



## 使用示例

### 示例 1：获取所有数据库名

1.  **目标 URL**：输入 `http://testphp.vulnweb.com/artists.php?artist=1`
2.  勾选 **自动回答 (--batch)**。
3.  勾选 **获取数据库 (--dbs)**。
4.  点击 **开始**。
5.  生成的命令：
    ```bash
    sqlmap -u "http://testphp.vulnweb.com/artists.php?artist=1" --batch --dbs
  
    ```
![sqlmap](/img/kali-tools/22.png)
### 示例 2：使用向导模式

如果你不确定该用什么参数，可以直接使用向导模式。

1.  **目标 URL**：输入目标网址。
2.  勾选 **向导模式 (Wizard)**。
3.  点击 **开始**。
4.  生成的命令：
    ```bash
    sqlmap -u "http://..." --wizard
    ```
    Termux 终端中会出现交互式问答，按照提示输入即可。

## 注意事项

> [!IMPORTANT]
> 此功能依赖 **Kali NetHunter** 容器环境。
> 启动时会自动执行 `nethunter -r` 尝试进入 Root 权限的 Kali 环境。

> [!WARNING]
> **严禁非法使用**：仅对您拥有授权的目标进行测试。未经授权的 SQL 注入测试在大多数国家/地区属于违法行为。
