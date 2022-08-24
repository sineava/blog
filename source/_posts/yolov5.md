---
title: yolov5目标检测
cover: 'https://cdn.jsdelivr.net/npm/file-assets@1.0.3/img/bg-02.jpg'
background: url(https://cdn.jsdelivr.net/npm/file-assets@1.0.3/img/bg-02.jpg)
tags: yolo
comments: true
---

## 安装
### 安装所需库
```bash
$ pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

## 训练数据集
### 模型训练
```bash
# 注意img size epochs不要太小,否则模型训练出来有问题
$ python train.py --img 416 --batch 16 --epochs 150 --data data.yaml --weights yolov5s.pt
```

### 模型预测
```bash
# best.pt由模型训练生成
$ python detect.py --source /data/images --weight best.pt --conf 0.4
```