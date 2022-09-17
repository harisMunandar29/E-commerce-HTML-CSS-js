const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');
const productTitle = document.querySelectorAll('.productTitle');
const productPrice = document.querySelectorAll('.productPrice');
const products = [
  {
    id: 1,
    title: 'Air Force',
    price: '$ 144.0',
    colors: [
      {
        code: 'black',
        image: './img/air.png',
      },
      {
        code: 'white',
        image: './img/air2.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Air Jordan',
    price: '$ 150.0',
    colors: [
      {
        code: 'grey',
        image: './img/jordan.png',
      },
      {
        code: 'blue',
        image: './img/jordan2.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Blazer',
    price: '$ 90.0',
    colors: [
      {
        code: 'black',
        image: './img/crater.png',
      },
      {
        code: 'grey',
        image: './img/crater2.png',
      },
    ],
  },
  {
    id: 4,
    title: 'Blazer',
    price: '$ 100.0',
    colors: [
      {
        code: 'black',
        image: './img/blazer.png',
      },
      {
        code: 'grey',
        image: './img/blazer2.png',
      },
    ],
  },
  {
    id: 5,
    title: 'Hippie',
    price: '$ 80.0',
    colors: [
      {
        code: 'grey',
        image: './img/hippie.png',
      },
      {
        code: 'black',
        image: './img/hippie2.png',
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    //change the current slider
    wrapper.style.transform = `translateX(${-100 * index}vw`;

    // change  the choosen products
    choosenProduct = products[index];

    // change texts of current products
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].image;

    // Assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = choosenProduct.colors[index].image;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener('click', () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = 'transparent';
      size.style.color = 'black';
    });
    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  });
});

const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
  payment.style.display = 'flex';
});

close.addEventListener('click', () => {
  payment.style.display = 'none';
});
