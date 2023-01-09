---
title: Typescript初识
cover: 'https://npm.elemecdn.com/picture-bed@1.0.8/cover/bg-07.jpg'
background: url(https://npm.elemecdn.com/picture-bed@1.0.8/cover/bg-07.jpg)
tags: typescript
date: 2022-08-24 15:53:16
updated: 2023-01-09 14:27:30
---

## 基础
### 编译文件
```bash
$ npx tsc tar.ts -w
$ npx tsc --init
```

## 基础类型

### 数组
```typescript
// m1
const list: number[] = [1, 2, 3]
// m2 数组泛型
const list: Array<number> = [1, 2, 3]
```

### 元组
```typescript
let x: [string, number] = ['hello', 0]
```

### 枚举
```typescript
enum Color {Red, Green, Blue}
const color: Color = Color.Red
```

### any
{% note info flat %}
不要过多使用any
{% endnote %}
```typescript
let notSure: any = 4
notSure = 'any类型'
```

### never
{% note info flat %}
表示的是那些永不存在的值的类型,返回never的函数必须存在无法达到的终点
{% endnote %}

### 类型断言
{% note info flat %}
没有运行时的影响，只是在编译阶段起作用,有点像java的类型转换
{% endnote %}
```typescript
const someValue: any = 'this is a string'
const len: number = (someValue as string).length
```

## 变量声明

### 对象操作
```typescript
interface User {
  name?: string
  age: number
}

const { name: aliasName = 'no name', age: aliasAge }: User = { age: 20 }
console.log(aliasName) // no name
```

## 进阶
### 泛型
```typescript
// extends作用:实参必须传入对象
// <T extends { name: string }>指定具体传入属性,指定的属性必须存在
const addUUID = <T extends object>(obj:T) => {
  let uuid = ~~(Math.random() * 100)
  return { ...obj,uuid }
}

let doc = addUUID({name:'mlo',age:10})
console.log(doc.name) // 如果不使用泛型,属性推导会报错

// example2
interface Resource<T> {
  uuid: number
  resourceName: string
  data: T
}

const r1: Resource<object> = {
  uuid: 111,
  resourceName: 'r1',
  data: { id: 1,content: 'vue' }
}
const r2: Resource<string[]> = {
  uuid: 112,
  resourceName: 'r2',
  data: ['vue','react']
}
console.log(r1,r2)

// 出入参
function map<I, O>(arr: I[], fn: (arg: I) => O): O[] {
  return arr.map(fn)
}

map(['1','2','3'], (n) => parseInt(n))
```

### 接口
```typescript
// file:HasFormatter.ts
export interface HasFormatter {
  format(): string
}
// file:Handle.ts
import { HasFormatter } from '../interface/HasFormatter.js';
export class Handle implements HasFormatter {
  constructor(
    readonly client:string,
    private details:string,
    public amount:number
  ) {}
  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`
  }
}
// file:app.ts
const handle = new Handle('mary','rent',1000)
console.log(handle.format())
```

### 枚举
```typescript
enum HandleType { ADD,DELETE,UPDATE,SELECT }
interface handle {
  type: HandleType,
  data: string[]
}
```

### 类型签名
```typescript
type Msg = {
  date: Date
  (msg: string): string
}

function fn(msg: string) {
  return msg
}
fn.date = new Date()

const printMsg = (fn: Msg) => `${fn.date}: ${fn('qq mail')}`
printMsg(fn) // Wed Mar 02 2022 21:37:34 GMT+0800 (中国标准时间): qq mail
```

### tsconfig.json重要字段
```json
{
  "files": ["a.ts", "b.ts"],               // 需要编译的文件名
  "include": ["src/**/*"],                 // 需要编译的
  "exclue": ["node_modules"],              // 排除编译
  "compilerOptions": {
  
    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}
```

---
## 资源参考
- [typescript文档](https://www.tslang.cn/docs)