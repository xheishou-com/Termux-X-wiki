import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig({
  // --- Basic Info ---
  title: 'Termux-X 终端 - 移动端终极渗透测试平台',
  description: '免Root运行Kali NetHunter，内置AI智能助手，移动端渗透测试神器。Termux-X 官方文档与下载。',

  // --- Head Metadata (SEO & Favicon) ---
  head: [
    ['link', { rel: 'icon', href: `${base}logo.png` }],
    ['meta', { name: 'keywords', content: 'Termux-X, ZeroTermux, Kali NetHunter, termux, 移动渗透, 安卓终端,黑客，黑客社区，X黑手网，X黑手，黑客网， AI助手, 免Root' }],
    ['meta', { name: 'author', content: 'Termux-X Team' }],
    ['meta', { property: 'og:title', content: 'Termux-X - 移动端终极渗透测试平台' }],
    ['meta', { property: 'og:description', content: '基于ZeroTermux深度定制，一键部署Kali NetHunter，集成AI代码审计与自动化工具。' }],
    ['meta', { property: 'og:image', content: `${base}logo.png` }],
  ],

  // Deploy base path: '/' for custom domain root
  base,

  // --- Core Config ---
  cleanUrls: true,
  ignoreDeadLinks: true,

  // --- Theme Config ---
  themeConfig: {
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/xheishou-com/Termux-X-wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    logo: '/logo.png',
    siteTitle: 'Termux-X 终端',

    nav: [
      { text: '首页', link: '/' },
      { text: '深度介绍', link: '/guide/introduction' },
      { text: '更新日志', link: '/guide/changelog' },
      { text: '下载', link: '/online/downloads' },
      { text: '投稿', link: '/community/contribution' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xheishou-com/Termux-X-wiki' }
    ],

    sidebar: [
      {
        text: 'Termux-X 介绍指南',
        items: [
          { text: '深度介绍', link: '/guide/introduction' },
          { text: '更新日志', link: '/guide/changelog' },
          { text: '下载与资源', link: '/online/downloads' }
        ]
      },
      {
        text: 'Termux-X 入门指南',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '安装教程', link: '/guide/installation' },
          { text: '首次启动与其的故障排除', link: '/guide/first-install-error' }
        ]
      },
      {
        text: 'Termux-X AI助手',
        items: [
          { text: 'AI配置', link: '/guide/ai-configuration' },
          { text: '命令辅助', link: '/guide/command-assistant' },
          { text: 'AI终端', link: '/guide/ai-terminal' },
          { text: 'AI对话', link: '/guide/ai-code-audit' },
          { text: 'AI IDE', link: '/guide/ai-code-generation' }
        ]
      },
      {
        text: 'Termux-X Kali NetHunter',
        items: [
          { text: '安装/重装', link: '/guide/getting-started' },
          { text: '启动终端', link: '/guide/installation' },
          { text: '启动桌面', link: '/guide/start-desktop' },
          { text: '停止桌面', link: '/guide/start-nethunter' },
          { text: '设置密码', link: '/guide/nethunter-terminal' },
          { text: 'Root终端', link: '/guide/nethunter-desktop' },
          { text: '启动SSH', link: '/guide/set-root-password' },
          { text: '停止SSH', link: '/guide/install-kali-tools' },
          { text: '安装Kali工具集', link: '/guide/update-kali-tools' }
        ]
      },
      {
        text: 'Termux-X kali工具集',
        items: [
          { text: '常用kali工具', link: '/guide/getting-started' },
          { text: 'Namp', link: '/guide/installation' },
          { text: 'Dirb', link: '/guide/first-install-error' },
          { text: 'Kali换源', link: '/guide/aircrack-ng' },
          { text: 'Metasploit', link: '/guide/set-root-password' },
          { text: 'Sqlmap', link: '/guide/install-kali-tools' },
          { text: 'Seeker', link: '/guide/update-kali-tools' },
          { text: 'Camphish', link: '/guide/burp-suite' }
        ]
      },
            {
        text: 'Termux功能',
        items: [
          { text: 'X11环境', link: '/features/x11/settings' },
          { text: '启动桌面', link: '/guide/installation' },
          { text: '停止桌面', link: '/guide/first-install-error' },
          { text: '切换换源', link: '/features/common/source-switching' },
          { text: '设置密码', link: '/guide/getting-started' },
          { text: '启动SSH', link: '/guide/set-root-password' },
          { text: '停止SSH', link: '/guide/install-kali-tools' },
          { text: '安装多种Linux', link: '/features/common/linux-distros' }
        ]
      },
      {
        text: 'Termux-X 工具箱',
        collapsed: false,
        items: [
          { text: 'ADB远程', link: '/features/common/source-switching' },
          { text: '容器切换', link: '/features/common/container-switching' },
          { text: '备份/恢复', link: '/features/common/backup-restore' },
          { text: 'QEMU', link: '/features/common/qemu' },
          { text: 'SSH连接', link: '/features/common/moe-all-in-one' },
          { text: 'webshell', link: '/features/common/webshell' },
          { text: 'cobalt Strike', link: '/features/common/cobalt-strike' },
          { text: '定时任务', link: '/features/common/scheduled-tasks' },
          { text: '远程协助', link: '/features/common/zt-settings' }
        ]
      },
      {
        text: 'Termux-X 线上功能',
        collapsed: true,
        items: [
          { text: '在线脚本', link: '/online/scripts' },
          { text: '社区论坛', link: '/online/forum' },
          { text: '下载站', link: '/online/downloads' },
          { text: '公共仓库', link: '/online/public-repo' },
          { text: '反馈建议', link: '/features/x11/install' }
        ]
      },
      {
        text: 'Termux-X 美化/UI 功能',
        collapsed: false,
        items: [
          { text: '修改欢迎语', link: '/online/scripts' },
          { text: '美化设置', link: '/features/ui/beautify-settings' },
          { text: '字体设置', link: '/features/ui/font-settings' },
          { text: '全屏模式', link: '/features/ui/fullscreen-mode' },
          { text: '雪花', link: '/features/ui/animations' },
          { text: '底部键盘', link: '/features/ui/video-background' },
          { text: '粒子动画', link: '/features/ui/video-background' },
          { text: '清空美化', link: '/features/ui/video-background' }
        ]
      },
      {
        text: 'Termux-X ZT功能',
        collapsed: true,
        items: [
          { text: 'VNC', link: '/features/zt/vnc' },
          { text: 'ZT设置', link: '/features/ui/beautify-settings' },
          { text: '打开目录', link: '/features/zt/open-directory' },
          { text: '开机启动', link: '/features/zt/startup' },
          { text: '语言切换', link: '/features/zt/language-switching' }
        ]
      },
      {
        text: 'Termux-X   ROOT功能',
        collapsed: true,
        items: [
          { text: '网络ADB', link: '/features/zt/zero-functions' },
          { text: '关闭网络ADB', link: '/features/zt/vnc' },
          { text: 'Docker检查', link: '/features/zt/custom-commands' }
        ]
      } ,
      {
        text: 'Termux-X   双击窗口工具箱',
        collapsed: true,
        items: [
          { text: '命令定义', link: '/features/zt/language-switching' },
          { text: '帮助', link: '/features/zt/create-shortcut' },
          { text: '安装模块', link: '/features/zt/zero-functions' },
          { text: '默认启动文件', link: '/features/zt/vnc' },
          { text: '编辑启动文件', link: '/features/zt/custom-commands' },
          { text: '内置键盘', link: '/features/zt/sms-call' },
          { text: '浏览器终端', link: '/features/zt/open-directory' },
          { text: '网络Linux目录', link: '/features/zt/startup' },
          { text: '启动FlieBrowser', link: '/features/zt/experimental' },
          { text: '停止FlieBrowser,', link: '/features/zt/stop-filebrowser' },
          { text: 'X86 Alpine', link: '/features/zt/open-filebrowser' },
          { text: 'Ftp服务器', link: '/features/zt/ftp-server' },
          { text: '常用快捷方式', link: '/features/zt/start-ftp-server' },
          { text: '自定义快捷方式', link: '/features/zt/stop-ftp-server' },
          { text: '创建数据包信息', link: '/features/zt/create-package-info' },
          { text: '卸载', link: '/features/zt/create-shortcut' }

        ]
      }
    ],

    footer: {
      message: 'Termux-X -xheishou.com- Based on ZeroTermux. Released under GPL v2.0.'
    }
  }
})
