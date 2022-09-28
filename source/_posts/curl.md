---
title: curl资料整理
cover: 'https://cdn.jsdelivr.net/gh/sineava/picture-bed/cover/bg-13.jpg'
background: url(https://cdn.jsdelivr.net/gh/sineava/picture-bed/cover/bg-13.jpg)
tags: curl
---

## 查看网页源码
```bash
# 查看网页源码
$ curl baidu.com
# 保存网页源码(-o)
$ curl -o sources.html baidu.com
```

## 自动跳转
```bash
# 跳转指定网站(-L)
$ curl -L baidu.com
```

## 查看头部信息
```bash
$ curl -i baidu.com
```

## 发送请求
```
# GET请求
$ curl 127.0.0.1:1000/hello?name=zs
# POST请求(DELET等同样可通过-X指定)
$ curl -X POST -d 'username=admin&password=123' 127.0.0.1:1000/hello
```
```js
app.get('/hello', (req, res) => {
  console.log(req.query) // { name: 'zs' }
  res.json({ status: 200 })
})
```