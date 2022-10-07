---
title: Typescript初识
cover: 'https://cdn.jsdelivr.net/gh/sineava/picture-bed/img/bg-07.jpg'
background: url(https://cdn.jsdelivr.net/gh/sineava/picture-bed/img/bg-07.jpg)
tags: typescript
date: 2022-08-24 15:53:16
updated: 2022-09-03 15:53:16
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

---
## 资源参考
- [typescript文档](https://www.tslang.cn/docs)