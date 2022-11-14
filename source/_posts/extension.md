---
title: 来写款心仪的chrome插件吧💖
cover: 'https://npm.elemecdn.com/picture-bed@1.0.8//cover/bg-05.jpg'
background: url(https://npm.elemecdn.com/picture-bed@1.0.8//cover/bg-05.jpg)
tags: extension
comments: true
date: 2022-11-14 17:51:16
updated: 2022-11-14 17:51:16
---

{% tip info %}
  不要觉得插件很难,它上手真的很简单🤣
{% endtip %}

## 目录结构
```txt
|- project/
   |- manifest.json
   |- scripts/
      |- content.js
   |- images/
      |- icon-16.png
      |- icon-32.png
      |- icon-48.png
      |- icon-128.png
```

### manifest.json
```json
{
  "manifest_version": 3,
  "name": "狗屁CSDN",
  "version": "1.0",
  "description": "Add the reading time to Chrome Extension documentation articles",
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  "content_scripts": [
    {
      "js": ["scripts/content.js"],
      // 只有matches匹配的网站插件才可用
      "matches": [
        "https://blog.csdn.net/*"
      ]
    }
  ]
}
```

### 脚本编写
{% tip info %}
  有时候搜索出来的资源是csdn,广告又多还无法复制,所以正好拿这个毒瘤网站开刀,欢迎试用,最好使用自己的图床😀
{% endtip %}

#### csdn去广告/复制/背景
```js
// 引入css
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://npm.elemecdn.com/picture-bed@1.0.9/css/scrollbar.css'
document.head.appendChild(link)

// 解决csdn无法复制问题
const views = document.querySelector('#content_views')
views && views.removeAttribute('id')

// 解决csdn的登录后复制显示
;[...document.querySelectorAll('.hljs-button')].forEach(
  item => item.setAttribute('style', 'opacity: 0')
)

// 去除顶部栏
const toolbarTop = document.querySelector('#csdn-toolbar')
toolbarTop && toolbarTop.parentNode.removeChild(toolbarTop)

// 隐藏侧边栏
const leftAside = document.querySelector('.blog_container_aside')
leftAside && leftAside.parentNode.removeChild(leftAside)
const rightAside = document.querySelector('#rightAside')
rightAside && rightAside.parentNode.removeChild(rightAside)

// 中间适配
const mainBox = document.querySelector('#mainBox')
const main = document.querySelector('#mainBox main')
mainBox.setAttribute('style', 'width: 100%;display: flex;justify-content: center')
main.setAttribute('style', 'width: 90vw !important;opacity: .9;')

// 去除右侧通知
const toolbar = document.querySelector('.csdn-side-toolbar')
toolbar && toolbar.parentNode.removeChild(toolbar)

// 更换背景图片
document.body.setAttribute(
  'style',
  `background-image: url('https://npm.elemecdn.com/picture-bed@1.0.8/cover/bg-06.jpg')
  !important;background-attachment:fixed;background-size:cover;`
)

// 去除所有底部信息
let child = main.lastElementChild
while(child && main.children.length > 2) {
  main.removeChild(child)
  child = main.lastElementChild
}
```

#### chrome加载插件
{% tip info %}
  chrome制作的crx无法使用,因为没上架chrome store,有其它方式使用crx的可以评论下
{% endtip %}

```txt
chrome右上角 -> mote tools -> extension -> load unpacked -> 加载插件项目文件夹即可
```

#### 效果展示

<div style="display:flex;justify-content:flex-start;">
<img src="https://npm.elemecdn.com/picture-bed@latest/doc/extension/1.jpg" />
</div>

---
- [csdn插件源码](https://github.com/sineava/sineava/tree/vanilla/extensions/shit-csdn)
