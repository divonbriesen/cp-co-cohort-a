/**
 * Handles a click on the confirm checkbox
 * @param {MouseEvent} event Click event that triggers the check
 */
const handleConfirmCheck = (event) => {
    //get button
    const button = document.getElementById('submit');

    //toggle class visibility
    if (event.target.checked) {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
}

/**
 * Handles a click on the button to check if input is numeric
 * @param {MouseEvent} event Click event that triggers the check
 */
const handleNumberCheck = (event) => {
    const input = document.getElementById('r-input').value;

    //Infinity is considered a number, but empty string is not.
    if (input.trim().length && !isNaN(input)) {
        alert(`${input} is a number!`);
    }
    else {
        alert(`${input} is not a number!`);
    }

}

/**
 * Removes hidden class from the container div on window load
 * @param {ResourceEvent} event load event on window
 */
const handleWindowLoad = (event) => {
    document.getElementById('container').classList.remove('hidden');
}

//Attach event handlers
document.getElementById('confirm').addEventListener('click', handleConfirmCheck);
document.getElementById('check').addEventListener('click', handleNumberCheck);
window.addEventListener('load', handleWindowLoad);

//STRETCH GOALS

const handleMouseExit = (event) => {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');

    box1.style.backgroundColor = '';
    box2.style.backgroundColor = '';
}

/**
 * Attaches click handler on box with appropriate color
 * @param {string} clickTargetId id of box to be clicked
 * @param {string} colorTargetId id of box to change color
 * @param {string} backgroundColor css compatible style
 */
const attachBoxClickHandler = (clickTargetId, colorTargetId, backgroundColor) => {

    //Defining handleClick within scope to give it access to the necessary variables
    const handleClick = (event) => {
        document.getElementById(colorTargetId).style.backgroundColor = backgroundColor;
    }

    document.getElementById(clickTargetId).addEventListener('click', handleClick);
}

const handleInput = (event) => {
    //Object destructuring to get value and id out of event.target
    const { value, id } = event.target;
    const span = document.getElementById(`${id}_preview`);
    span.innerText = value;
}


attachBoxClickHandler('box1', 'box2', 'blue');
attachBoxClickHandler('box2', 'box1', 'yellow');

document.getElementById('box1').addEventListener('mouseleave', handleMouseExit);
document.getElementById('box2').addEventListener('mouseleave', handleMouseExit);

document.getElementById('firstname').addEventListener('input', handleInput);
document.getElementById('lastname').addEventListener('input', handleInput);
document.getElementById('zip').addEventListener('input', handleInput);