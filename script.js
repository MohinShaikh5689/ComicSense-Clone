document.addEventListener('DOMContentLoaded', function () {
  
    const imageSlider = document.querySelector('.image-slider');

    // Clone the images and append them to the slider
    const images = document.querySelectorAll('.image-slider img');
    images.forEach(img => {
        const clone = img.cloneNode(true);
        imageSlider.appendChild(clone);
    });

    // Set the total width of the slider to accommodate all images
    const totalWidth = images.length * 30; // Assuming each image has a width of 25%
    imageSlider.style.width = totalWidth + '%';

    // Animation to slide the images infinitely
    let currentPosition = 0;

    function slideImages() {
        currentPosition -= 25; // Slide one image (25%)
        if (currentPosition < -totalWidth) {
            currentPosition = 0; // Reset to the beginning if reached the end
        }

        // Apply a smooth transition effect
        imageSlider.style.transition = 'transform 0.5s ease-in-out';
        imageSlider.style.transform = 'translateX(' + currentPosition + '%)';

        // Remove transition after it completes to avoid interference with manual positioning
        setTimeout(() => {
            imageSlider.style.transition = '0.2s ease in';
        }, 500);
    }

    // Adjust the interval duration based on your preference
    const interval = setInterval(slideImages, 3000); // Change 3000 to your desired duration in milliseconds

    
});



const popupMenu = document.querySelector('.popup-menu');
const menuItems = popupMenu.querySelector('.menu-items');


let timer;

popupMenu.addEventListener('mouseenter', function() {
  clearTimeout(timer);
  menuItems.style.opacity = '1';
  menuItems.style.top = '130%';
  menuItems.style.pointerEvents = 'auto';
 
});

popupMenu.addEventListener('mouseleave', function() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    menuItems.style.opacity = '0';
    menuItems.style.pointerEvents = 'none';
  }, 300);
});



const popupMenu1 = document.querySelector('.popup-menu1');
const menuItems1 = popupMenu1.querySelector('.menu-items1');


let timera;

popupMenu1.addEventListener('mouseenter', function() {
  clearTimeout(timera);
  menuItems1.style.opacity = '1';
  menuItems1.style.top = '130%';
  menuItems1.style.pointerEvents = 'auto';
 
});

popupMenu1.addEventListener('mouseleave', function() {
  clearTimeout(timer);
    timera = setTimeout(() => {
    menuItems1.style.opacity = '0';
    menuItems1.style.top = 'calc(100% + 5px)';
    menuItems1.style.pointerEvents = 'none';
  }, 300);
});

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}

function openCart(){

  let cart = document.getElementById('cart');
  cart.style.inset = "0 0 0 auto";
};

function closeCart(){
  cart.style.inset = "0 -400px 0 auto";
};


const initApp = () => {
  fetch('Product.json')
  .then(response => response.json())
  .then(data => {
    ListProduct = data;
    addDataToHtml();
    console.log(ListProduct);
  });
}
initApp();

let ListProduct=[];
let cartItems = [];

let ListProductHTML = document.getElementById('ListProduct');
let ListProduct1HTML = document.getElementById('ListProduct1');
let ListProduct2HTML = document.getElementById('ListProduct2');
let ListProduct3HTML = document.getElementById('ListProduct3');

let cartHTML = document.getElementById('cart1');


const addDataToHtml = () => {
  if (ListProduct.length > 0) {
      ListProduct.forEach(product => {
          let newProduct = document.createElement('div');
          newProduct.classList.add('item');
          newProduct.dataset.id = product.id;
          newProduct.innerHTML =
              `<div class="item">
                  <img src="${product.image}" alt="${product.name}">
                  <div class="prod_name">
                      <p align="center">${product.name}</p>
                  </div>
                  <div class="price">
                      <p>${product.price} ₹</p>
                      <pre onclick="addToCart(${product.id})" id="Addtocart">Add To cart</pre>
                  </div>
              </div>`;
          if (product.id >= 1 && product.id <= 6) {
              ListProductHTML.appendChild(newProduct);
          }
           else if (product.id >= 7 && product.id <= 12) {
              ListProduct1HTML.appendChild(newProduct);
          }
           else if (product.id >=12 && product.id<=18){
               ListProduct2HTML.appendChild(newProduct)
           }
           else{
                ListProduct3HTML.appendChild(newProduct)
           }
      });
  }
}

const addToCart = (productId) => {
  console.log(productId)
  const productToAdd = ListProduct.find(product => product.id === productId);
  if (productToAdd) {
    cartItems.push(productToAdd);
    renderCart();
  }
}

const removeFromCart = (productId) => {
  cartItems = cartItems.filter(item => item.id !== productId);
  renderCart();
}

const renderCart = () => {
  cartHTML.innerHTML = '';
  if (cartItems.length > 0) {
    cartItems.forEach(item => {
      let cartItem = document.createElement('div');
      cartItem.classList.add('listcart');
      cartItem.innerHTML = `
          <div class="listcart">
              <img src="${item.image}" alt="${item.name}">
              <p>${item.name}</p>
              <p>${item.price}₹</p>
              <button onclick="removeFromCart(${item.id})">
              <img src ="assets/delete-svgrepo-com.svg">
              </button>
          </div>`;
      cartHTML.appendChild(cartItem);
    });
    checkoutButton.disabled = false;
        emptyCartButton.disabled = false;
  }
  
}
const checkoutButton = document.getElementById('checkoutButton');
const emptyCartButton = document.getElementById('emptyCartButton');

checkoutButton.addEventListener('click', () => {
  alert('Redirecting to checkout page...');
  cartItems = [];
  renderCart()
});

emptyCartButton.addEventListener('click', () => {
  cartItems = [];
  renderCart();
});