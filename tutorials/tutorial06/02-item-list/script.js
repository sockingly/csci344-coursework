const items = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];
const itemList = document.querySelector('#itemList');

function displayItems() 
{
  // 1. Clear itemList using innerHTML = ''
  itemList.innerHTML = '';
  // 2. Create a for loop that goes from 0 to items.length
  for (let i = 0; i < items.length; i++)
  {
    //const itemList = document.querySelector('#itemList');
    const listItemHTML = `<li>${items[i]}</li>`;
    itemList.insertAdjacentHTML('beforeend', listItemHTML);
  }
}

displayItems();