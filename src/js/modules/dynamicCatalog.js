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
      <div data-type="callback" class="product-card__img"><img src="${productData.img}" alt="${productData.title}"></div>
      <h4 class="product-card__title">${productData.title}</h4>
      <button data-type="callback" type="button" class="product-card__button button">Дізнатись ціну</button>
    </div>
  `
  return cardHTML;
}

const productGroupElement = createElement({ tagName: 'div', className: 'tabs-body__item'});
const allProducts = []
products.forEach(productGroup => allProducts.push(...productGroup.map(product => createProductCard(product))));

productGroupElement.innerHTML = allProducts.join('');

catalogBody.appendChild(productGroupElement);

products.forEach(productGroup => {
  const productGroupElement = createElement({ tagName: 'div', className: 'tabs-body__item'});

  const products = productGroup.map(product => createProductCard(product));
  productGroupElement.innerHTML = products.join('');

  catalogBody.appendChild(productGroupElement);
});