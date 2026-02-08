# BEERUS Framework 使用手册

BEERUS Framework 是一个移动端渗透测试工具箱，专为 Android 安全研究人员和极客设计。它集成了多种强大的安全工具，提供了一个统一的图形化界面来管理和使用这些工具。

## 核心功能概览

1.  **Frida 设置 (Frida Setup)**: 管理 Frida Server 版本，编写和运行 Frida 脚本。
2.  **Magisk 管理 (Magisk Manager)**: 管理 Magisk 模块（安装、启用、禁用、移除）。
3.  **网络 ADB (ADB Over Network)**: 开启网络调试功能，无需 USB 线即可连接 ADB。
4.  **沙盒提取 (Sandbox Exfiltration)**: 提取应用私有数据 (`/data/data/包名`)。
5.  **内存转储 (Memory Dump)**: 转储应用进程的内存数据。
6.  **应用清单 (Manifest)**: 查看已安装应用的 AndroidManifest.xml 详情。
7.  **代理配置 (Proxy Profiles)**: 管理系统全局代理设置，方便抓包。
8.  **属性编辑器 (Properties)**: 修改系统属性 (`build.prop`)。
9.  **启动选项 (Boot Options)**: 管理开机自启功能（如系统证书挂载、自动开启 Frida 等）。

## 准备工作

1.  **Root 权限**：这是必须的。大多数功能（Magisk 模块管理、Frida 注入、ADB 网络调试等）都依赖 Root 权限。
2.  **Magisk**：建议您的设备已安装 Magisk。
3.  **Beerus 模块（可选但推荐）**：
    *   应用首次启动可能会提示您安装配套的 Magisk 模块。
    *   该模块用于支持一些高级功能，如“启动选项”中的开机自启服务（Frida、网络 ADB 等）。
    *   如果提示安装，请点击“安装”并重启手机。

---

## 🚀 功能详解与使用教程

### 1. 🏠 首页 (Home)
- **功能**：展示欢迎信息。
- **操作**：
    - 向右滑动屏幕（或点击左上角菜单图标）打开侧边栏菜单。
    - 通过菜单切换到其他功能模块。

### 2. 🐉 Frida 设置 (Frida Setup)
这是最核心的功能，用于动态插桩和 Hook。

<br/>

<center class="half">
<img src="/img/nethunter/28.jpg" width="300"/>
</center>


#### 基本操作流程
1.  **启动 Frida**：点击顶部的“启动 Frida”按钮，等待状态变更为绿色（运行中）。
2.  **创建/导入脚本**：
    - 点击 `+` 号创建新脚本。
    - 或点击上传图标导入现有的 `.js` 文件。
3.  **编写 Hook 代码**：点击脚本名称进入编辑器。
4.  **选择目标应用**：在编辑器下方点击“点击选择应用包名”，从列表中选择你要 Hook 的 APP（该 APP 必须正在运行）。
5.  **运行注入**：点击“运行”按钮。
6.  **查看日志**：脚本运行后，编辑器下方会自动弹出日志窗口，显示 Hook 结果。

#### 详细功能说明
- **下载与管理版本**：
    - 点击 **“版本”** 按钮，选择要下载的 frida-server 版本（如 16.x.x）。
    - 如果列表中没有，可以选择 **“手动添加版本”** 自行输入。
- **启动服务**：
    - 点击 **“启动 Frida”**。应用会自动下载对应版本并运行在后台。
    - 状态栏会显示“运行中”。
- **编写/运行脚本**：
    - 点击 **“+”** 号图标创建新脚本（.js 文件），或点击 **上传** 图标导入现有脚本。
    - 在列表中点击脚本名称，进入 **代码编辑器**。
    - 在编辑器中编写 Hook 代码（JavaScript）。
    - 点击底部的 **“点击选择应用包名”**，选择您要 Hook 的目标应用。
    - 点击 **“运行”**，Beerus 会将脚本注入到目标应用中。
    - 点击 **“保存”** 可保存修改后的代码。

### 3. 📦 沙盒提取 (Sandbox Exfiltration)
用于提取应用私有目录 (`/data/data/<包名>`) 下的文件。

- **操作步骤**：
    1.  在搜索框输入应用名称或包名。
    2.  点击目标应用。
    3.  在弹出的底部面板中，选择提取方式：
        - **VPS**：输入您的服务器地址（如 `http://192.168.1.10:8000`），文件将发送到服务器。
        - **USB**：应用会生成一条 adb pull 命令（例如 `adb pull /data/local/tmp/xxx.tar`）。您可以在电脑终端运行该命令将文件拉取到本地。

### 4. 🧠 内存转储 (Memory Dump)
用于 Dump 应用运行时的内存数据，常用于脱壳或查找内存中的敏感数据（密钥、Token）。

- **操作步骤**：
    1.  进入页面，列表会自动刷新显示当前运行的进程。
    2.  搜索并点击目标进程。
    3.  等待 Dump 完成。
    4.  完成后会提示 Dump 文件的保存路径，或提供导出选项。

### 5. 📜 应用清单 (Manifest)
用于快速查看应用的 AndroidManifest.xml 详情，无需解包 APK。

- **操作步骤**：
    1.  搜索并点击目标应用。
    2.  在弹出的详情页中，您可以查看：
        - **常规**：版本号、SDK 版本等。
        - **权限**：应用申请的所有权限。
        - **Activities/Services/Providers**：查看组件名称及其 exported 属性（判断组件是否可被外部调用，用于漏洞挖掘）。

### 6. 🌐 网络 ADB (ADB Over Network)
无需 USB 线即可连接 ADB 调试。

- **操作步骤**：
    1.  点击 **“启动 ADB”**。
    2.  界面上方会显示连接命令，例如：`adb connect 192.168.31.100:5555`。
    3.  确保电脑和手机在同一 Wi-Fi 下，在电脑终端输入该命令即可连接。

### 7. 🛡️ 代理配置 (Proxy Profiles)
用于快速切换系统全局代理，方便抓包（如配合 Burp Suite、Charles）。

- **操作步骤**：
    1.  点击 **“添加配置”**。
    2.  输入名称（如 Burp）和代理地址（如 `192.168.31.50:8080`）。
    3.  点击列表中的代理项右侧的开关，即可 **开启/切换** 代理。
    4.  再次点击开关或切换到其他配置即可关闭/更改。

### 8. 🎭 Magisk 管理 (Magisk Manager)
一个轻量级的 Magisk 模块管理器。

- **操作步骤**：
    - **安装模块**：点击 **“安装模块”**，选择手机存储中的 .zip 模块包进行安装。
    - **管理模块**：列表中显示已安装模块。
        - **开关**：启用/禁用模块。
        - **移除/恢复**：点击右下角的文字进行删除或恢复操作。
    - **注意**：所有操作都需要 **重启手机** 才能生效。

### 9. ⚙️ 属性编辑器 (Properties)
修改系统属性 (`build.prop`)，类似于 `setprop` 命令。

- **操作步骤**：
    - **查看**：列表显示当前所有系统属性。
    - **添加**：点击 **“添加属性”**，输入 Key 和 Value。
    - **编辑/删除**：点击列表项右侧的“编辑”或“移除”按钮。
    - **重启**：修改系统属性通常需要重启生效，可点击页面上方的 **“重启”** 按钮。

### 10. 🚀 启动选项 (Boot Options)
设置开机自启功能（依赖 Beerus Magisk 模块）。

- **功能开关**：
    - **受信任的系统证书**：开启后，开机自动将用户安装的证书移动/挂载为系统证书（用于抓 HTTPS 包，解决 Android 7.0+ 信任问题）。
    - **网络 ADB**：开机自动开启网络 ADB。
    - **Frida**：开机自动启动 Frida Server。
- **注意**：修改开关后需要重启手机生效。

---

## 💡 实战案例 1：使用 Frida Hook 打印 Toast 消息

场景假设：您想知道某个 App 在运行时弹出了什么 Toast（提示消息），并把这个消息记录下来。

### 步骤 1：准备工作
1.  打开 BEERUS，授予 Root 权限。
2.  进入 **Frida 设置**。

### 步骤 2：启动 Frida 服务
1.  确保已下载 Frida 版本。
2.  点击 **“启动 Frida”**，等待状态变为 **“运行中”**。

### 步骤 3：编写 Hook 脚本
1.  点击 **“+”** 创建新脚本，命名为 `hook_toast.js`。
2.  在代码编辑器中输入以下代码：

```javascript
Java.perform(function () {
    // 获取 Toast 类和 String 类
    var Toast = Java.use("android.widget.Toast");
    
    // Hook makeText 方法 (拦截 Toast 的创建)
    Toast.makeText.overload('android.content.Context', 'java.lang.CharSequence', 'int').implementation = function (context, text, duration) {
        
        var toastText = (text !== null) ? text.toString() : "";
        console.log("[*] 捕获到 Toast: " + toastText);
        
        // 继续执行原始方法，显示原 Toast
        return this.makeText(context, text, duration);
    };
});
```
3.  点击右下角的 **“保存”** 按钮。界面会提示“脚本保存成功”。

### 步骤 4：选择目标应用并运行
1.  **选择应用**：
    - 点击编辑器下方的 **“点击选择应用包名”** 按钮。
    - 在弹出的列表中，选择一个您想测试的 App（例如“设置”或“计算器”）。
2.  **运行注入**：
    - 点击左下角的 **“运行”** 按钮。
    - BEERUS 会自动启动目标应用，并将您的 `hook_toast.js` 脚本注入进去。

### 步骤 5：观察结果
1.  **触发操作**：
    - 尝试在目标应用里做一些操作，触发一个 Toast 提示。
2.  **查看日志**：
    - 如果一切顺利，编辑器下方的日志窗口会显示实时日志，您会看到 `[*] 捕获到 Toast: ...`。
3.  **进阶验证**：
    - 如果您把脚本里的 `return this.makeText(...)` 这一行删掉或注释掉，再次保存并运行，您会发现 App 虽然逻辑在跑，但 Toast 弹窗不见了！这就证明您成功拦截并“吃掉”了这条消息。

### 总结这个案例做了什么？
1.  **Frida 设置** -> 帮您启动了后台服务。
2.  **代码编辑器** -> 让您写了“拦截圣旨”（Hook 脚本）。
3.  **运行** -> 派“间谍”潜入目标 App，执行了您的“圣旨”。

这个 App 的核心价值就是：让您**不需要**在电脑上打开黑底白字的命令行窗口（CMD/Terminal），**不需要**敲复杂的 `frida -U -f com.example.app -l script.js` 命令，直接在手机上点几下就能完成一次黑客般的代码注入操作。

---

## 💡 实战案例 2：修改计算器显示结果

本案例演示如何使用 Beerus 框架 Hook 小米计算器（或其他计算器），将计算结果中的数字 "7" 替换为 "嘿嘿"。

### 脚本代码

```javascript
Java.perform(function() {
    var TextView = Java.use("android.widget.TextView");
    var StringClass = Java.use("java.lang.String");

    // Hook setText(CharSequence, BufferType) 双参数版本
    // 这是 Android TextView 设置文本的底层方法
    TextView.setText.overload('java.lang.CharSequence', 'android.widget.TextView$BufferType').implementation = function(text, type) {
        var str = (text !== null) ? text.toString() : "";
        
        // 检查文本是否包含 "7" 且不包含我们已经修改过的标记 "嘿嘿"
        if (str.indexOf("7") !== -1 && str.indexOf("嘿嘿") === -1) {
            console.log("[*] 捕获到文本: " + str);
            var newText = str.replace(/7/g, "嘿嘿");
            console.log("[!] 篡改为: " + newText);
            
            // 调用原始实现，将修改后的文本传回去
            // 注意：这里使用 this.setText 调用的是原始方法，不会导致递归死循环
            this.setText(StringClass.$new(newText), type);
        } else {
            // 不需要修改，原样调用
            this.setText(text, type);
        }
    };
});
```

### 操作步骤
1.  打开手机上的 **计算器** 应用。
2.  打开 **Termux-X** -> **Beerus**。
3.  创建一个新脚本，命名为 `calc_hook.js`。
<br/>

<center class="half">
<img src="/img/nethunter/25.jpg" width="300"/>
</center>


4.  将上述代码复制粘贴到编辑器中。

<br/>

<center class="half">
<img src="/img/nethunter/26.jpg" width="300"/>
</center>

5.  点击底部的包名选择器，找到并选择 **计算器** (`com.miui.calculator` 或其他包名)。
6.  点击 **保存**，然后点击 **运行**。
7.  观察下方的日志窗口，显示 `[*] Attached` 和 `[*] Script loaded`。
8.  切换回 **计算器**，输入数字 `7`。
9.  你会发现屏幕上的 `7` 变成了 `嘿嘿`，同时 Beerus 的日志窗口输出了捕获和篡改的信息。

<br/>

<center class="half">
<img src="/img/nethunter/27.jpg" width="300"/>
</center>


---

## 💡 常见问题 (FAQ)

- **Q: 为什么某些功能点击没反应？**
  - A: 请检查是否授予了 Root 权限。如果没有弹窗，请去 Magisk Manager 中手动授权。

- **Q: 为什么提示 "ndk-build not found"？**
  - A: 这是编译时的错误，如果您已经安装好了 APK，这就不是问题。

- **Q: 安装模块后需要做什么？**
  - A: 务必重启手机。
  
- **Q: App 崩溃怎么办？**
  - A: 检查脚本逻辑是否有死循环（无限递归调用 Hook 的方法）。

- **Q: 无日志输出？**
  - A: 确保目标 App 正在前台运行，且 Hook 的方法确实被触发了。
