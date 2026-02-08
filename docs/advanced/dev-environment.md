# Termux-X 开发环境

Termux 支持的开发环境很强，可以完美的运行 C、Python、Java、PHP、Ruby 等开发环境，建议读者朋友们选择自己需要的开发环境折腾。

## 编辑器

写代码前总得折腾一下编辑器，毕竟磨刀不误砍柴工嘛。Termux-X 支持多种编辑器，完全可以满足日常使用需求。

### Emacs

据说 Emacs 是神的编辑器， 

```bash
pkg install emacs
```

### Nano

nano 是一个小而美的编辑器。具有如下：打开多个文件，每行滚动，撤消 / 重做，语法着色，行编号等功能

同样安装起来也很简单：

```bash
pkg install nano
```

### Vim

Vim 被称为编辑器之神，基本上 Linux 发行版都会自带 Vim，这个在前文基本工具已经安装了，如果你没有安装的话，可以使用如下命令安装：

```bash
pkg install vim
```

并且官方也已经封装了 `vim-python`，对 Python 相关的优化。

```bash
pkg install vim-python
```

#### 解决汉字乱码

如果你的 Vim 打开汉字出现乱码的话，那么在家目录 (`~`) 下，新建 `.vimrc` 文件

```bash
vim .vimrc
```

添加内容如下：

```ini
set fileencodings=utf-8,gb2312,gb18030,gbk,ucs-bom,cp936,latin1
set enc=utf8
set fencs=utf8,gbk,gb2312,gb18030
```

然后 source 下变量：

```bash
source .vimrc
```

![vim-cn-support](/img/advanced/6.png)

#### Vim 配色

Termux Vim 自带了如下的配色：

```bash
ls /data/data/com.termux/files/usr/share/vim/vim82/colors

desert.vim    morning.vim    shine.vim    blue.vim      elflord.vim   murphy.vim     slate.vim    darkblue.vim  evening.vim   pablo.vim      industry.vim  peachpuff.vim  torte.vim    delek.vim     koehler.vim   ron.vim        zellner.vim
```

配色可以自己一个个尝试一下，还是向上面的汉字乱码那样，编辑家目录下的 `.vimrc` 文件：

```bash
vim ~/.vimrc
```

新增如下内容：

```ini
set nu                " 显示行号
colorscheme desert    " 颜色主题
syntax on             " 打开语法高亮
```

下面是国光随便找的几个颜色主题效果，感兴趣的朋友可以自己一个个尝试：
![vim-cn-support](/img/advanced/7.png)
![vim-cn-support](/img/advanced/8.png)
![vim-cn-support](/img/advanced/9.png)
 

## Apache

Apache 是一个开源网页服务器软件，由于其跨平台和安全性，被广泛使用，是最流行的 Web 服务器软件之一。

### 安装 Apache

```bash
pkg install apache2
```

### 启动 Apache

```bash
apachectl start
```

然后浏览器访问: http://127.0.0.1:8080 访问是否成功启动：

![apache-cn-support](/img/advanced/10.png)



Termux 自带的 Apache 的网站默认路径为：

`$PREFIX/share/apache2/default-site/htdocs/index.html`

### 停止 Apache

```bash
apachectl stop
```

### 重启 Apache

```bash
apachectl restart
```

### Apache 解析 PHP

既然 Apache、PHP、MySQL 都可以成功安装的话，那么现在只要配置好 Apache 解析 PHP 之后就可以打造一个 Android 平台上的 LAMPP 平台了，配置本小节的内容得确保 Termux 已经配置好了 PHP 开发环境，没有配置好的可以参加下面 PHP 小节部分。

#### 安装 php-apache

默认的 Apache 是无法解析 PHP 的，我们需要安装相应的包：

```bash
pkg install php-apache
```

#### 配置 Apache

Termux 上的 Apache 默认配置文件的路径为:

`$PREFIX/etc/apache2/httpd.conf`

直接编辑配置文件:

```bash
vim /data/data/com.termux/files/usr/etc/apache2/httpd.conf
```

配置文件里面搜索 PHP 没有相关的模块，所以需要我们手动添加 PHP7 的模块:

```bash
LoadModule php7_module /data/data/com.termux/files/usr/libexec/apache2/libphp7.so
```

并在刚刚这个语句下方添加解析器，内容如下:

```apache
<FilesMatch \.php$>
  SetHandler application/x-httpd-php
</FilesMatch>
```

接着继续往下找配置文件里面配置默认首页的地方，我们添加 `index.php` 到默认首页的规则里面:

```apache
<IfModule dir_module>
  DirectoryIndex index.php index.html
</IfModule>
```

这表示网站目录的默认首页是 `index.php`，如果没有 `index.php` 系统会自动寻找 `index.html` 做为默认首页了。

修改完 Apache 的配置文件后，记得使用 `apachectl restart` 重启 Apache 服务，然后这个时候回发现我们重启居然报错了：

```
Apache is running a threaded MPM, but your PHP Module is not compiled to be threadsafe.  You need to recompile PHP.
AH00013: Pre-configuration failed
```

不要慌问题不大，下面来解决这个问题

#### 解决 Apache PHP 报错

先找到如下行：

```apache
LoadModule mpm_worker_module libexec/apache2/mod_mpm_worker.so
```

给他注释掉为：

```apache
#LoadModule mpm_worker_module libexec/apache2/mod_mpm_worker.so
```

然后找到如下行：

```apache
#LoadModule mpm_prefork_module libexec/apache2/mod_mpm_prefork.so
```

取消注释：

```apache
LoadModule mpm_prefork_module libexec/apache2/mod_mpm_prefork.so
```

最终的示例图如下:

![apache-cn-support](/img/advanced/11.png)  

#### 解析 PHP 测试

在 Apache 的网站根目录下，创建一个 `index.php` ，测试一下 `phpinfo ()` 函数能否正常运行:

```bash
echo '<?php phpinfo(); ?>' > $PREFIX/share/apache2/default-site/htdocs/index.php
```

然后浏览访问: http://127.0.0.1:8080 查看效果。

![apache-cn-support](/img/advanced/12.png)  

## 其他语言环境支持

### C

Termux 官方封装了 Clang，他是一个 C、C++、Objective-C 和 Objective-C++ 编程语言的编译器前端。

#### 安装 clang

```bash
pkg install clang
```

#### 编译测试

clang 在编译这一块很强大，感兴趣的朋友可以去网上查看详细的教程，国光这里只演示基本的 Hello World 使用。写一个 Hello World 的 C 程序，如下 hello.c：

```c
#include <stdio.h>

int main(){
  printf("Hello World")
  return 0;
}
```

编辑完成后，使用 clang 来编译生成 hello 的可执行文件：

```bash
clang hello.c -o hello
```

> 效果图

![apache-cn-support](/img/advanced/13.png)  

### Java

Termux 早期原生编译 JAVA 只能使用 ecj (Eclipse Compiler for Java) 和 dx 了，然后使用 Android 自带的 dalvikvm 运行。后面 Termux 官方也封装了 openjdk-17 这样安装起来就更方便了。

还有如果想要完整体验 JAVA 环境的话，另一个方法就是 Termux 里面安装一个完整的 Linux 系统，然后在 Linux 里面运行 Java，安装系统部分下面文章会详细介绍，这种思路也是可以的。

#### Openjdk-17

```bash
pkg update
pkg install openjdk-17
```

当然这个包可能不太稳定，遇到相关问题可以去 Termux 官方的项目下提交 issue：

`https://github.com/termux/termux-packages/issues?q=openjdk`
`https://github.com/termux/termux-packages/issues?q=java`

#### ECJ

**安装编译工具**

```bash
pkg install ecj dx -y
```

国光这里只演示基本的 Hello World 使用。写一个 Hello World 的 JAVA 程序，如下 HelloWorld.java:

```java
public class HelloWorld {
    public static void main(String[] args){
        System.out.println("Hello Termux");
    }
}
```

**编译生成 class 文件**

```bash
ecj HelloWorld.java
```

**编译生成 dex 文件**

```bash
dx --dex --output=hello.dex HelloWorld.class
```

**使用 dalvikvm 运行**

格式规范如下：`dalvikvm -cp dex文件名 类名`

```bash
dalvikvm -cp hello.dex HelloWorld
```
 

![apache-cn-support](/img/advanced/14.png)  

### MariaDB (MySQL)

MariaDB 是 MySQL 关系数据库管理系统的一个复刻，由社区开发，有商业支持，旨在继续保持在 GNU GPL 下开源。开发这个分支的原因之一是：甲骨文公司收购了 MySQL 后，有将 MySQL 闭源的潜在风险，因此社区采用分支的方式来避开这个风险。

#### 安装 MariaDB

Termux 官方也封装了 MariaDB，所以安装起来很方便：

```bash
pkg install mariadb
```

 
![apache-cn-support](/img/advanced/15.png)  

这里基本上会安装很顺利，但是早期用户可能出现安装失败的情况，如果安装失败的话，这个时候手动在配置目录下创建 `my.cnf.d` 文件夹即可：

```bash
$ cd /data/data/com.termux/files/usr/etc/
$ mkdir my.cnf.d
```

#### 初始化数据库

早期的 Termux 安装完 MySQL 是需要初始化数据库的，新版本在安装时候就已经初始化了数据库

```bash
mysql_install_db
```

2020 年 4 月 19 日：国光今天安装的 MySQL 发现已经存在 `mysql.user` 表了，无需初始化：


![apache-cn-support](/img/advanced/16.png)  

#### 启动 MySQL 服务

因为正常启动完成后，MySQL 这个会话就一直存活，类似与 Debug 调试一样，此时使用 Ctrl + C -> 中止当前进程也无济于事，体验式就一点都不优雅，所以这里国光使用 Linux 自带的 `nohup` 命令将其放到后台启动。

```bash
nohup mysqld &
```

 

![apache-cn-support](/img/advanced/17.png)  

图片上这个 17115 此时就是 mysqld 的进程 PID 号，我们使用如下命令验证一下是否正确：

```bash
ps aux|grep mysql
```

可以看到果然是进程的 PID 号：

![apache-cn-support](/img/advanced/18.png)  

**至于 nohup 运行的提示**

```ini
nohup: ignoring input and appending output to `nohup.out'
```

这个是正常现象，无伤大雅，Termux 下就这样将就着用吧。

#### 停止 MySQL 服务

Termux 下没有好的办法退出 MySQL 服务，只能强制杀掉进程了，使用如下命令格式可以轻松杀掉进程：

```bash
kill -9 PID
```

![apache-cn-support](/img/advanced/19.png)  

当然每次查看进程的 PID 号，再杀掉进程有点繁琐了，实际上这一步可以直接这样操作：

```bash
kill -9 `pgrep mysql`
```

Awesome ! 优雅！

#### 默认的两个用户

用户登录的前提是 MySQL 服务在后台运行，如果你按照上一小节操作把 MySQL kill 掉的话，请重新启动一下 MySQL 服务

新版本的 Termux 安装初始化数据库的时候包含两个高权限用户，一个是无法访问的 root 用户

![apache-cn-support](/img/advanced/20.png)  

> 提示拒绝 root 登录

另一个用户就是 Termux 的用户名，默认密码为空，我们来登录看看：

```bash
mysql -u $(whoami)
```

> 可以成功登录 并执行SQL语句

![apache-cn-support](/img/advanced/21.png)  

那么这个无法登录的 root 用户该怎么办呢 ？不要着急 继续往下看

#### 修改 root 密码

老版本的 Termux 的直接使用 `mysql_secure_installation` 可以设置密码，但是新版本的安全策略变更了 我们在设置密码的时候回提示当前密码不正确，所以这条路行不通了。

这里我们只能使用 MySQL 的另一个用户名，即 Termux 用户名登录，然后来修改 root 的密码，使用如下命令修改 root 密码:

```bash
# 登录 Termux 用户
mysql -u $(whoami)

# 修改 root 密码的 SQL语句
use mysql;
set password for 'root'@'localhost' = password('你设置的密码');

# 刷新权限 并退出
flush privileges;
quit;
```

![apache-cn-support](/img/advanced/22.png)  

OK！ 如何和图片上差不的效果，那么修改 root 密码就成功了。

#### root 用户登录

修改完密码之后我们就可以美滋滋地使用 root 用户来登录了：

```bash
mysql -u root -p
Enter password: xxxxx（这里输入你的密码)
```

![apache-cn-support](/img/advanced/23.png)  

#### 远程登录 MySQL

使用 `ip a` 后查看 IP 地址后，尝试电脑端远程访问 Termux 的数据库:

![apache-cn-support](/img/advanced/24.png)  

发现默认是无法成功连接的，这个时候我们需要到数据库手动开启 root 用户的远程访问权限:

这里的 `P@ssw0rd` 是我的 root 密码

```sql
grant all on *.* to root@'%' identified by 'P@ssw0rd' with grant option;
flush privileges;
```

![apache-cn-support](/img/advanced/25.png)  

执行完成后 尝试 PC 端远程过去看看：

![apache-cn-support](/img/advanced/26.png)  

### Nginx

Nginx 是一个高性能的 Web 和反向代理服务器，Nginx 用的熟悉的话，下面搭建各种网站也就轻而易举了。

#### 安装 Nginx

Termux 安装 Nginx 也很简单，一条命令即可：

```bash
pkg install nginx
```

安装完成后，国光的习惯是查看一下版本信息：

> 1.17.10 版本

#### 测试 Nginx

测试检查 Nginx 的配置文件是否正常:

```bash
nginx -t
```

> img

现在测试肯定是 OK 的，这个多用于我们修改完 Nginx 的配置文件后的检查。

#### 启动 Nginx

早期版本的 Termux 需要在 `termux-chroot` 环境下才可以成功启动 Nginx ，新版本的 Termux 可以直接启动，还是很方便的：

```bash
nginx
```

Termux 在 Nginx 上默认运行的端口号是 8080， 使用 `pgrep` 命令也可以查看 Nginx 进程相关的 PID 号。

然后手机本地直接访问 http://127.0.0.1:8080 查看 Nginx 是否正常启动：

> img

#### 重启 Nginx

一般当修改完 Nginx 相关的配置文件时，我们需要重启 Nginx，使用如下命令即可重启:

```bash
nginx -s reload
```

#### 停止 Nginx

**方法一 原生停止**

```bash
nginx -s stop
```

或者

```bash
nginx -s quit
```

`quit` 是一个优雅的关闭方式，Nginx 在退出前完成已经接受的连接请求。`Stop` 是快速关闭，不管有没有正在处理的请求。

**方法二 杀掉进程**

只需三番钟，里造会干我一样，爱象节款游戏 扯远了，只需要 1 条命令，即可优雅的终止掉 Nginx 服务:

```bash
kill -9 `pgrep nginx`
```

貌似手机党 并不好敲 这个 \` 符号 =，= ，如果实在敲不出来，那就分两步走吧：

```bash
# 查询 nginx 进程相关的 PID 号
pgrep nginx

# 杀掉 查询出的 PID号进程
kill -9 PID
```

#### Nginx 解析 PHP

Termux 下的 Nginx 解析 PHP 这里单独拿出一级标题来叙述，成功解析的话，下面安装 wordpress 等 PHP 网站就会轻松很多。

**安装 php-fpm**

Nginx 本身不能处理 PHP，它只是个 Web 服务器，当接收到 PHP 请求后发给 PHP 解释器处理。Nginx 一般是把请求转发给 fastcgi 管理进程处理，PHP-FPM 是一个 PHP FastCGI 管理器，所以这里得先安装它：

```bash
pkg install php-fpm
```

安装完成顺便检查一下版本信息吧：

> img

**配置 php-fpm**

编辑 php-fpm 的配置文件 `www.conf`：

```bash
vim $PREFIX/etc/php-fpm.d/www.conf
```

定位搜索 `listen =` 找到

```ini
listen = /data/data/com.termux/files/usr/var/run/php-fpm.sock
```

将其改为：

```ini
listen = 127.0.0.1:9000
```

？？？啥 你不会使用 vim 搜索 ㄟ (▔,▔) ㄏ 那就老老实实一个个翻页吧。

**配置 Nginx**

编辑 Nginx 的配置文件 `nginx.conf`：

```bash
vim $PREFIX/etc/nginx/nginx.conf
```

下面国光贴出配置好的完整配置文件，大家可以参考下面这些图，只需要两大步骤：

1. 添加 `index.php` 到默认首页的规则里面
2. 取消 `location ~ \.php$` 这些注释，按照图片上的 提示修改

Termux 里面的 Nginx 默认网站的根目为：

`/data/data/com.termux/files/usr/share/nginx/html`

如果想要修改默认路径的话 只需要在配置文件中 替换 2 处出现的这个路径即可

下面贴一份完整的配置文件：

```nginx
worker_processes  1;
events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       8080;
        server_name  localhost;
        location / {
            root   /data/data/com.termux/files/usr/share/nginx/html;
            index  index.html index.htm index.php;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /data/data/com.termux/files/usr/share/nginx/html;
        }

        location ~ \.php$ {
            root           html;
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME  /data/data/com.termux/files/usr/share/nginx/html$fastcgi_script_name;
            include        fastcgi_params;
        }
    }
}
```

**测试 PHP 解析**

Nginx 默认网站的根目录为：

`/data/data/com.termux/files/usr/share/nginx/html`

在这个网站根目录下新建 `info.php` 内容为：`<?php phpinfo(); ?>`

```bash
echo '<?php phpinfo(); ?>' > $PREFIX/share/nginx/html/info.php
```

**启动服务**

先启动 `php-fpm` 服务：

```bash
php-fpm
```

然后再启动 Nginx 服务：

```bash
nginx
```

如果你的 Nginx 已经启动了的话，使用 `nginx -s reload` 重启 Nginx

**访问测试**

浏览器访问 http://127.0.0.1:8080/info.php 来看看刚刚新建的测试文件是否解析了：

> 哇哦~ awesome

### Node.js

Node.js 是能够在服务器端运行 JavaScript 的开放源代码、跨平台 JavaScript 运行环境。

#### 安装 Nodejs

`nodejs-lts` 是长期支持版本，如果执行 `pkg install nodejs` 版本后，发现 npm 报如下错误:

```bash
segmentation fault
```

那么这个时候可以尝试卸载当前版本 `pkg uninstall nodejs` 然后执行下面命令安装长期稳定版本：

```bash
pkg install nodejs-lts
```

安装完成后使用如下命令查看版本信息：

```bash
node -V
npm -V
```

#### Hello World

新建一个 `hello.js` 脚本，内容如下:

```javascript
console.log('Hello Termux');
```

然后尝试运行：

```bash
$ node hello.js
Hello Termux
```

#### http-server

`http-server` 是一个基于 Node.js 的简单零配置命令行 HTTP 服务器。

```bash
# 安装 http-server
npm install -g http-server

# 运行 http-server
http-server
```

> img

尝试电脑端浏览器直接访问看看：

> OK

#### 安装报错

早期版本的 Termux 的 npm 安装一些包的时候会报如下错误：

```
Cannot read property 'length' of undefined
```

查了下是这边版本的问题：

> 新版本貌似npm正常

这是一个 BUG，官方的解决方法如下：

`disable concurrency in case of libuv/libuv#1459`

> img

编辑如下文件：

```bash
vim $PREFIX/lib/node_modules/npm/node_modules/worker-farm/lib/farm.js
```

我这里修改 length 的是 4，这个好像和 CPU 有关，总之这里的 length 得指定一个数字：

> 新版本貌似npm正常

然后在重新安装下 `npm install hexo-cli -g` 成功。

### PHP

PHP 是一种开源的脚本语言，适用于网络开发。语法借鉴吸收 C 语言、Java 和 Perl 等流行计算机语言的特点，易于学习，PHP 是世界上最好的语言（手动狗头）。

#### 安装 PHP

Termux 官方封装了 PHP，所以我们安装起来就很方便：

```bash
pkg install php
```

安装完成后查看下版本信息：

```bash
php --version
```

> img

#### 运行测试文件

自 PHP5.4 之后 PHP 内置了一个 Web 服务器。在 Termux 下可以很方便地测试 PHP 文件

首先在家 (`~`) 目录下建一个 `www` 文件夹，然后在 `www` 文件夹下新建一个 `index.php` 文件，内容为：

```php
<?php phpinfo();?>
```

完整的步骤如下：

```bash
# 新建 www 文件夹
mkdir ~/www

# 创建 inedx.php 文件
echo '<?php phpinfo();?>' > ~/www/index.php
```

编写完成 `index.php` 文件后，尝试使用 PHP 内置的 WebServer 直接启动：

```bash
# 进入家目录
cd ~

# 启动 WebServer
php -S 0.0.0.0:8888 -t www/
```

自己制定端口后，浏览器访问 http://127.0.0.1:8888 效果如下：

> img

### Python

Python 是近几年非常流行的语言，Python 相关的书籍和资料也如雨后春笋一般不断涌现，带来了活跃了 Python 学习氛围。

#### 安装 Python2

Python2 版本要淘汰了，大家简单了解一下就好：

```bash
pkg install python2 -y
```

安装完成后，使用 `python2` 命令启动 Python2.7 的环境。

#### 安装 Python3

Termux 安装 Python 默认版本是 Python3 的版本，与此同时也顺便安装了 clang

```bash
pkg install python -y
```

安装完成后，查看下 clang 和 Python 的版本：

> img

#### 注意版本区分

如果你同时安装了 Python3 和 Python2 版本的话，最好向下图中这样验证一下各个版本情况，做到心知肚明，国光我是先安装 Python3 然后再安装 Python2 的：

> 安装顺序不一样 pip 这种图片应该也就不一样

如果版本直接混乱的话，手动修改 `bin` 目录下的软连接指向的位置即可。

#### 升级 PIP 版本

PIP 保持最新是一个好习惯，升级方式很简单：

```bash
# 升级 pip2
python2 -m pip install --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple some-package

# 升级 pip3
python -m pip install --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
```

这两条命令分别升级了 pip2 和 pip3 到最新版。升级完成后你会惊讶的发现你的 pip3 命令不见了？？？然后这个时候就开始吐槽国光了（内心 OS：国光 非要强迫症升级 pip 干嘛）

不要慌，问题不大，其实是 pip 升级后的 bug，我们手动修复一下就好了。

`vim $PREFIX/bin/pip`

将 `bin` 目录下的 `pip` 文件的第一行：

```bash
#!/data/data/com.termux/files/usr/bin/python3.8
```

改为：

```bash
#!/data/data/com.termux/files/usr/bin/python
```

同理 `pip3` 文件也是这样修改，修改完成后，pip 救回来啦 ~

### Go

```bash
pkg install golang
```

### Rust

```bash
pkg install rust
```

<br/>

#### 文章作者: 国光

文章链接: https://www.sqlsec.com/2018/05/termux.html 和 https://sh1yan.top/2024/04/07/Termux-Configuration-manual/#%E7%89%88%E6%9D%83%E5%A3%B0%E6%98%8E

版权声明: 本博客所有文章除特别声明外，均采用 CC BY-NC-SA 4.0 许可协议。转载请注明来自 国光！
