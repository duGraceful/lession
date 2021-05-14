// commonJS 模块引入规范
// CMD
// AMD
// webpack 模块打包工具
// import Header from './header.js';
// import Sidebar from './sidebar.js';
// import Content from './content.js';

import avatar from './huahua.JPG';
import './index.scss';

const img = new Image();
img.src = avatar;
img.classList.add('avator');

const root =document.getElementById('root');
root.append(img);

// new Header();
// new Sidebar();
// new Content();