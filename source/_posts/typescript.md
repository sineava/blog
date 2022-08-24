---
title: Typescript初识
cover: 'https://cdn.jsdelivr.net/npm/file-assets@1.0.3/img/bg-01.jpg'
background: url(https://cdn.jsdelivr.net/npm/file-assets@1.0.3/img/bg-01.jpg)
---

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