---
title: 前端八股文
cover: 'https://npm.elemecdn.com/picture-bed@1.0.7//cover/bg-15.jpg'
background: url(https://npm.elemecdn.com/picture-bed@1.0.7/cover/bg-15.jpg)
tags: interview
comments: true
date: 2022-10-09 15:11:07
updated: 2022-10-09 15:11:07
---
{% note green 'fas fa-fan' modern %}
前端常见面试题整理
{% endnote %}

## HTML
### 语义化标签
```html
<header /> 头部
<nav /> 导航栏
<aside /> 侧边栏
<section /> 区块
<main /> 主要区域
<article /> 主要内容
<footer /> 底部
```

### 谈一谈css盒模型
- {% bubble 标准盒模型(content-box),width=content %}
- {% bubble IE盒模型(border-box),width=content+padding+border %}

![](https://npm.elemecdn.com/picture-bed@1.0.7//cover/interview-1.png)

### 常见的meta标签
```html
<!-- 描述文档编码 -->
<meta charset="utf-8" />
<!-- 关键词 -->
<meta name="keywords" content="关键词" />
<!-- 页面描述 -->
<meta name="description" content="页面描述" />
<!-- 页面重定向与刷新 -->
<meta http-equiv="refresh" content="0;url=" />
<!-- 视口(用户网页的可视区域) -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<!-- 
  viewport content参数
  1. width: 宽度
  2. height: 高度
  3. initial-scale: 初始缩放比例
  4. maximum-scale: 最大缩放比例
  5. minimum-scale: 最小缩放比例
  6. user-scalable: 是否允许用户缩放(yes/no)
-->
<!-- 搜索引擎索引方式 -->
<meta name="robots" content="index,follow" />
```

## CSS
### 谈谈对BFC的理解
> 块格式化上下文(BFC)类似一个"结界",如果一个DOM元素具有BFC,那么它内部的子元素不会影响外面的元素,外面的元素也不会影响到其内部元素,常用于:
1. 解决浮动子元素导致父元素高度坍塌
2. 解决边距重叠问题
3. 解决文字环绕问题

> 形成条件:
1. html 根元素
2. float的值不是none
3. position 的值不是static或者relative
4. display的值是inline-block,table-cell,table-caption,flex,inline-flex
5. overflow的值不是visible

## JavaScript
### 介绍 js 的基本数据类型
> js 一共有六种基本数据类型,分别是 {% label Undefined green %}、{% label Null green %}、{% label Boolean green %}、{% label Number green %}、{% label String green %},还有在 ES6 中新增的{% label Symbol green %}和 ES10 中新增的 {% label BigInt green %} 类型。Symbol 代表创建后独一无二且不可变的数据类型,它的出现我认为主要是为了解决可能出现的全局变量冲突的问题。BigInt 是一种数字类型的数据,它可以表示任意精度格式的整数,使用 BigInt 可以安全地存储和操作大整数,即使这个数已经超出了 Number 能够表示的安全整数范围。

### JavaScript 有几种类型的值
> js 可以分为两种类型的值,一种是{% label 基本数据类型 green %},一种是{% label 复杂数据类型 green %}。基本数据类型….(参考{% label 1.1 blue %}),复杂数据类型指的是 Object 类型,所有其他的如 Array、Date 等数据类型都可以理解为 Object 类型的子类。两种类型间的主要区别是它们的存储位置不同,基本数据类型的值直接保存在栈中,而复杂数据类型的值保存在堆中,通过使用在栈中保存对应的指针来获取堆中的值。

### 什么是堆？什么是栈
> 堆和栈的概念存在于数据结构中和操作系统内存中。在数据结构中,栈中数据的存取方式为先进后出。而堆是一个优先队列,是按优先级来进行排序的,优先级可以按照大小来规定。完全二叉树是堆的一种实现方式。在操作系统中,内存被分为栈区和堆区。栈区内存由编译器自动分配释放,存放函数的参数值,局部变量的值等。其操作方式类似于数据结构中的栈。堆区内存一般由程序员分配释放,若程序员不释放,程序结束时可能由垃圾回收机制回收。

### 内部属性 [[Class]] 是什么
```js
// 所有 typeof 返回值为 "object" 的对象（如数组）都包含一个内部属性 [[Class]]（我们可以把它
// 看作一个内部的分类,而非传统的面向对象意义上的类）。这个属性无法直接访问,
// 一般通过 Object.prototype.toString(..) 来查看。例如：

Object.prototype.toString.call( [1,2,3] );
// "[object Array]"

Object.prototype.toString.call( /regex-literal/i );
// "[object RegExp]"

// 我们自己创建的类就不会有这份特殊待遇,因为 toString() 找不到 toStringTag
// 属性时只好返回默认的 Object 标签
// 默认情况类的[[Class]]返回[object Object]
class Class1 {}
Object.prototype.toString.call(new Class1()); // "[object Object]"
// 需要定制[[Class]]
class Class2 {
  get [Symbol.toStringTag]() {
    return "Class2";
  }
}
Object.prototype.toString.call(new Class2()); // "[object Class2]"
```

### 介绍 js 有哪些内置对象
> js 中的内置对象主要指的是在程序执行前存在全局作用域里的由 js 定义的一些全局值属性、函数和用来实例化其他对象的构造函数对象。一般我们经常用到的如全局变量值 NaN、undefined,全局函数如 parseInt()、parseFloat() 用来实例化对象的构造函数如 Date、Object 等,还有提供数学计算的单体内置对象如 Math 对象。

### undefined 与 undeclared 的区别
> 已在作用域中声明但还没有赋值的变量,是 undefined 的。相反,还没有在作用域中声明过的变量,是 undeclared 的。对于 undeclared 变量的引用,浏览器会报引用错误,如 ReferenceError: b is not defined 。但是我们可以使用 typeof 的安全防范机制来避免报错,因为对于 undeclared（或者 not defined ）变量,typeof 会返回 “undefined“。

### null 和 undefined 的区别
> 首先 Undefined 和 Null 都是基本数据类型,这两个基本数据类型分别都只有一个值,就是 undefined 和 null。
(1) undefined 代表的含义是{% label 未定义 green %},null 代表的含义是{% label 空对象 green %}。一般变量声明了但还没有定义的时候会返回 undefined,null主要用于赋值给一些可能会返回对象的变量,作为初始化。
(2) undefined 在 js 中不是一个保留字,这意味着我们可以使用 undefined 来作为一个变量名,这样的做法是非常危险的,它会影响我们对 undefined 值的判断。但是我们可以通过一些方法获得安全的 undefined 值,比如说 void 0。
(3) 当我们对两种类型使用 typeof 进行判断的时候,Null 类型化会返回 “object”,这是一个历史遗留的问题。当我们使用双等号对两种类型的值进行比较时会返回 true,使用三个等号时会返回 false。

### js 获取原型的方法
- p.\_\_proto\_\_
- p.constructor.prototype
- Object.getPrototypeOf(p)

### isNaN 和 Number.isNaN 函数的区别
> 函数 isNaN 接收参数后,会尝试将这个参数转换为数值,任何不能被转换为数值的的值都会返回 true,因此非数字值传入也会返回 true ,会影响 NaN 的判断。
> 函数 Number.isNaN 会首先判断传入参数是否为数字,如果是数字再继续判断是否为 NaN ,这种方法对于 NaN 的判断更为准确。

### 如何将浮点数点左边的数每三位添加一个逗号
```js
// 方法一
function format(number) {
  return number && number.replace(/(?!^)(?=(\d{3})+\.)/g, ",");
}
// 方法二
function format1(number) {
  return Intl.NumberFormat().format(number)
}
// 方法三
function format2(number) {
  return number.toLocaleString('en')
}
```

### 什么是闭包，为什么要用它？
> 闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。
> 闭包有两个常用的用途。
> 1)使我们在函数外部能够访问到函数内部的变量。通过使用闭包，我们可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。
> 2)使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。

### 哪些操作可能会造成内存泄漏？
- 被遗忘的计时器或回调函数
- 意外的全局变量
- 脱离 DOM 的引用
- 闭包

### 说下防抖节流的区别
> 函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
> 函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。

### stopPropagation与preventDefault的区别
- stopPropagation: 用于阻止事件的冒泡和捕获
- preventDefault: 用于阻止{% bubble 浏览器默认行为, 1. 点击链接会进行跳转 2.右键会呼出浏览器右键菜单 3.填写表单时按回车会自动提交到服务器等 %}

---
{% referfrom '1.','HTML表单input类型','https://www.w3schools.com/html/html_form_input_types.asp' %}
{% referfrom '2.','表单拖放api','https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API' %}
{% referfrom '3.','置换元素与非置换元素','https://blog.doyoe.com/2015/03/15/css/置换和非置换元素/' %}
{% referfrom '4.','Web 性能','https://developer.mozilla.org/zh-CN/docs/Web/Performance' %}
{% referfrom '5.','有趣的前端api-博客','https://denzel.netlify.app/' %}
{% referfrom '6.','Javascript Guidebook','https://tsejx.github.io/javascript-guidebook/' %}
