# Seeker 定位工具

Seeker 是一款用于获取高精度地理位置信息的社会工程学工具。

## 功能入口

在 Termux-X 渗透测试菜单中点击 **Seeker** 图标。

## 功能说明

Termux-X 封装了 Seeker 的操作流程 (`SeekerDialog`)：
- **模板选择**：选择伪装页面模板（如 Google Drive, WhatsApp 等）。
- **端口设置**：配置监听端口。
- **链接生成**：自动配合 Ngrok 或 Serveo 生成外网访问链接。

当目标点击链接并允许定位权限时，您将获取其精确的 GPS 坐标。
