# Framer-motion

将按照官方文档[[查看](https://www.framer.com/motion/)]，以最小示例去实现文档知识点。可直接本地运行或在对应的`CodeSoundbox`中查看演示

`CodeSoundbox`演示地址：https://codesandbox.io/p/github/cgfeel/framer-motion/main

> 提示：本仓库所有实例按照`NextJS`的`page`目录约定习惯，`pages`下目录名称对应访问的URL的`pathname`，请在演示后手动输入对应的`pathname`

## 开始

### 基本的动画-motion

- 目录：`/src/pages/start` [[查看](https://github.com/cgfeel/framer-motion/tree/main/src/pages/start)]

**划重点：** 一切从`<motion>`组件开始

### 状态更新-state

- 目录：`/src/pages/start-state-update` [[查看](https://github.com/cgfeel/framer-motion/tree/main/src/pages/start-state-update)]

**划重点：** 和`React`一样，可以通过`state`作为动画的`props`声明式的创建动画

### 手势支持-Gestures

还是最初的基本动画[[查看](#基本的动画-motion)]，给他添加手势支持

- 目录：`/src/pages/start-gestures` [[查看](https://github.com/cgfeel/framer-motion/tree/main/src/pages/start-gestures)]

**划重点：** 支持：hover（悬停），tap（点击），pan（平移），drag（拖动）

### 添加过渡-Transition

还是最初的基本动画[[查看](#基本的动画-motion)]，通过`transition`为它添加过渡

- 目录：`/src/pages/start-transition` [[查看](https://github.com/cgfeel/framer-motion/tree/main/src/pages/start-transition)]

### 添加关键帧-Keyframes

在上面`transition`过渡[[查看](#添加过渡-Transition)]基础上做一个进阶，添加关键帧

- 目录：`/src/pages/start-keyframes` [[查看](https://github.com/cgfeel/framer-motion/tree/main/src/pages/start-keyframes)]

**划重点：** 

- 将数组作为配置，可作为动画的关键帧，`motion`会依次执行设置动画
- 整个动画的关键帧将会平均间隔
- 添加`transition`可以为关键帧定时以及减缓程度
- 案例参数见代码注释

### 变体-Variants

变体是组件可用的预定义视觉状态，暂且可以用`CSS`的`@keyframes`来理解，它包含了`open`和`close`两个节点，通过在节点中添加`transition`实现动画

- 目录：`/src/pages/start-variants` [[查看](https://github.com/cgfeel/framer-motion/tree/main/src/pages/start-variants)]

**划重点：** 

- 变体允许在父级组件中设置prop`animate`，为整个子集设置动画
- 变体可应用于HTML元素或SVG，除了接受`transition`，还接受元素相关属性
- 变体接受一个函数作为节点，以便动态提供props
- 演示中`transition`属性可能有不明白，不要紧先跳过，后面会继续研究

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
