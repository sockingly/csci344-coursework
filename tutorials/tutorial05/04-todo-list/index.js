function addTodo()
{
    //1 get input element
    const inputElement = document.querySelector("#todoInput");

    //2 get value from input (.value property)
    const inputValue = inputElement.value;

    inputValue.value = '';
    //3 get ul element (to-do list)
    const todoList = document.querySelector("#todoList");

    //4 use insertAdjacentHTML('beforeend', <li>) to add item
    todoList.insertAdjacentHTML('beforeend', '<li>' + inputValue + '</li>');
    
    //5 clear input field (set .value to empty string)
    inputElement.value = '';
};