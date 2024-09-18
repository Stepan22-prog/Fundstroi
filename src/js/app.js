import BaseHelpers from './helpers/BaseHelpers.js';

BaseHelpers.checkWebpSupport();

//spoilers
import * as modules from './modules/modules';
modules.spollers();

//menu
modules.menuInit();

//popup

import PopupManager from './modules/PopupManager';
new PopupManager();

//validation
import './libs/jquery.maskedinput.min';
jQuery(function ($) {
  $("#phone").mask("+38 (999) 999-9999");
  $("#phone__call").mask("+38 (999) 999-9999");
  $("#phone__cart").mask("+38 (999) 999-9999");
});

//scroll
// const btn = document.querySelector('.to-top');
// document.addEventListener("scroll", () => {
//   if (scrollY > 500) {
//     btn.classList.add('to-top_active');
//   } else {
//     if (btn.classList.contains('to-top_active')) {
//       btn.classList.remove('to-top_active');
//     }
//   }
// });
// btn.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// })

//select
import './modules/select.js';

//catalog
const products = [[
  {
    img: './img/armature.jpg',
    title: 'Композитна арматура, діаметр 4мм',
  },
  {
    img: './img/armature.jpg',
    title: 'Композитна арматура, діаметр 6мм',
  },
  {
    img: './img/armature.jpg',
    title: 'Композитна арматура, діаметр 7мм',
  },
  {
    img: './img/armature.jpg',
    title: 'Композитна арматура, діаметр 8мм',
  },
  {
    img: './img/armature.jpg',
    title: 'Композитна арматура, діаметр 10мм',
  },
  {
    img: './img/armature.jpg',
    title: 'Композитна арматура, діаметр 12мм',
  },
  {
    img: './img/armature.jpg',
    title: 'Композитна арматура, діаметр 14мм',
  },
  {
    img: './img/armature.jpg',
    title: 'Композитна арматура, діаметр 16мм',
  },
  {
    img: './img/armature.jpg',
    title: 'Композитна арматура, діаметр 18мм',
  },
  {
    img: './img/armature.jpg',
    title: 'Композитна арматура, діаметр 20мм',
  },
], [
  {
    img: './img/mesh.jpg',
    title: 'Сітка композитна кладкова 2мм 50*50',
  },
  {
    img: './img/mesh.jpg',
    title: 'Сітка композитна кладкова 2мм 100*100',
  },
  {
    img: './img/mesh.jpg',
    title: 'Сітка композитна кладкова 3мм 50*50',
  },
  {
    img: './img/mesh.jpg',
    title: 'Сітка композитна кладкова 3мм 100*100',
  },
  {
    img: './img/mesh.jpg',
    title: 'Сітка композитна кладкова 4мм 50*50',
  },
  {
    img: './img/mesh.jpg',
    title: 'Сітка композитна кладкова 4мм 100*100',
  },
], [
  {
    img: './img/cement_400.jpg',
    title: 'Цемент М400 Універсальний 25кг',
  },
  {
    img: './img/cement_500.jpg',
    title: 'Цемент М500 Швидкий 25кг',
  },
]];

const catalogBody = document.querySelector('.tabs-body');

function createElement({ tagName, className }) {
  const element = document.createElement(tagName);

  if (className) {
      const classNames = className.split(' ').filter(Boolean);
      element.classList.add(...classNames);
  }

  return element;
}

function createProductCard(productData) {
  const cardHTML = `
    <div class="product-card">
      <div class="product-card__img"><img src="${productData.img}" alt="${productData.title}"></div>
      <h4 class="product-card__title">${productData.title}</h4>
      <button data-type="callback" type="button" class="product-card__button button">Дізнатись ціну</button>
    </div>
  `
  return cardHTML;
}

const productGroupElement = createElement({ tagName: 'div', className: 'tabs-body__item'});
const allProducts = []
products.forEach(productGroup => allProducts.push(...productGroup.map(product => createProductCard(product))));
console.log(allProducts);

productGroupElement.innerHTML = allProducts.join('');

catalogBody.appendChild(productGroupElement);

products.forEach(productGroup => {
  const productGroupElement = createElement({ tagName: 'div', className: 'tabs-body__item'});

  const products = productGroup.map(product => createProductCard(product));
  productGroupElement.innerHTML = products.join('');

  catalogBody.appendChild(productGroupElement);
});

//tabs
modules.tabs();