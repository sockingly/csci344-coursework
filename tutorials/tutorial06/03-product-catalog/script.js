//1. create array
const products = 
[
    {name: 'thing', price: 200, description: 'grey', category: 'Books', inStock: true}, 
    {name: 'thingy', price: 20, description: 'orange', category: 'Furniture', inStock: false}, 
    {name: 'thingest', price: 10, description: 'yellow', category: 'Other', inStock: true}
];

const ProdList = document.querySelector('#productGrid');

//testing
//console.log(products);

//2. create price function
function formatPrice(num)
{
    return `$${num.toFixed(2)}`;
}

//testing
//console.log(formatPrice(products[1].price));

//3. create product tag
function createProductCard(productObj)
{
    return `
    <section class="product-card">
        <h2>${productObj.name}</h2>
        <div ${formatPrice(productObj.price)} class ="price">${formatPrice(productObj.price)}</div>
        <p ${productObj.description}>Description</p>
        <span ${productObj.category}>Category</span>
        ${showInStockBadge(productObj.inStock)}
    </section>
    `;
}

function showInStockBadge(inStock)
{
    if (inStock)
    {
        return `<span class="stock-status in-stock">In Stock</span>`;
    } else 
    {
        return `<span class="stock-status out-of-stock">Out of Stock</span>`;
    }
}

//testing
console.log(createProductCard(products[0]));

console.log(ProdList);

//4. render products
function renderProducts()
{
    ProdList.innerHTML = '';
    for (let i = 0; i < products.length; i++)
    {
        createProductCard(products[i]);
        const listItemHTML = createProductCard(products[i]);
        ProdList.insertAdjacentHTML('beforeend', listItemHTML);
    }
}

//1. form submission
function addItemToList(event) {
  // Prevent the default form submission behavior (which would reload the page)
  event.preventDefault();
  // TODO: Add your code here
  
}

productForm.addEventListener('submit', addItemToList);