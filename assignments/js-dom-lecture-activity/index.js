const listItems = document.querySelectorAll('li');

const addCompleted = (event) => 
{
    event.target.classList.toggle('completed');
}

for(const thisItem of listItems)
{
    thisItem.addEventListener('click', addCompleted)
} 

const onAddToDo = (event) => 
{
        const inputField = event.target.parentNode.querySelector('input');
        const text = inputField.value;
        if(text != "")
        {
        const newListItem = document.createElement('li');
        const litext = document.createTextNode(text);
        newListItem.appendChild(litext);
        document.querySelector('ul').appendChild(newListItem);
        newListItem.addEventListener('click', addCompleted)
        inputField.value = "";
    } // end if
} // end onAddToDo

document.querySelector('button').addEventListener('click', onAddToDo);

