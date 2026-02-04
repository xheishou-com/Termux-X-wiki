import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/Termux-X-wiki/'

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
    ['meta', { property: 'og:image', content: `${base}logo.webp` }],
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
      pattern: 'https://gitlab.com/termux-x/termux-x-wiki/-/edit/master/docs/:path',
      text: '在 GitLab 上编辑此页'
    },
    logo: `${base}logo.png`,
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
        text: 'Termux--X 入门指南',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '安装教程', link: '/guide/installation' },
          { text: '首次启动与其的故障排除', link: '/guide/first-install-error' }
        ]
      },
            {
        text: 'Termux--X AI助手',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '安装教程', link: '/guide/installation' },
          { text: '首次启动与其的故障排除', link: '/guide/first-install-error' }
        ]
      },
            {
        text: 'Termux--X Kali NetHunter',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '安装教程', link: '/guide/installation' },
          { text: '首次启动与其的故障排除', link: '/guide/first-install-error' }
        ]
      },
            {
        text: 'Termux--X kali工具集',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '安装教程', link: '/guide/installation' },
          { text: '首次启动与其的故障排除', link: '/guide/first-install-error' }
        ]
      },
            {
        text: 'Termux功能',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '安装教程', link: '/guide/installation' },
          { text: '首次启动与其的故障排除', link: '/guide/first-install-error' }
        ]
      },
      {
        text: 'Termux-X 工具箱',
        collapsed: false,
        items: [
          { text: '切换源', link: '/features/common/source-switching' },
          { text: '容器切换', link: '/features/common/container-switching' },
          { text: '备份/恢复', link: '/features/common/backup-restore' },
          { text: 'MOE全能', link: '/features/common/moe-all-in-one' },
          { text: '发行版本', link: '/features/common/linux-distros' },
          { text: 'QEMU', link: '/features/common/qemu' },
          { text: '定时任务', link: '/features/common/scheduled-tasks' },
          { text: 'ZT设置', link: '/features/common/zt-settings' }
        ]
      },
      {
        text: 'Termux-X 线上功能',
        collapsed: true,
        items: [
          { text: 'X11设置', link: '/features/x11/settings' },
          { text: '显示/隐藏终端', link: '/features/x11/toggle-terminal' },
          { text: 'X11环境', link: '/features/x11/environment' },
          { text: '修复环境错误', link: '/features/x11/fix-errors' },
          { text: '安装X11', link: '/features/x11/install' },
          { text: '显示/隐藏键盘', link: '/features/x11/toggle-keyboard' }
        ]
      },
      {
        text: 'Termux-X 美化/UI 功能',
        collapsed: false,
        items: [
          { text: '在线脚本', link: '/online/scripts' },
          { text: 'Zero论坛', link: '/online/forum' },
          { text: '下载站', link: '/online/downloads' },
          { text: '公共仓库', link: '/online/public-repo' }
        ]
      },
      {
        text: 'Termux-X ZT功能',
        collapsed: true,
        items: [
          { text: '悬浮窗口', link: '/features/ui/floating-window' },
          { text: '美化设置', link: '/features/ui/beautify-settings' },
          { text: '字体设置', link: '/features/ui/font-settings' },
          { text: '全屏模式', link: '/features/ui/fullscreen-mode' },
          { text: '雪花/粒子动画', link: '/features/ui/animations' },
          { text: '视频背景', link: '/features/ui/video-background' }
        ]
      },
      {
        text: 'Termux-X   ROOT功能',
        collapsed: true,
        items: [
          { text: 'Zero功能', link: '/features/zt/zero-functions' },
          { text: 'VNC', link: '/features/zt/vnc' },
          { text: '命令定义', link: '/features/zt/custom-commands' },
          { text: '短信/通话', link: '/features/zt/sms-call' },
          { text: '打开目录', link: '/features/zt/open-directory' },
          { text: '开机启动', link: '/features/zt/startup' },
          { text: '实验功能', link: '/features/zt/experimental' },
          { text: '语言切换', link: '/features/zt/language-switching' }
        ]
      } ,
      {
        text: 'Termux-X   双击窗口工具箱',
        collapsed: true,
        items: [
          { text: 'Zero功能', link: '/features/zt/zero-functions' },
          { text: 'VNC', link: '/features/zt/vnc' },
          { text: '命令定义', link: '/features/zt/custom-commands' },
          { text: '短信/通话', link: '/features/zt/sms-call' },
          { text: '打开目录', link: '/features/zt/open-directory' },
          { text: '开机启动', link: '/features/zt/startup' },
          { text: '实验功能', link: '/features/zt/experimental' },
          { text: '语言切换', link: '/features/zt/language-switching' }
        ]
      }
    ],

    footer: {
      message: 'Termux-X - Based on ZeroTermux. Released under GPL v2.0.'
    }
  }
})
