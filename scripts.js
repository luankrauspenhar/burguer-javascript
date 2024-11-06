const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMap = document.querySelector(".map-all")
const buttonReduce = document.querySelector(".sum-all")
const buttonFilter = document.querySelector(".filter-all")


function formatCurrency(value) {
  return newValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function showAll(productsArray) {
  let myLi = ""

  productsArray.forEach((product) => {
    myLi += ` 
              <li>
                  <img src= ${product.src}>
                  <p> ${product.name}</p>
                  <p class="item-price"> ${formatCurrency(product.price)}</p>
              </li>
          `

          list.innerHTML = myLi;

  })
}


function mapAllItems() {
  const newPrices = menuOptions.map( (product ) => ({
    ...product, 
    price: product.price * 0.9, 
    
  }))

  showAll(newPrices)
}



function sumAll() {
  const valueTotal = menuOptions.reduce((acc, curr) => acc + curr.price , 0)

  list.innerHTML =   `
  
  <li>
     <p> Valor total dos itens :    ${formatCurrency(valueTotal)}</p>
 </li>

`
}

function filterVegan() {
  const burguerVegan = menuOptions.filter(products => products.vegan)
  showAll(burguerVegan)
}




buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMap.addEventListener("click", mapAllItems)
buttonReduce.addEventListener("click", sumAll)
buttonFilter.addEventListener("click", filterVegan)



