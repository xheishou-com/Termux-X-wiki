# 常用快捷方式 (Common Shortcuts)

**功能简介**：
此功能用于一键在 Termux 主目录中创建指向手机常用存储目录的**软链接（Symlinks）**。创建后，您可以直接在 Termux 中通过 `cd` 命令快速访问微信、QQ 下载的文件或 SD 卡根目录，而无需输入冗长的绝对路径。

**创建的链接**：
执行此功能后，将在 `~/xinhaoLink/` 目录下创建以下链接：
- **download** -> `/sdcard/Download` (系统下载目录)
- **sdcard** -> `/sdcard` (内部存储根目录)
- **QQDownload** -> `/sdcard/Android/data/com.tencent.mobileqq/Tencent/QQfile_recv` (QQ接收文件)
- **WXDownload** -> `/sdcard/tencent/MicroMsg/WeiXin` (微信接收文件 - 旧版路径)
- **WXAndroidDownload** -> `/sdcard/Android/data/com.tencent.mm/MicroMsg/Download` (微信接收文件 - 新版路径)

**使用方法**：
1. 双击终端屏幕打开工具箱。
2. 点击 **常用快捷方式**。
3. 在弹出的提示框中点击 **确定**。
4. **授权**：如果首次使用，系统会请求存储权限，请务必允许（否则无法创建链接）。
5. 创建成功后，您可以在终端输入 `cd ~/xinhaoLink` 查看并进入这些目录。

**注意事项**：
- 此功能依赖于 Android 的存储权限，请确保已授予 Termux-X "文件和媒体" 的读写权限。
- 由于 Android 11+ 的隐私限制，某些 `Android/data` 下的目录可能无法直接访问，具体取决于系统的限制策略。
