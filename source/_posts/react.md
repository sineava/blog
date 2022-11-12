---
title: 重读react
cover: 'https://npm.elemecdn.com/picture-bed@latest//cover/bg-17.jpg'
background: url(https://npm.elemecdn.com/picture-bed@latest/cover/bg-17.jpg)
tags: react
comments: true
date: 2022-10-16 10:13:16
updated: 2022-10-25 10:05:16
---

### 基础
#### [react生命周期](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
![](https://npm.elemecdn.com/picture-bed@latest//cover/20221016232406.png)

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

#### 返回多dom
```jsx
class Els extends Component {
  // 不需要用额外的元素包裹列表元素！
  render() {
    // 不要忘记设置 key :)
    return [
      <li>a</li>,
      <li>b</li>,
      <li>c</li>
    ]
  }
}
```

#### 路由
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

<Router>
  <Routes>
    <Route path="/" element={<div>/</div>} />
    <Route path="/home" element={<div>/home</div>} />
  </Routes>
</Router>
```

#### 错误边界
> {% bubble 错误边界,class组件中定义了static getDerivedStateFromError()或componentDidCatch()这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界 %}无法捕获如下场景:
> - 事件处理
> - 异步代码
> - 服务端渲染
> - 自身抛出来的错误(非子组件)

#### 动态class
```html
<!-- 写法1 -->
<i className={flag && 'active'} />
<!-- 写法2 -->
<i className={flag ? 'active' : null} />
<!-- 写法3 -->
<i className={['check-radio', flag ? 'active' : null].join(' ')}/>
<!-- 写法4 -->
<i className={`check-radio ${flag ? 'active' : null}`} />
```

#### StrictMode作用
- 识别不安全的生命周期
- 使用过时字符串 ref API 的警告
- 使用废弃的 findDOMNode 方法的警告
- 检测意外的副作用
- 检测过时的 context API
- 确保可复用的状态

### Hook Api
#### 自定义Hook
```tsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width
}

// 引用
const width = useWindowWidth()
```

#### Hook使用规则
- {% bubble 只能在函数最外层调用 Hook,不要在循环、条件判断或者子函数中调用 %}
- {% bubble 只能在 React 的函数组件中调用 Hook,自定义Hook除外 %}

{% youtube dpw9EHDh2bM %}

---
{% referfrom '1','react官方文档','https://reactjs.org' %}
{% referfrom '2','babel编译器','https://babeljs.io/repl' %}