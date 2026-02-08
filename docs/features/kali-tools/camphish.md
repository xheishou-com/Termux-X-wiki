# Camphish 摄像头工具

CamPhish 是一款强大的摄像头钓鱼工具，可以通过生成的钓鱼链接获取目标设备的前置/后置摄像头快照甚至视频片段。

## 功能入口

在 Termux-X 左侧菜单栏的 **Kali Tools** (或渗透测试) 分类下点击 **Camphish** 图标。

![seeker](/img/kali-tools/23.png)

## 功能说明

点击按钮后会弹出 **CamPhish 配置对话框** (`CamphishDialog`)。此功能需要配合 **Kali NetHunter Root 环境** 使用。

![seeker](/img/kali-tools/33.png)

### 核心功能

1.  **多会话管理**：
    *   `Kali-CamPhish`：运行 CamPhish 主程序。
    *   `Kali-Tunnel`：运行 SSH 隧道进行内网穿透。
2.  **自动部署**：
    *   自动从 Gitee 镜像源 (`gitee.com/skilfulwriter/CamPhish.git`) 下载并安装到 `/usr/share/camphish`。
    *   自动修改 `main.py` 和 `index.html` 以适配自动化运行，无需手动输入参数。
3.  **自定义捕获参数**：
    *   **前/后置照片数量**：设置每次捕获的照片张数。
    *   **前/后置视频时长**：设置捕获视频的秒数。
4.  **结果查看器**：
    *   提供图形化的文件查看器，一键将捕获的照片/视频从 Kali 环境导出到手机存储 (`/sdcard/Termux-x/CamPhish`) 并直接打开查看。

## 使用教程

### 第一步：配置与启动

1.  **配置 Ngrok Token** (可选)：如果你有自己的 Ngrok Token，可以填入；否则留空（工具会使用默认或跳过）。
2.  **设置捕获参数**：
    *   例如：前置照片 2 张，视频 3 秒。
3.  **启动服务**：点击 **Start CamPhish** 按钮。
    *   Termux-X 会自动启动 Kali 环境，运行脚本，并等待生成链接。
    *   注意：首次运行可能需要下载依赖，请耐心等待。

<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/img/kali-tools/34.png" alt="seeker" style="width: 48%;" />
  <img src="/img/kali-tools/35.png" alt="seeker" style="width: 48%;" />
</div>

### 第二步：开启内网穿透

1.  点击 **开启隧道 (Open Tunnel)** 按钮。
2.  在弹出的 `Kali-Tunnel` 终端中，如果是首次连接，输入 `yes` 确认 SSH 指纹。
3.  等待终端生成公网链接 (例如 `https://xxxx.lhr.life`)。

<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/img/kali-tools/37.png" alt="seeker" style="width: 48%;" />
  <img src="/img/kali-tools/36.png" alt="seeker" style="width: 48%;" />
</div>


### 第三步：发送链接与捕获

1.  将链接发送给目标。
2.  当目标点击链接并允许摄像头权限时，网页会模拟一个正常的加载或诱导页面。
3.  后台会自动拍摄照片/视频。

<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/img/kali-tools/38.png" alt="seeker" style="width: 40%;" />
  <img src="/img/kali-tools/39.png" alt="seeker" style="width: 40%;" />
  <img src="/img/kali-tools/40.png" alt="seeker" style="width: 40%;" />
</div>

### 第四步：查看结果

1.  返回 CamPhish 配置对话框。
2.  点击 **查看文件 (View Files)** 按钮。
3.  系统会自动将捕获的文件从 Kali 容器复制到 `/sdcard/Termux-x/CamPhish` 目录，并弹出一个文件列表。
4.  点击列表中的图片或视频即可直接调用系统播放器查看。

<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/img/kali-tools/41.png" alt="seeker" style="width: 40%;" />
  <img src="/img/kali-tools/42.png" alt="seeker" style="width: 40%;" />
  <img src="/img/kali-tools/43.png" alt="seeker" style="width: 40%;" />
</div>

## 注意事项

> [!IMPORTANT]
> **依赖 Kali 容器**：此功能必须在 Kali NetHunter 环境下运行。
> **Root 权限**：工具会自动尝试获取 Root 权限 (`nethunter -r`)。

> [!WARNING]
> **严禁非法使用**：未经授权获取他人摄像头画面属于严重的侵犯隐私行为。本工具仅供安全研究、教育和授权测试使用。
