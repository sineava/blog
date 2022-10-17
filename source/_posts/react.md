---
title: 重读react
cover: 'https://cdn.jsdelivr.net/gh/sineava/picture-bed//cover/bg-17.jpg'
background: url(https://cdn.jsdelivr.net/gh/sineava/picture-bed/cover/bg-17.jpg)
tags: react
comments: true
date: 2022-10-16 10:13:16
updated: 2022-10-16 10:13:16
---

### 基础
#### [react生命周期](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
![](https://cdn.jsdelivr.net/gh/sineava/picture-bed//cover/20221016232406.png)

#### JSX表示对象
```jsx
// jsx写法
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
)
// 对象写法,babel会转换jsx为该种写法
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)
```

#### 将元素渲染为DOM
```tsx
ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(<h1>Hello, world</h1>)
```

#### State&Props
> 所有React组件都必须像{% label 纯函数 green %}一样保护它们的 props 不被更改
> state允许React组件随用户操作、网络响应或者其他变化而动态更改输出内容(state是私有的,并且完全受控于当前组件)

#### bind传参
```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// 通过 bind 的方式,事件对象以及更多的参数将会被隐式的进行传递
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```