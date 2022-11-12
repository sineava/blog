---
title: Flutter上手
cover: 'https://testingcf.jsdelivr.net/gh/sineava/picture-bed//cover/bg-19.png'
background: url(https://testingcf.jsdelivr.net/gh/sineava/picture-bed//cover/bg-19.png)
tags: design
comments: true
date: 2022-07-28 22:53:16
updated: 2022-10-30 11:51:20
---

## dart语法
### list
```dart
// 创建指定长度list
List.generate(6, (index) => CircleButton(index: index));
```

## 基础
### 视图结构
![](https://testingcf.jsdelivr.net/gh/sineava/picture-bed//cover/flutter-1.png)

### StatelessWidget与StatefulWidget区别
- StatelessWidget: 无状态的widgets是不可变的,这意味着它们的属性不能改变,所有的值都是final
- StatefulWidget: 有状态的widgets也是不可变的,内部维护着可变的State

### 布局约束
- 上层widget向下层widget传递约束条件
- 下层widget向上层widget传递大小信息
- 上层widget决定下层widget的位置

### 常见Widgets
- Container: 容器(可添加padding,margin,border,background color等)
- GridView: 可滚动网格
- ListView: 可滚动列表
- Stack: 将widget覆盖到另一个上面(有点类似绝对定位),常搭配Positioned使用
- Expanded: 分配剩余空间,内部可设置flex
- Row/Column: 行/列布局,可配置主轴与交叉轴
- Card: 将相关信息整理到一个有圆角和阴影的盒子中
- ListTile: 将最多三行的文本、可选的导语以及后面的图标组织在一行中
- Tooltip: 简单提示
- Center: 居中布局
- Align: 放置子widget位于左上,右下等
- SafeArea: 安全区
- Inkwell: 常用于右侧展开
- TextField/TextFormField: 前者纯展示,如果有数据绑定等使用后者,搭配Form
- ListWheelScrollView: 滚轮列表,可用于时间滚动等功能

{% youtube XawP1i314WM %}

### 自适应与响应式
- {% label 自适应 green %}: 应用以自适应的方式在不同的设备上（移动端和桌面端）运行，需要同时处理鼠标、键盘和触控输入
- {% label 响应式 green %}: 一个响应式应用的布局会根据可用的屏幕大小而调整

### 设备类型判断
```dart
class FormFactor {
  static double desktop = 900;
  static double tablet = 600;
  static double handset = 300;
}

ScreenType getFormFactor(BuildContext context) {
  double deviceWidth = MediaQuery.of(context).size.shortestSide;
  if (deviceWidth > FormFactor.desktop) return ScreenType.Desktop;
  if (deviceWidth > FormFactor.tablet) return ScreenType.Tablet;
  if (deviceWidth > FormFactor.handset) return ScreenType.Handset;
  return ScreenType.Watch;
}
```

### 设备细分
{% tip info %}
  Platform配合kIsWeb(检测是否支持浏览器,web端无Platform)使用
{% endtip %}
```dart
bool get isMobileDevice => !kIsWeb && (Platform.isIOS || Platform.isAndroid);
bool get isDesktopDevice => !kIsWeb && (Platform.isMacOS || Platform.isWindows || Platform.isLinux);
bool get isMobileDeviceOrWeb => kIsWeb || isMobileDevice;
bool get isDesktopDeviceOrWeb => kIsWeb || isDesktopDevice;
```

### 跳转页面
```dart
Navigator.of(context).push(
  MaterialPageRoute(
    builder: (context) => const SongScreen(song: song)
  )
)
```

### 可选择文本
```dart
return SelectableText('Select me!');

// 富文本
return SelectableText.rich(
  TextSpan(
    children: [
      TextSpan(text: 'Hello'),
      TextSpan(text: 'Bold', style: TextStyle(fontWeight: FontWeight.bold))
    ]
  )
);
```

## flutter常用库
### english_words
{% tip info %}
  生成随机英文单词
{% endtip %}

### cupertino_icons
{% tip info %}
  图标库(flutter已经内置)
{% endtip %}

### bitsdojo_window
{% tip info %}
  桌面端:禁用顶部栏,用于定制应用窗口的标题栏
{% endtip %}

### audioplayers
{% tip info %}
  音频播放
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

### setState不生效
{% tip info %}
  *.变量不要声明在build内部
{% endtip %}

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
$ cd android
$ ./gradlew clean build
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

### 组件内部返回上一页
{% tip info %}
  我的UI结构: 登录注册页->注册页->注册页子组件按钮,直接路由会黑屏
{% endtip %}
```dart
// 父组件
Back(pContext: context)

// 子组件
final BuildContext pContext;
const Header({Key? key, required this.pContext}) : super(key: key);
onPressed: () {
  Navigator.pop(widget.pContext);
}
```

---
{% referfrom '1','flutter中文文档','https://flutter.cn/' %}
{% referfrom '2','dartpad','https://dartpad.cn/' %}
{% referfrom '3','flutter插件库','https://pub.dev/' %}
{% referfrom '4','flutter cookbook','https://flutter.cn/docs/cookbook' %}
{% referfrom '5','核心widget','https://flutter.cn/docs/development/ui/widgets' %}
{% referfrom '6','资源与图片,logo','https://flutter.cn/docs/development/ui/assets-and-images' %}
{% referfrom '7','图片在线转App Icon','https://appicon.co/' %}
{% referfrom '8','flutter实战','https://book.flutterchina.club/' %}
{% referfrom '9','flutter组件详解','http://laomengit.com/' %}