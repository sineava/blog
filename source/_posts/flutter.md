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

### StatelessWidget与StatefulWidget区别
- StatelessWidget: 无状态的widgets是不可变的,这意味着它们的属性不能改变,所有的值都是final
- StatefulWidget: 有状态的widgets也是不可变的,内部维护着可变的State

### 常见Widgets
- Container: 容器(可添加padding,margin,border,background color等)
- GridView: 可滚动网格
- ListView: 可滚动列表
- Stack: 将widget覆盖到另一个上面(有点类似绝对定位),常搭配Positioned使用
- Expanded: 分配剩余空间,内部可设置flex
- Row/Column: 行/列布局,可配置主轴与交叉轴
- Card: 将相关信息整理到一个有圆角和阴影的盒子中
- ListTile: 将最多三行的文本、可选的导语以及后面的图标组织在一行中

{% youtube XawP1i314WM %}

## flutter常用库
### english_words
{% tip info %}
  生成随机英文单词
{% endtip %}

### cupertino_icons
{% tip info %}
  图标库(flutter已经内置)
{% endtip %}

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

### flutter下载canvasKit或包卡住
```bash
# linux使用export,window直接配置系统环境变量就行,记得重启下
$ export PUB_HOSTED_URL=https://pub.flutter-io.cn
$ export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

### flutter run -d 安卓设备(卡住)
```bash
# 进行检测
$ flutter doctor
# 配置JAVA_HOME
# 切换到android,使用gradlew clean&build
$ ./android/gradlew clean build
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

---
{% referfrom '1','flutter中文文档','https://flutter.cn/' %}
{% referfrom '2','dartpad','https://dartpad.cn/' %}
{% referfrom '3','flutter插件库','https://pub.dev/' %}
{% referfrom '4','flutter cookbook','https://flutter.cn/docs/cookbook' %}
{% referfrom '5','核心widget','https://flutter.cn/docs/development/ui/widgets' %}