---
title: Typescript初识
cover: 'https://cdn.nlark.com/yuque/0/2022/png/1080353/1648396449130-2d4ef980-857e-4a6d-a538-da48d483ecba.png?x-oss-process=image%2Fresize%2Ch_280'
background: url(https://cdn.nlark.com/yuque/0/2022/png/1080353/1648396449130-2d4ef980-857e-4a6d-a538-da48d483ecba.png?x-oss-process=image%2Fresize%2Ch_280)
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