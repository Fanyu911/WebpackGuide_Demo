import _ from 'lodash';
import printFun from './print.js';
function component() {
  const element = document.createElement('div');

  // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const btn = document.createElement('button');
  btn.innerHTML = 'print';
  btn.onclick = printFun;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
