import './Widget.scss';
import data from './data.json';

const widget = document.querySelector('.widget');
const lenta = widget.querySelector('.widget__content');

function getData() {
  return Promise.all(data).then(response => response);
}

function initWidget() {
  const values = getData();
  // const widget = document.querySelector('.widget');
  // const title = widget.querySelector('.widget__message-title');
  //
  // values.map((item) => {
  //   title.innerHTML = item.title;
  // });
  console.log(values, 'data');
}

widget.addEventListener('click', () => {
  lenta.classList.toggle('widget__content--visible');
});

document.addEventListener('DOMContentLoaded', initWidget());
