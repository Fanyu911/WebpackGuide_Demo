import _ from 'lodash';
import './style.css';
import icon from './my-img.png';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
  const element = document.createElement('div');

  // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const img = new Image();
  img.src = icon;

  element.appendChild(img);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
