const list = document.querySelector('ul')
const showAllButton = document.querySelector('.showAll')
const Descont = document.querySelector('.DescontBtn')
let myLi = '';


function showAll(productsarray) {
  myLi = '';
  productsarray.forEach((product) => {

    myLi += `
    <li>
    <img src='${product.src}' alt='${product.hamburguer}'>
    <p>${product.hamburguer}</p>
    <p class="price">R$ ${product.price.toFixed(2)}</p>
</li>
  `;


  })

  list.innerHTML = myLi;
}


function showDiscounted() {
 
  const discountedProduct = menuOptions.map((product) => ({
...product,
    price: product.price - (product.price * 0.1)
}))
showAll(discountedProduct);
};


showAllButton.addEventListener('click', () => showAll(menuOptions));
Descont.addEventListener('click', showDiscounted);
