# SSH 服务 (SSH Service)

SSH (Secure Shell) 允许您通过电脑或其他设备远程连接和管理 Termux-X。

## 启动 SSH (Start SSH) {#start-ssh}

点击 "启动 SSH" 按钮将启动 OpenSSH 服务端。

### 执行流程
1. **安装 OpenSSH**：如果未安装，会自动执行 `pkg install openssh -y`。
2. **启动服务**：执行 `sshd` 命令。

### 手动执行命令
```bash
pkg install openssh -y && sshd
```

### 连接信息
- **端口**：默认端口为 `8022` (注意不是标准的 22)。
- **用户名**：可以使用 `whoami` 查看，或者直接使用 `u0_a...` (具体取决于您的设备)。通常在连接时可以省略用户名或使用 `root` (在 Termux 中通常不需要)。
- **连接命令** (在电脑终端)：
  ```bash
  ssh -p 8022 IP地址
  ```
  *(请将 IP地址 替换为您手机的实际 IP，可通过 `ifconfig` 查看)*

## 停止 SSH (Stop SSH) {#stop-ssh}

不需要远程连接时，建议停止 SSH 服务以节省电量和提高安全性。

### 执行流程
该功能会终止后台的 `sshd` 进程。

### 手动执行命令
```bash
pkill sshd
```
