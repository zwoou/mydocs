# css

C 代表cascade，层叠

## 层叠

CSS的本质是声明规则

当声明冲突时，层叠会依据三种条件解决冲突：

1. 样式表的来源：样式是从哪里来的，包括你的样式和浏览器默认样式等。
2. 选择器优先级： 哪些选择器比另一些选择器更重要
3. 源码顺序：样式在样式表里的声明顺序

![1660115404](https://s2.loli.net/2022/08/10/tInfNTupXdye9hq.png)

### 样式表的来源

作者样式表和代理样式表和用户样式表
优先级顺序：作者样式表>用户样式表>代理样式表

1. 用户代理样式
2. !important声明

### 理解优先级

1. 行内样式
   用HTML属性style写的样式
2. 选择器优先级
    - 如果选择器的id数量够多，则它会胜出
    - 如果ID数量一致，那么拥有最多类的选择器胜出
    - 如果以上两次比较一致，那么拥有最多标签名的选择器胜出
    **说明：** 伪类选择器和属性选择器与一个类选择器优先级相同，通用选择器（*）和组合器（>,+,~）对优先级没有影响
3. 源码顺序
   较晚引入的声明优先级高
   1. 链接样式和源码顺序
   2. 层叠值

## 继承

跟文本相关的属性能被继承
还有一些属性也可以被继承，比如列表属性

## 特殊值

有两个特殊值可以赋给任意属性，用于控制层叠：inherit和initial

### 使用inherit关键字

### 使用initial关键字

## 简写属性

### 简写属性会默默覆盖其他样式

### 理解简写值的顺序

    1. 上、右、下、左
    2. 水平、垂直

## 相对单位

### em和rem

em是常见的相对长度单位，适合基于特定的字号排版

1. em同时用于字号和其他属性
2. 字体缩小的问题
3. 使用rem设置字号

提示：拿不准的时候，用rem设置字号，用px设置边框，用em设置其他大部分属性。

### 视口的相对单位

视口：浏览器窗口里网页可见部分的边框区域。他不包括浏览器的地址栏、工具栏、状态栏。

- vh: 视口高度的1/100
- vw：视口宽度的1/100
- vmin: 视口宽、高中较小的一方的1/100
- vmax: 视口宽、高中较大的一方的1/100

1. 使用vw定义字号
2. 使用calc()定义字号

### 无单位的数值和行高

### 自定义属性（即CSS变量）

## 盒模型

### 元素宽度的问题

### 元素高度的问题

### 负外边距

### 外边距折叠

### 容器内的元素间距

## 理解浮动

### 浮动的设计初衷

### 容器折叠和清除浮动

## 字体

font-family  

在实际开发中，比较美观的中文字体有微软雅黑、苹方，英文字体有Times NewRoman 、Arial和Verdana。

## box-sizing

box-sizing: content-box (默认)  高度和宽度只应用于元素的内容:

box-sizing: border-box  高度和宽度应用于元素的所有部分: 内容、内边距和边框:
