import avatar from './huahua.JPG';
import style from './index.scss';


function createAvator() {
    const img = new Image();
    img.src = avatar;
    img.classList.add(style.avator);

    const root =document.getElementById('root');
    root.append(img);
}

export default createAvator;