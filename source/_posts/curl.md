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
# 保存网页源码(-o)/保存文件(-O不用指定文件名,将url最后部分作为文件名,-o需要指定)
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
```bash
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

## 文件上传
```bash
# type 指定mime filename指定服务端接收的文件名
$ curl -F "file=@avatar.png;type=image/png;filename=alias.png" http://127.0.0.1:1000/upload
```

## 头部信息
```bash
$ curl -H "Content-Type:application/json" http://127.0.0.1:1000/hello
```

## 带宽限制
```bash
# 限制200k,模拟慢网速环境
$ curl --limit-rate 200k https://google.com
```

---

[curl的用法指南](https://www.ruanyifeng.com/blog/2019/09/curl-reference.html)