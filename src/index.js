// 补充低版本浏览器缺失的函数
import "@babel/polyfill";

// commonJS 模块引入规范
// CMD
// AMD
// webpack 模块打包工具
// import avatar from './huahua.JPG';
// import createAvator from './createAvator';
// import './index.scss';

// import './style.css';
// HMR
// import counter from './counter.js';
// import number from './number.js';

// counter();
// number();


// // 如果开启了hmr功能
// if(module.hot) {
//     // 如果nubber发生了变化，就执行后面的函数
//     module.hot.accept('./number', () => {
//         document.body.removeChild(document.getElementById('number'))
//         number();
//     })
// }


// createAvator();
// const img = new Image();
// img.src = avatar;
// img.classList.add(style.avator);

// const root =document.getElementById('root');
// root.append(img);
// const root = document.getElementById('root');

// root.innerHTML='<div class="iconfont icon-dingdan">abc</div>'

// var btn = document.createElement('button');
// btn.innerHTML = '新增';
// document.body.appendChild(btn);
// btn.onclick = function() {
//     var div = document.createElement('div');
//     div.innerHTML = 'item';
//     document.body.appendChild(div);
// }


const arr = [
    new Promise(() => {}),
    new Promise(() => {}),
]

arr.map(item => {
    console.log(item);
})