---
title: 免费获取 .dpdns.org 域名后缀并部署 github 仓库
date: 2026-03-23 21:14:10
top_img: https://dev.bsgun.cn/i/2026/03/23/822294.webp
cover: https://dev.bsgun.cn/i/2026/03/23/822294.webp
katex: true
tags:
ai:
  - 本文内容翔实，简洁易懂。
  - 本教程介绍了如何免费给博客获取域名，并提供了注册、获取、托管详细步骤及技术支持方式。教程的内容针对上个 Digitalplat 的 UI 进行更新，2026/3/27 后的新版 UI 按钮位置会有出入，但操作基本相同。
categories: 网站开发
---

## 前提

拥有一个 [Github](https://github.com) 的账号和博客仓库。

## 领取域名

### 注册

#### Github

前往 [Github（点这里）](https://github.com/signup) 注册账号。

#### 邮箱

前往 [Digitalplat（点这里）](https://dash.domain.digitalplat.org/signup?ref=uGQR48cE9B) 注册账号，完整人名、电话号码、完整地址等信息不用填写真实的，可以在 [美国身份生成器](https://www.meiguodizhi.com/) 生成。
![](/img/2026/1772799139439.png)
注册完成后会发一封验证到邮箱。
![](/img/2026/1772799325113.png)
登录后需要 KYC 验证（使用 Github 账号即可）。
![](/img/2026/1772799416776.png)
验证成功后会显示这个页面。
![](/img/2026/1772799481598.png)

### 获取

> digitalplat 于 2026/3/20（文章发布约一周后） 左右更新 UI 和页面交互，文章中获取部分截图为旧版，可能无法对应位置，但操作基本相同。

每个账户理论上可以注册两个免费的 dpdns.org 域名，第 $2$ 个需要给他们的Github项目star，点击验证通过后就可以，验证不难。
![](/img/2026/1772799512014.png)
点击[域名注册（Domain Registration）](https://dash.domain.digitalplat.org/panel/main?page=%2Fpanel%2Fregister)，填写想注册的域名。
![](/img/2026/1772800180929.png)
如果被占用，可以换个域名试试，被占用图片：
![](/img/2026/1772800250280.png)
红框中的 *Name Server1，\*Name Server2先填 1.com 和 2.com，等会儿可以修改。未被占用图片：
![](/img/2026/1772801108491.png)
域名注册成功后会显示这个页面。
![](/img/2026/1772801400356.png)

## 托管到 CF

### 登录

用 Github [登录 Cloudflare](https://dash.cloudflare.com/login)。
![](/img/2026/1772802324633.png)
![](/img/2026/1772802412422.png)

### 添加

点击添加站点（Onboard a domain）。
![](/img/2026/1772802648682.png)
选择免费版继续。
![](/img/2026/1772804243558.png)
类型选择 CHAME，名称填写 `@` ，目标填写 Github page 地址（username.github.io，将 username 替换为你的 Github 用户名），点击保存（Save）。
![](/img/2026/1772804929713.png)
![](/img/2026/1772804934072.png)
保存后效果如下图。
![](/img/2026/1772805054433.png)
点击底部蓝色 继续激活 按钮。

### 修改 Name Server

回到[注册域名的网站](https://dash.domain.digitalplat.org/panel/main?page=%2Fpanel%2Fdomains)，点击刚刚的域名，下滑页面，找到原来是 1.com 和 2.com 的 Name server。在 Cloudflare 页面点击 `显示名称服务器指令` （ `Show nameserver instructions` ） 依次点击 Click to copy 按钮并依次复制到刚刚的域名的 Name server 1 和 Name server 2，修改后继续在注册域名的网站点击 `更新名称服务器` （ `Update nameservers` ）。
![](/img/2026/1772805840872.png)
成功后效果如下图。
![](/img/2026/1772848615394.png)

### 检查

回到 Cloudflare，点击 `现在就检查名称服务器` （ `Check nameservers now` ）。
![](/img/2026/1772848750931.png)
域名注册商可能需要 $3$ 分钟 $\sim 24$ 小时来处理 Nameserver 的更新，当你的网站在 Cloudflare 上激活后，你会收到一封邮件通知。
你也可以保留 Cloudflare 页面，当显示如下两图时，说明检查成功了。

![](/img/2026/1772851053998.png)

<center>单个域名概述页面</center>

![](/img/2026/1772851718121.png)
![](/img/2026/1772851759034.png)

<center>所有域名管理页面</center>

## 结语

可以愉快地享用Cloudflare的服务了！
祝大家打造出品牌化的个人博客，为平凡的生活添彩！
