---
title: 前端随笔
cover: 'https://npm.elemecdn.com/picture-bed@1.0.0@latest/cover/bg-11.jpg'
background: url(https://npm.elemecdn.com/picture-bed@1.0.0@latest/cover/bg-11.jpg)
tags: 随笔
date: 2022-09-03 15:53:16
updated: 2022-10-26 23:28:16
---

## HTML

### 根据设备宽度加载不同图片
```html
<picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto">
</picture>
```

### 图片热力区域
{% note success simple %}
点击tab触发
{% endnote %}
```html
<img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
</map>
```

### 模拟textarea可编辑拉伸
```html
<div style="resize: both;min-height:200px;border: 1px solid #ccc;overflow:auto;" contenteditable="true"></div>
```

### meta
```html
<head>
  <meta charset="UTF-8" />
  <meta name="description" content="Free Web tutorials" />
  <meta name="keywords" content="HTML, CSS, JavaScript" />
  <meta name="author" content="John Doe" />
  <meta http-equiv="refresh" content="30" />
  <!-- 让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放(移动端需要设置) -->
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
</head>
```

### a标签图片下载
```html
<!-- 如果存在跨域问题需要解决跨域,否则会变为跳转 -->
<a href="/img/avatar.jpg" download>
<!-- 测试结果: 如果不是图片还是会跳转,如果想直接下载添加响应头Content-Disposition为attachment -->
<a href="/file.pdf">download file</a>
```

## 浏览器
### 调试js控制样式
1. 切到控制台Sources
2. f8 -> ctrl+\

### 调试video标签隐藏元素
![](https://npm.elemecdn.com/picture-bed@1.0.0//cover/random-4.jpg)
![](https://npm.elemecdn.com/picture-bed@1.0.0//cover/random-3.jpg)

## DOM&BOM
### screenX,pageX,clientX,offsetX区别
![](https://npm.elemecdn.com/picture-bed@1.0.0//cover/random-1.png)

### 节点克隆
```js
const container = document.querySelector('.container')
const cloneContainer = container.cloneNode(true) // true:深度克隆,不传只可能表层元素
```

### 给页面所有元素添加随机颜色border
{% note success simple %}
选择器$$(类似querySelectorAll)只有在控制台才有,[具体解释参考github](https://github.com/haizlin/fe-interview/issues/100)
{% endnote %}
```js
[].forEach.call($$("*"),function(a){ a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16) })
```

### 拖动图片到指定区域
```html
<img class="img" src="https://gw.alicdn.com/i4/710600684/O1CN01BSkFT41GvJe0mLJBv_!!710600684.jpg_Q75.jpg_.webp" draggable="true" />
<div class="box" ondrop="drop(event)" ondragover="dragover(event)" />

<script>
  const dragover = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }
  const drop = (e) => {
    e.preventDefault()
    e.target.appendChild(document.querySelector('.img'))
  }
</script>
```

### 页面刷新
```js
location.reload // 方法1
location.search = '' // 方法2
history.go(0) // 方法3
```

### 获取当前经纬度
```js
navigator.geolocation.getCurrentPosition((position) => console.log(position))
```

### 获取剪切板内容
```js
// 包括读写操作
const promise = navigator.clipboard.read()
const promise = navigator.clipboard.readText()
const promise = navigator.clipboard.write(butter)
const promise = navigator.clipboard.writeText(text)
```

### DOM增删改查
```js
// 创建新节点
createDocumentFragment(node);
createElement(node);
createTextNode(text);

// 添加、移除、替换、插入
appendChild(node)
removeChild(node)
replaceChild(new,old)
insertBefore(new,old)

// 查找
getElementById()
getElementsByName()
getElementsByTagName()
getElementsByClassName()
querySelector()
querySelectorAll()

// 属性操作
getAttribute(key)
setAttribute(key, value)
hasAttribute(key)
removeAttribute(key)
```

## CSS

### 美化chrome滚动条
```css
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
```

### 伪元素实现浮动清除
```css
selector::after {
  content: '';
  display: block;
  clear: both;
}
```

### hover时暂停动画
```css
selector:hover {
  animation-play-state: paused;
}
```

### 段落分割
```css
p {
  column-count: 2; // 段落列数
  column-gap: 5px; // 分割的段落间距
  column-rule: 1px solid #ccc; // 段落分割线
}
```

### transition先后执行
```css
transition: 2s; // 不指定名称,默认all
transition: background 2s,transform 2s 2s; // 第一个参数为执行时间,第二个为暂停时间
```

### 自定义radio样式
```css
// checkbox等修改同理
input[type="radio"] {
  opacity: 0;
  margin: 0;
  padding: 0;
}

label[for="male"],label[for="female"] {
  background: url('/img/checks.png') 0 -32px no-repeat;
  padding-left: 24px;
}

input[type="radio"]:checked + label[for="male"],
input[type="radio"]:checked + label[for="female"] {
  background-position: 0 0;
  color: #ce1010;
}
```

### 去除select标签箭头
```css
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  -ms-appearance: none;
  appearance: none;
}
```

### grid命名布局
```css
.grid-wrapper {
  display: grid;
  width: 100vw;
  height: 100vh;
  gap: 10px;
  /* .就表示此处无内容,即空白 */
  grid-template-areas: 
    'header header header header'
    'nav . main main'
    'article . main main'
    'footer footer footer footer';
}
```

### 图片镜像
```css
.img {
  /* below,above,left,right */
  box-reflect: right;
}
```
![](https://npm.elemecdn.com/picture-bed@1.0.0//cover/interview-2.png)

### css属性使用html
```html
<style>
  .data::after {
    content: attr(data-content);
  }
</style>
<div class="data" data-content="test content"></div>
```

### 变量
```css
:root {
  --font-color: red;
}
span {
  color: var(--font-color);
}
```

## Tailwind CSS
### 1像素底部border
```html
<!-- tailwindcss border-b-1不会生效(2像素就会生效🙂) -->
<div className="border-b-[1px] border-[#817C7C]"></div>
```

## JavaScript

### 观察者模式
{% note success simple %}
目标<=>观察者
{% endnote %}
```js
class Observer {
  constructor(name) {
    this.name = name
  }
  update({ type, target }) {
    if (type !== 'kill') return
    if (target === this.name) {
      console.log(`逗我呢?悬赏干掉我自己🐱‍`)
    } else {
      console.log(`杀手: ${this.name}, 目标: ${target}, 任务已完成`)
    }
  }
}

class Subject {
  constructor() {
    this.observerList = []
  }
  addObserver(observer) {
    this.observerList.push(observer)
  }
  notify(task) {
    this.observerList.forEach(observer => {
      console.log(`${observer.name}准备开始任务!`)
      observer.update(task)
    })
  }
}

const subject = new Subject()
const observer1 = new Observer('张三')
const observer2 = new Observer('李四')
subject.addObserver(observer1)
subject.addObserver(observer2)

const task = {
  type: 'kill',
  target: '张三'
}

subject.notify(task)

// 张三准备开始任务!
// 逗我呢?悬赏干掉我自己🐱‍
// 李四准备开始任务!
// 杀手: 李四, 目标: 张三, 任务已完成
```

### 发布订阅模式
{% note success simple %}
发布者->事件中心<=>订阅者
{% endnote %}
```js
class PubSub {
  constructor() {
    // killTask: 暗杀任务, protectTask: 保镖任务
    this.events = {}
  }
  subscribe(type, cb) {
    if (!this.events[type]) this.events[type] = []
    this.events[type].push(cb)
  }
  publish(type, ...args) {
    console.log(`中介发布任务: ${args}`)
    this.events[type] && this.events[type].forEach(cb => cb(...args))
  }
  unsubscribe(type, cb) {
    if (this.events[type].length === 0) {
      delete this.events[type]
      return
    }
    if (this.events[type]) {
      const index = this.events[type].findIndex(e => e === cb)
      this.events[type].splice(index, 1)
    }
  }
  unsubscribeAll(type) {
    this.events[type] && delete this.events[type]
  }
}

// 中介
const pubsub = new PubSub()
pubsub.subscribe('killTask', function(taskInfo) {
  console.log(`完成任务: ${taskInfo}`)
})
pubsub.subscribe('protectTask', function(taskInfo) {
  console.log(`完成任务: ${taskInfo}`)
})

pubsub.publish('killTask', '暗杀!')
pubsub.publish('protectTask', '保护!')

// 控制台输出:
// 中介发布任务: 暗杀!
// 完成任务: 暗杀!
// 中介发布任务: 保护!
// 完成任务: 保护!
```

### Math对象
```js
Math.floor() // 向下取整
Math.ceil()  // 向上取整
Math.round() // 四舍五入
Math.trunc()   // 去掉小数
```

### 数组乱序
```js
const arr = [1, 2, 3, 4, 5]
const shuffle = arr => arr.sort(() => Math.random() - 0.5)
```

### 判断数据类型
```js
Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
```

### bind
```js
const module = {
  val: 2233,
  getVal() {
    return this.val
  }
}

const getVal = module.getVal
console.log(getVal()) // undefined

const bindVal = getVal.bind(module)
console.log(bindVal()) // 2233
```

### 大小写互换
```js
const str = 'HeLl0wOrLd'
const newStr = str.replace(/([a-z]*)([A-Z]*)/g, (_, s1, s2) => {
  return `${s1.toUpperCase()}${s2.toLowerCase()}`
})
console.log(newStr) // hElL0WoRlD
```

### 保留三位小数(小数为0则不保留)
```js
Math.round(float * 1000) / 1000
```

### 三元表达式执行
```js
const a = () => 'a'
const b = () => 'b'
let isA = true;
(isA ? a : b)() // a
```

### 低频方法
```js
const str = 'hello '
str.repeat(3) // hello hello hello

const str = 'goodbye'
str.startsWith('good') // true
str.startsWith('bye', 4) // true
str.endsWith('bye') // true
```

### 删除dom元素的另类思路
```js
// dom结构为ul>li>content+<button class="delete">删除</button>
// method1
const delBtn = document.querySelectorAll('.delete');
[...delBtn].forEach(btn => {
  btn.addEventListener('click', e => {
    const li = e.target.parentElement
    li.parentElement.removeChild(li)
  })
})
// method2 => 利用冒泡
const ulElem = document.querySelector('ul')
ulElem.addEventListener('click', e => {
  if(e.target.getAttribute('class') === 'delete') {
    const li = e.target.parentElement
    ulElem.removeChild(li)
  }
})
```

### document.form
```js
// 获取id为user-form的form表单
console.log(document.forms['user-form'])
```

### createElement&踩坑
```js
[...document.querySelectorAll('li')].forEach(li => {
  // 如果把这个写在循环外面,只有最后li会添加span元素
  const span = document.createElement('span')
  li.appendChild(span)
})
```

### classList操作
```js
const btn = document.querySelector('btn')
btn.classList.add('remove')
btn.classList.remove('remove')
btn.classList.toggle('remove')
btn.classList.replace('remove','add')
```

### dataset
```js
// <div id="user" data-id="1234567890" data-date-of-birth>John Doe</div>
const user = document.querySelector('#user')
console.log(user.dataset.id)
console.log(user.dataset.dataOfBirth)
```

### window.onload与DOMContentLoaded
```js
// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('内容加载完毕')
})

window.onload = () => {
  console.log('内容,样式等全部完毕')
}
```

### 颜色随机
```js
el.style.color = `#${Math.random().toString().slice(2,8)}`
```

### 类数组转数组
```js
Array.prototype.slice.call(arrayLike)
Array.prototype.splice.call(arrayLike, 0)
Array.prototype.concat.apply([], arrayLike)
Array.from(arrayLike)
```

### Reflect
```js
// apply
const add = function (num1, num2) { return num1 + num2; }
console.log(Reflect.apply(add, undefined, [1, 2]))

// get
const obj = {
  name: 'zs'
}
console.log(Reflect.get(obj, 'name'))

// has
console.log(Reflect.has(obj, 'name'))

// ownKeys
console.log(Reflect.ownKeys(obj)) // ['name']

// set
Reflect.set(obj, 'name', 'ls')
```

## NodeJs
### 使用es模块
```bash
# 方式1:package.json修改type为module
# 方式2:文件后缀改为.mjs
```

## NPM

### normalize.css
{% tip success %}
  抹除浏览器样式差异
{% endtip %}

### postcss-px-to-viewport
{% tip success %}
  pc/app分辨率适配方案
{% endtip %}

### turf
{% tip success %}
  可用于判断点位是否在区域内(地图推荐使用)
{% endtip %}

### fullpage.js
{% tip success %}
  全屏滚动
{% endtip %}

## nginx

### 设置默认跳转https
```nginx
server {
  if ($scheme = http ) {return 301 https://$host$request_uri;}
}
```

### 代理
```nginx
server {
  listen 120;
  server_name localhost;

  location / {
    proxy_pass http://localhost:5000/;
  }

  location /qq {
    rewrite /qq/(.*) /$1  break;
    proxy_pass https://api.qq.jsososo.com/;
  }
}
```

## vim
### 常用命令
```bash
# 文本输入
$ i
# 保存文件并退出
$ wq
# 不保存强制退出
$ q!
# 撤销上一步操作
$ u
# 删除一行
$ dd
# 光标跳行首
$ gg
# 删除光标后全部(配合gg可实现全部删除)
$ dG
# 跳转指定行(n为行数)
$ :n
```

## 其他
### win不支持yarn
```bash
yarn : 无法加载文件 C:\Users\Administrator\AppData\Roaming\npm\yarn.ps1
## step1 管理员身份运行powershell
## step2 选择Y
$ set-ExecutionPolicy RemoteSigned
## step3 get-ExecutionPolicy结果为RemoteSigned则操作成功
```