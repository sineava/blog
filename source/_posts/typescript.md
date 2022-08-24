---
title: Typescript初识
cover: 'https://cdn.jsdelivr.net/npm/file-assets@1.0.1/img/bg-01.jpg'
background: url(https://cdn.jsdelivr.net/npm/file-assets@1.0.1/img/bg-01.jpg)
---

## 基础类型

- 数组
```typescript
// m1
const list: number[] = [1, 2, 3]
// m2 数组泛型
const list: Array<number> = [1, 2, 3]
```

- 元组
```typescript
let x: [string, number] = ['hello', 0]
```

- 枚举
```typescript
enum Color {Red, Green, Blue}
const color: Color = Color.Red
```

- any
```typescript
let notSure: any = 4
notSure = 'any类型'
```