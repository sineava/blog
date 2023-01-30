---
title: 算法小抄
cover: 'https://npm.elemecdn.com/picture-bed@latest/cover/bg-22.jpg'
background: url(https://npm.elemecdn.com/picture-bed@latest/cover/bg-22.jpg)
tags: algorithm
comments: true
date: 2023-01-28 17:13:42
updated: 2023-01-28 17:13:42
---

## 排序算法
![排序](https://www.runoob.com/wp-content/uploads/2019/03/sort.png)
### 冒泡排序
```js
function fn(arr) {
  const len = arr.length
  for(let i = 0;i < len - 1;i++) {
    for(let j = 0;j < len - i - 1;j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log(arr) // [1~9]
}

fn([1,3,2,7,4,6,9,8,5])
```

### 选择排序
```js
function fn(arr) {
  const len = arr.length
  let minIdx, temp
  for(let i = 0;i < len - 1;i++) {
    minIdx = i
    for (let j = i + 1;j < len;j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIdx]
    arr[minIdx] = temp
  }
  console.log(arr)
}

fn([1,3,2,7,4,6,9,8,5])
```

## 递归算法
### 递归实现斐波那契数
> 斐波那契数：1,1,2,3,5,8,13,21,34,55,89,144,233,377,610..

```js
function fn(n) {
  if (n < 2) return n
  return fn(n-1) + fn(n-2)
}

fn(10) // 55
```