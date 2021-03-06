// const getComponent = async () => {
//     const { default: _ } = await import('lodash');
//     const div = document.createElement('div');
//     div.innerHTML = _.join(['dudu', 'ya'], '-')
//     return div;
// }
// // const getComponent = () => {
// //     return  import('lodash').then(({ default: _ }) => {
// //         const div = document.createElement('div');
// //         div.innerHTML = _.join(['dudu', 'ya'], '-')
// //         return div;
// //     })
// // }

// document.addEventListener('click', () => {
//     getComponent().then(e => document.body.appendChild(e))
// })
// import _ from 'lodash';
// console.log(_.join(['a', 'b', 'c'], '****'));

// // Tree shaking 只支持es模块的引入，底层是静态引入的方式
// 代码分割、和webpack无关
// webapck实现代码分两种方式
// 1、同步代码
//     optimization: {
//     splitChunks: {
//         chunks: 'all'
//     }
// },
// 异步代码分割
// 无需作任何配置，会自动代码分割
// function getComponent() {
//     return  import('lodash').then(({ default }) => {
//         return default;
//     })
// }

// import './style.css';
// import './style1.css';

// if('serviceWorker' in navigator) {
//     console.log('hahudud ya');
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('./service-worker.js')
//         .then(registeration => {
//             console.log('registeration');
//         }).catch(error => {
//             console.log('error');
//         })
//     })
// }

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './list';
import Home from './home';

export class App extends Component {
  componentDidMount() {
    // http://www.dell-lee.com
    axios.get('/react/api/header.json')
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('res', res);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/list" component={List} />
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
