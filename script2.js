const list = document.querySelector('ul')
const showAllButton = document.querySelector('.showAll')
const descont = document.querySelector('.DescontBtn')
const sum = document.querySelector('.reduceBtn')


function showAll(productsarray) {
  let myLi = '';
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


function showSum() {
 let myLi = ''
  const sumprice = menuOptions.reduce((acc, product) => acc + product.price, 0);
  myLi += `<li><p>Soma total: R$ ${sumprice.toFixed(2)}</p></li>`;
  list.innerHTML = myLi;
  
}


sum.addEventListener('click', showSum )
showAllButton.addEventListener('click', () => showAll(menuOptions));
descont.addEventListener('click', showDiscounted);
