# Seeker 定位工具

Seeker 是一款用于获取高精度地理位置信息的社会工程学工具。它通过托管一个请求位置权限的虚假网站，当目标用户点击并允许定位时，可以获取其高精度的 GPS 坐标、设备信息等。

## 功能入口

在 Termux-X 左侧菜单栏的 **Kali Tools** (或渗透测试) 分类下点击 **Seeker** 图标。
![seeker](/img/kali-tools/19.png)



## 功能说明

点击按钮后会弹出 **Seeker 配置对话框** (`SeekerDialog`)。此功能需要配合 **Kali NetHunter Root 环境** 使用。

![seeker](/img/kali-tools/24.jpg)



### 核心功能

1.  **多会话管理**：
    *   工具会自动创建/管理两个独立的终端会话：
        *   `Kali-Seeker`：用于运行 Seeker 服务端。
        *   `Kali-Tunnel`：用于运行内网穿透（隧道）服务。
2.  **自动安装/更新**：
    *   首次运行会自动从 Gitee 镜像源 (`gitee.com/skilfulwriter/seeker.git`) 下载并安装 Seeker 到 `/usr/share/seeker`。
    *   支持自动配置依赖环境。
3.  **丰富的伪装模板**：
    *   **NearYou**：寻找附近的人（默认模板）。
    *   **淘宝分享**：伪装成淘宝商品分享页面。
    *   **WhatsApp / Telegram**：伪装成群组邀请链接。
    *   **腾讯会议**：伪装成会议加入页面。
    *   **Google ReCaptcha**：伪装成验证码验证页面。
    *   **自定义链接预览**：允许自定义显示的元数据。
4.  **内网穿透集成**：
    *   内置了一键启动 `localhost.run` 隧道的功能，无需额外配置即可将本地服务暴露到公网。

## 使用教程

### 第一步：启动 Seeker 服务

1.  **选择模板**：在下拉菜单中选择一个适合场景的模板（例如 `腾讯会议`）。
2.  **配置参数**：
    *   **端口**：设置本地监听端口（默认为 `8080`）。
    *   **其他参数**：根据选择的模板，可能需要填写标题、描述、重定向地址等信息。
3.  **启动**：点击 **启动** 按钮。
    *   Termux-X 会自动切换到 `Kali-Seeker` 会话并启动服务。

<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/img/kali-tools/25.jpg" alt="seeker" style="width: 48%;" />
  <img src="/img/kali-tools/26.jpg" alt="seeker" style="width: 48%;" />
</div>

### 第二步：启动内网穿透

1.  返回 Seeker 配置对话框（或直接在 `Kali-Tunnel` 会话中）。
2.  点击 **开启隧道 (Open Tunnel)** 按钮。
3.  Termux-X 会切换到 `Kali-Tunnel` 会话并执行 SSH 隧道命令：
    ```bash
    ssh -R 80:localhost:8080 nokey@localhost.run
    ```
    > **注意**：如果是第一次连接，终端会询问是否继续连接 (`Are you sure you want to continue connecting?`)，请手动输入 `yes` 并回车。

4.  等待终端输出生成的公网链接（通常是 `https://xxxxxx.lhr.life` 格式）。

<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/img/kali-tools/27.png" alt="seeker" style="width: 48%;" />
    <img src="/img/kali-tools/28.png" alt="seeker" style="width: 48%;" />
      <img src="/img/kali-tools/29.png" alt="seeker" style="width: 48%;" />
</div>



### 第三步：发送链接

将生成的公网链接发送给目标用户。一旦用户点击并允许定位权限：
1.  Seeker 服务端会捕获目标的 **经纬度**、**IP地址**、**设备型号**、**操作系统** 等信息。
2.  获取的信息将直接显示在 `Kali-Seeker` 终端中。

<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="/img/kali-tools/30.png" alt="seeker" style="width: 40%;" />
    <img src="/img/kali-tools/31.png" alt="seeker" style="width: 40%;" />
      <img src="/img/kali-tools/32.png" alt="seeker" style="width: 40%;" />
</div>

## 注意事项

> [!IMPORTANT]
> **依赖 Kali 容器**：此功能必须在 Kali NetHunter 环境下运行。
> **Root 权限**：工具会自动尝试获取 Root 权限 (`nethunter -r`)。

> [!WARNING]
> **严禁非法使用**：未经授权获取他人地理位置信息属于侵犯隐私的违法行为。本工具仅供安全研究和教育目的使用。
