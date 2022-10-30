---
title: Flutter上手
cover: 'https://cdn.jsdelivr.net/gh/sineava/picture-bed//cover/bg-19.png'
background: url(https://cdn.jsdelivr.net/gh/sineava/picture-bed//cover/bg-19.png)
tags: design
comments: true
date: 2022-07-28 22:53:16
updated: 2022-10-30 11:51:20
---

## 基础
### 视图结构
![](https://cdn.jsdelivr.net/gh/sineava/picture-bed//cover/flutter-1.png)

## 其他
### 开发环境
1. 安装flutter sdk
2. 配置环境变量(到bin目录)
3. vscode安装flutter插件(会自动安装dart)
4. 安装android studio(安装sdk)
5. android settings -> system settings -> android sdk -> sdk tools(勾选commond-line tools下载)

### 连接真机(无数据线)
1. adb tcpip 任意端口(此时需要数据线连接)
2. 断开数据线
3. adb connect 手机ip:刚才的端口

### 常用命令
```bash
# flutter 检测
$ flutter doctor
# 查询所有设备
$ flutter devices
# 运行到指定设备
$ flutter run -d 设备号
# 创建模板项目
$ flutter create project
# flutter拉包
$ flutter pub add 包名
# flutter更新/下载依赖
$ flutter pub get
# 更新flutter
$ flutter upgrade
```

### 关闭右上角debug
```dart
MaterialApp(
  debugShowCheckedModeBanner: false
)
```

### 快捷键
```dart
stless // 快速创建无状态class
stful  // 快速创建状态class
```

### flutter run -d 安卓设备(卡住)
```bash
# 进行检测
$ flutter doctor
# 配置JAVA_HOME
# 实行gradlew,切换到andorid目录
$ flutter clean build
```

### audioplayers视频无法播放
```dart
# 路径不用加/assets
player.play(AssetSource('assets_note2.wav'))
```

### flutter2->3
{% tip warning %}
  error: ProcessException: Process exited abnormally
{% endtip %}
```bash
$ flutter channel stable/beta/master
$ flutter upgrade
# 出现问题可执行如下操作
$ git checkout -- . # 出现网络问题,可切换到flutter sdk安装路径,然后执行该命令
```