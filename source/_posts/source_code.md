---
title: 源码调试
cover: 'https://npm.elemecdn.com/picture-bed@latest/cover/bg-18.jpg'
background: url(https://npm.elemecdn.com/picture-bed@latest/cover/bg-18.jpg)
tags: react
comments: true
date: 2023-01-05 16:30:16
updated: 2023-01-05 16:30:16
---

## React.js
### 准备工作
- clone源码并install
```bash
$ git clone https://github.com/facebook/react.git
```

- 修改scripts/rollup/build.js
```js
return {
  file: outputPath,
  format,
  globals,
  freeze: !isProduction,
  interop: false,
  name: globalName,
  sourcemap: true, // 开启sourcemap,改为true
  esModule: false,
};

// 注释该文件352-356,370-412(4个插件)

// 开启watch监听源码变化
const isWatchMode = argv.watch || true; // react默认未开启监听
```

- build
```
$ yarn build react/index,react/jsx,react-dom/index,scheduler --type=UMD_DEV
```

- vscode debugger
```json
// 修改launch.json>configurations>file属性
{
  "file": "xxx路径\\fixtures\\packaging\\babel-standalone\\dev.html"
}
```

- 修改js flow语法报错
```json
// 修改settings.json
"javascript.validate.enable": false
```

- 愉快的debugger,会自动定位到源码文件

## Vue.js
### 准备工作
- clone源码并install
```bash
$ git clone https://github.com/vuejs/core.git
$ pnpm install
```

- 运行dev
```bash
$ pnpm dev
```

- 进入packages/vue/examples(参考文件)