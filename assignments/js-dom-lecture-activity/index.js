const proveButtonClick = (event) => 
{ 
     
    const inputText = event.target.parentNode.querySelector('input').value;
    // create text item
    const newTextItem = document.createTextNode(inputText);
    // create list item
    const newListItem = document.createElement('li');
    // add text to list item
    newListItem.appendChild(newTextItem);
    // add list item to list
    document.querySelector('ul').appendChild(newListItem);

    //alert('you clicked the button to add:'  + inputText );
}

//document.querySelector("button").addEventListener('click', proveButtonClick);
const addNewItemButton = document.querySelector("button");
addNewItemButton.addEventListener('click', proveButtonClick); 
