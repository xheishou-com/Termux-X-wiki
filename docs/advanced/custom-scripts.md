# 自定义脚本开发

Termux-X 支持强大的自定义脚本功能，允许用户根据需求扩展终端能力。

## 脚本存放位置
所有自定义脚本建议存放在 `~/.termux/boot` 或 `~/scripts` 目录下。

## 示例：自动备份脚本
```bash
#!/bin/bash
tar -czvf backup.tar.gz /data/data/com.termux/files/home
```
