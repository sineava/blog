---
title: 前端随笔
cover: 'https://cdn.jsdelivr.net/gh/sineava/picture-bed@latest/cover/bg-11.jpg'
background: url(https://cdn.jsdelivr.net/gh/sineava/picture-bed@latest/cover/bg-11.jpg)
tags: 随笔
---

## HTML

### 根据设备宽度加载不同图片
```html
<picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>
```

### meta
```html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta http-equiv="refresh" content="30">
  <!-- 让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放(移动端需要设置) -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
</head>
```

### a标签图片下载
```html
<!-- 如果存在跨域问题需要解决跨域,否则会变为跳转 -->
<a href="/img/avatar.jpg" download>
<!-- 测试结果: 如果不是图片还是会跳转,如果想直接下载添加响应头Content-Disposition为attachment -->
<a href="/file.pdf">download file</a>
```

## DOM&BOM

### 节点克隆
```js
const container = document.querySelector('.container')
const cloneContainer = container.cloneNode(true) // true:深度克隆,不传只可能表层元素
```

### 页面刷新
```js
location.reload // 方法1
location.search = '' // 方法2
history.go(0) // 方法3
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

## JavaScript

### Math对象
```javascript
Math.floor() // 向下取整
Math.ceil()  // 向上取整
Math.round() // 四舍五入
Math.trunc()   // 去掉小数
```

### 三元表达式执行
```javascript
const a = () => 'a'
const b = () => 'b'
let isA = true;
(isA ? a : b)() // a
```

### 低频方法
```javascript
const str = 'hello '
str.repeat(3) // hello hello hello

const str = 'goodbye'
str.startsWith('good') // true
str.startsWith('bye', 4) // true
str.endsWith('bye') // true
```

### 删除dom元素的另类思路
```javascript
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
```javascript
// 获取id为user-form的form表单
console.log(document.forms['user-form'])
```

### createElement&踩坑
```javascript
[...document.querySelectorAll('li')].forEach(li => {
  // 如果把这个写在循环外面,只有最后li会添加span元素
  const span = document.createElement('span')
  li.appendChild(span)
})
```

### classList操作
```javascript
const btn = document.querySelector('btn')
btn.classList.add('remove')
btn.classList.remove('remove')
btn.classList.toggle('remove')
btn.classList.replace('remove','add')
```

### dataset
```javascript
// <div id="user" data-id="1234567890" data-date-of-birth>John Doe</div>
const user = document.querySelector('#user')
console.log(user.dataset.id)
console.log(user.dataset.dataOfBirth)
```

### window.onload与DOMContentLoaded
```javascript
// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
	console.log('内容加载完毕')
})

window.onload = () => {
  console.log('内容,样式等全部完毕')
}
```

### 颜色随机
```javascript
el.style.color = `#${Math.random().toString().slice(2,8)}`
```

## NodeJs
### 使用es模块
```bash
# 方式1:package.json修改type为module
# 方式2:文件后缀改为.mjs
```

## NPM

### postcss-px-to-viewport
{% tip success %}
  pc/app分辨率适配方案
{% endtip %}

### turf
{% tip success %}
  可用于判断点位是否在区域内(地图推荐使用)
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