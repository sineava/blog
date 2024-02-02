---
title: 重读vue
cover: '/img/cover/bg-08.jpg'
background: url(/img/cover/bg-08.jpg)
date: 2022-06-09 15:53:16
updated: 2022-06-09 15:53:16
---
## 基础
### 风格指南
#### 结构风格
vue推荐: 先声明，后使用
```html
<script setup></script>
<template></template>
<style scoped></style>
```
#### 子组件命名
```html
<!-- 在单文件组件中,推荐为子组件使用PascalCase的标签名,以此来和原生的 HTML 元素作区分 -->
<!-- ✅: 推荐风格:PascalCase,文件名使用kebab-case风格button-counter.vue -->
<ButtonCounter />
<!-- ❎: 不推荐风格:kebab-case -->
<button-counter />
```
#### 方法命名
```html
<!-- ✅: 推荐风格:kebab-case -->
<MyComponent @some-event="callback" />
```
### cdn方式使用
```html
<!-- 模块化引入cdn js -->
<script type="module">
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
</script>

<!-- 导入映射表 -->
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>
<script type="module">
import { createApp } from 'vue'
</script>
```
### 全局处理
```js
// 全局错误处理
app.config.errorHandler = (err) => {}
// 全局组件注册(未使用也无法tree-shaking,会打包到js文件,不是大量使用不推荐)
app.component('Component', Component)
```
### 多实例挂载
```js
const app1 = createApp(...)
app1.mount('#app1')

const app2 = createApp(...)
app2.mount('#app2')
```
### 自定义全局暴露
vue内部沙盒化,只会暴露常用Math和Date等全局对象
```js
// 此时就可以在spa内部使用window变量
app.config.globalProperties.window = window
```
### 动态参数
值为null意为显式移除该绑定
```html
<a :[attributeName]="url" @[eventName]="fn">...</a>
```
### 响应语法糖
实验性质:不要混用也不要在生产环境使用💩
```js
let count = $ref(0) // 不用.value
```
### $event变量
```html
<!-- 使用特殊的 $event 变量 -->
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

<!-- 使用内联箭头函数 -->
<button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button>
```
### checkbox自定义真假值
```html
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no"
/>
```
### 动态组件
```html
<component :is="tabs[i]"></component>
```
## 进阶
### watch vs watchEffect
```js
import { watch, watchEffect } from 'vue'

// 指定追踪依赖变化
watch(key, async (newVal) => {
  newVal && (user.value = await (fetch(`https://jsonplaceholder.typicode.com/todos/${key.value}`).then(res => res.json())))
})

// watchEffect会自动追踪依赖属性变化
watchEffect(async () => {
  key.value && (user.value = await (fetch(`https://jsonplaceholder.typicode.com/todos/${key.value}`).then(res => res.json())))
})
```
### 插槽
```html
<!-- 具名&匿名插槽 -->
<Component>
  <template #name>具名插槽</template>
  <span v-slot="{message}">默认插槽 {{ message }}</span>
</Component>

<slot name="name"></slot>
<slot></slot>

<!-- 插槽解构,混用请使用显示的默认插槽#default -->
<Component v-slot="{message}" />
<Component>
  <template #header="{message}">
    {{ message }}
  </template>
</Component>
<slot message="插槽解构"></slot>
```
### 依赖注入
```js
import { provide, readonly } from 'vue'
provide(k, readonly('v')) // 使用readonly可避免被修改

import { inject } from 'vue'
const v = inject(k)
```
### 异步组件
```js
import { defineAsyncComponent } from 'vue'
const AsyncComp = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)
```
### 编译器宏
编译器宏在setup中不需要导入
1. defineExpose
2. defineEmits
3. defineProps
### defineCustomElement与shadow dom(原生)
```js
const CustomElement = defineCustomElement({
  props: {
    msg: String
  },
  template: `<div>{{ msg }}</div>`
})

customElements.define('mine-element', CustomElement)
// 此时html就可使用<mine-element msg="影子节点"></mine-element>
```
## ts与组合式api
### defineProps
```html
<script lang="ts" setup>
// 响应式解构(实验性质): 需要开启plugins: [vue({reactivityTransform: true})]
const { name, age = 20 } = defineProps<{
  name: string
  age?: number
}>()
</script>

<template>
  {{ name }} {{ age }}
</template>
```
