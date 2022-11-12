---
title: threejs入门
cover: 'https://testingcf.jsdelivr.net/gh/sineava/picture-bed/cover/bg-14.jpg'
background: url(https://testingcf.jsdelivr.net/gh/sineava/picture-bed/cover/bg-14.jpg)
tags: threejs
comments: true
date: 2022-10-07 15:53:16
updated: 2022-10-07 15:53:16
---

## 加载模型
```js
import { useEffect } from "react"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const App = () => {
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
    // 相机位置设置
    camera.position.set( 0, 2.8, 5 )
    scene.background = '#fff'
    const loader = new GLTFLoader()
    const renderer = new THREE.WebGLRenderer()
    let sword

    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    loader.load('/scene.glb', glb => {
      sword = glb.scene
      // 等比缩放,也可单独设置x,y,z
      sword.scale.set(3.4, 3.4, 3.4)
      scene.add(sword)
    })

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(2, 2, 5)
    scene.add(light)

    const animate = () => {
      renderer.render( scene, camera )
      requestAnimationFrame( animate )
      
      if (sword) {
        sword.rotation.y += 0.01;
      }
    }

    animate()
  }, [])
  return <div className="model"></div>
}

export default App
```

![](https://testingcf.jsdelivr.net/gh/sineava/picture-bed//cover/20221007005907.png)

---

[3d模型文件下载:sketchfab](https://sketchfab.com/)