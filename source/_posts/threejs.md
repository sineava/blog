---
title: threejs入门
cover: 'https://npm.elemecdn.com/picture-bed@1.0.7/cover/bg-14.jpg'
background: url(https://npm.elemecdn.com/picture-bed@1.0.7/cover/bg-14.jpg)
tags: threejs
comments: true
date: 2022-10-07 15:53:16
updated: 2022-10-07 15:53:16
---

## 基础元素
- 场景
- 相机
- 渲染器
- 灯光
- 物体

## 场景创建
```js
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
```

## 坐标
### 坐标系统
![](https://testingcf.jsdelivr.net/gh/sineava/picture-bed//cover/20221116111035.png)

### 坐标辅助
```js
// 坐标轴辅助
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// 坐标栅格辅助
const gridHelper = new THREE.GridHelper(30)
scene.add(gridHelper)
```

## 相机
### 正交相机与透视相机
- OrthographicCamera(正交): 物体和模型都按照它固有的尺寸和精度显示
- PerspectiveCamera(透视): 模拟人眼视角,效果近大远小 

### 轨道控制器
```js
const orbit = new THREE.OrbitControls(camera, renderer.domElement)
orbit.update()
```

## 光源
- AmbientLight: 环境光,该光源的颜色会叠加至场景现有物体的颜色上(无法产生阴影)
- PointLight: 点光源,从空间内一点向所有方向发射光线
- SpotLight: 类似手电光源
- DirectionalLight: 类似太阳光,发射光线可以看作平行
- HemisphereLight: 通过模拟反光面和光线微弱的天空来创建室外光线(无法产生阴影)
- LensFlare: (非光源),为镜头添加光晕

```js
// 1. 渲染器允许渲染阴影
render.shadowMap.enabled = true

// 2. 物体阴影(不要使用无法产生阴影的材质)
cube.castShadow = true
sphere.castShadow = true
plane.receiveShadow = true

// 3. 光源阴影(不要使用无法产生阴影的光源)
spotLight.castShadow = true
```

## 物体加载
### 实体
```js
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00FFFF })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
```

### 模型
```js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const loader = new GLTFLoader()
loader.load('/model.glb', glb => {
  sword = glb.scene
  sword.scale.set(3.4, 3.4, 3.4)
  scene.add(sword)
})
```

![](https://npm.elemecdn.com/picture-bed@1.0.7//cover/20221007005907.png)

### 材质
- MeshBasicMaterial: 简单着色（平面或线框）方式来绘制几何体的材质,不受光照影响(无法产生阴影)
- MeshStandardMaterial: 基于物理的标准材质,需要光源
- MeshPhongMaterial: 具有镜面高光的光泽表面的材质
- MeshLambertMaterial: 非光泽表面的材质，没有镜面高光

## 骨骼动画
### 动画制作/绑定
{% youtube pxmuUtduLAk %}

### 动画使用
```js
let mixer

const loader = new GLTFLoader()
loader.load(girl.href, glb => {
  const model = glb.scene
  scene.add(model)
  mixer = new THREE.AnimationMixer(model)
  const clips = glb.animations
  // 播放全部动画
  // clips.forEach(clip => {
  //   const acion = mixer.clipAction(clip)
  //   acion.play()
  // })
  // 'dance': 为动画名,具体骨骼动画制作可参考下面视频
  const clip = THREE.AnimationClip.findByName(clips, 'dance')
  const action = mixer.clipAction(clip)
  action.play()
})

const clock = new THREE.Clock()
const animate = () => {
  mixer && mixer.update(clock.getDelta())
  renderer.render( scene, camera )
  requestAnimationFrame( animate )
}
```

## resize响应
```js
window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
```

## 效果展示
[codepen集合](https://codepen.io/tv/BNmOPy)

---
{% referfrom '1','3d模型文件下载:sketchfab','https://sketchfab.com/' %}
{% referfrom '2','threejs官方文档','https://threejs.org/docs/#manual/zh' %}
{% referfrom '3','threejs教程','http://www.yanhuangxueyuan.com/Three.js/' %}
{% referfrom '4','骨骼动画资源','https://www.mixamo.com/' %}
