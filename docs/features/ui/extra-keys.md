# ⌨️ 底部键盘 (Extra Keys)

**底部键盘**（也称为快捷键栏或 Extra Keys）是位于终端屏幕底部的辅助按键行。它弥补了手机输入法通常缺少 PC 键盘按键（如 `ESC`, `CTRL`, `ALT`, `TAB`, `方向键` 等）的问题，对于在终端中使用 Vim、Emacs 或运行复杂命令至关重要。

## 🚀 功能说明

*   **常用按键**：默认提供 `ESC`, `TAB`, `CTRL`, `ALT`, `PgUp`, `PgDn` 以及方向键。
*   **可自定义**：您可以完全自定义这行按键的布局和功能。
*   **两行显示**：支持扩展为两行，显示更多功能键（如 F1-F12）。

## 📝 使用方法

### 显示/隐藏
1.  **快捷键**：通常可以通过组合键 `音量+` + `Q` 来切换显示/隐藏。
2.  **长按菜单**：长按左侧抽屉菜单底部的“键盘”图标（如果存在）。

### 使用组合键
*   **CTRL/ALT**：点击 `CTRL` 或 `ALT` 后，它会保持按下状态（高亮显示），然后再点击其他字母键即可组合。例如：点击 `CTRL` -> 点击 `C` = 发送 `CTRL+C` 信号。

## ⚙️ 自定义配置
您可以通过 **图形界面** 或 **配置文件** 两种方式来自定义底部键盘的布局。

### 方式一：图形界面（推荐）
点击左侧抽屉菜单中的 **底部键盘** 按钮，可以直接在弹出的对话框中编辑按键配置。

<div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 20px;">
  <img src="/img/ui/1.png" alt="底部键盘菜单入口" style="height: 400px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" />
  <img src="/img/ui/2.jpg" alt="底部键盘配置对话框" style="height: 400px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" />
</div>

**操作说明**：
1. 打开侧边栏，点击“底部键盘”。
2. 在弹出的对话框中修改 JSON 格式的按键配置。
3. 点击“好的”保存并立即生效。

#### 常用配置示例（可直接复制）

> 💡 **提示**：请直接将以下 JSON 代码复制并粘贴到 **图形界面** 的输入框中，覆盖原有内容即可。

**示例 1：经典双行布局（推荐）**
包含常用的 ESC, TAB, 方向键以及 HOME/END 导航键。
```json
[
  [
    "ESC",
    "/",
    "-",
    "HOME",
    "UP",
    "END",
    "PGUP"
  ],
  [
    "TAB",
    "CTRL",
    "ALT",
    "LEFT",
    "DOWN",
    "RIGHT",
    "PGDN"
  ]
]
```

**示例 2：高级功能键（带上滑操作）**
不仅有基础按键，还通过 `popup` 属性定义了上滑按键的功能（例如：上滑 `UP` 键触发 `PGUP`）。
```json
[
  [
    { "key": "ESC", "popup": "HOME" },
    "TAB",
    "CTRL",
    "ALT",
    { "key": "-", "popup": "|" },
    { "key": "DOWN", "popup": "PGDN" },
    { "key": "UP", "popup": "PGUP" }
  ]
]
```

**示例 3：极简单行布局**
节省屏幕空间，仅保留最核心按键。
```json
[
  [
    "ESC",
    "TAB",
    "CTRL",
    "ALT",
    "-",
    "DOWN",
    "UP"
  ]
]
```

### 方式二：配置文件（高级）
您也可以通过直接修改配置文件 `~/.termux/termux.properties` 来自定义。

#### 示例配置

```properties
# 启用两行键盘
extra-keys-style = arrows-all

# 自定义按键布局
extra-keys = [ \
 ['ESC','/','-','HOME','UP','END','PGUP'], \
 ['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN'] \
]
```

### 修改步骤
1.  在终端中编辑配置文件：
    ```bash
    nano ~/.termux/termux.properties
    ```
2.  输入或修改上述配置内容。
3.  保存并退出（在 nano 中按 `CTRL+O`, `Enter`, `CTRL+X`）。
4.  运行命令重新加载设置：
    ```bash
    termux-reload-settings
    ```
