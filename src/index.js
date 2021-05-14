// commonJS 模块引入规范
// CMD
// AMD
// webpack 模块打包工具
import avatar from './huahua.JPG';
import createAvator from './createAvator';
import style from './index.scss';


createAvator();
const img = new Image();
img.src = avatar;
img.classList.add(style.avator);

const root =document.getElementById('root');
root.append(img);