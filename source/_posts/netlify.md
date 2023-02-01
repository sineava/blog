---
title: netlify 无服务函数与边缘函数
cover: 'https://npm.elemecdn.com/picture-bed@latest/cover/bg-03.jpg'
background: url(https://npm.elemecdn.com/picture-bed@latest/cover/bg-03.jpg)
tags: netlify
comments: true
date: 2023-02-01 13:45:17
updated: 2023-02-01 13:45:17
---

## serverless function
### 目录结构
```
|-src
  |- api.js
netlify.toml
package.json
```

### netlify.toml
```toml
[build]
  functions="functions"
```

### package.json
```json
{
  "scripts": {
    "start": "netlify-lambda serve src", // 运行服务器
    "build": "netlify-lambda build src"
  }
}
```

### api.js
```js
const express = require('express')
const serverless = require('serverless-http')

const router = express.Router()

router.get('/', (_, res) => res.json({ msg: 'hello serverless!' }))

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)
```

## edge functions
> SSE单向通道:仅支持服务端->客户端

### 目录结构
```
|-netlify
  |-edge-functions
    |-api.js
netlify.toml
package.json
```

### netlify.toml
```
[build]
edge_functions = "netlify/edge-functions/"
```

### api.js
```js
export default () => {
  const body = new ReadableStream({
    start(controller) {
      const msg = new TextEncoder().encode(
        `data: hello world\r\n\r\n`,
      )
      controller.enqueue(msg)
    }
  })
  return new Response(body, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Access-Control-Allow-Origin': '*'
    }
  })
}

export const config = { path: "/api" }
```

### index.html
```html
<script>
const sse = new EventSource('http://localhost:8888/test')

sse.onerror = function (event) {
  console.error(event)
}

sse.addEventListener('message', (event) => {
  console.log(event.data) // hello world,服务器主动推送
})
</script>
```

### package.json
```json
{
  "scripts": {
    "dev": "netlify dev"
  }
}
```