const list = document.querySelector('ul')
const showAllButton = document.querySelector('.showAll')
const descont = document.querySelector('.DescontBtn')
const sum = document.querySelector('.reduceBtn')
const vegan = document.querySelector('.filterBtn')

function newValue(value){
return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}


function showAll(productsarray) {
  let myLi = '';
  productsarray.forEach((product) => {

    myLi += `
    <li>
    <img src='${product.src}' alt='${product.hamburguer}'>
    <p>${product.hamburguer}</p>
    <p class="price"> ${newValue(product.price)}</p>
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
  myLi += `<li><p>Soma total: ${newValue(sumprice)}</p></li>`;
  list.innerHTML = myLi;
  
}

function showVegan() {
const veganProducts = menuOptions.filter((product) => product.vegan);
showAll(veganProducts);

}

vegan.addEventListener('click', showVegan )
sum.addEventListener('click', showSum )
showAllButton.addEventListener('click', () => showAll(menuOptions));
descont.addEventListener('click', showDiscounted);
