
const NUM_SQUARES = 8000;

const colorField = document.querySelector('#color-field');
const button = document.querySelector('button');
const colorBox = document.querySelector('#brush');

console.log(colorField, button, colorBox);


const changeColorBoxColor = (event) => {
   
    let colorVal = colorField.value;
    console.log(colorVal);
    colorBox.style.backgroundColor = colorVal; // why do I need the empty string?
    event.preventDefault(); // prevents automatic refresh
}

const changeToColor = (event) => {
    event.target.style.color = document.querySelector('#changeColor').value;
}

const changeSmallSquareColor= (event) => {
   
    let currentColor = colorField.value;
    event.target.style.backgroundColor = currentColor;
}



function render(listOfItems, type, target) {
    /*
     listOfItems : array of data,
     type: the type of element we want to create
     target: the dom element that we will append our list to
    */
    target.replaceChildren(); // clear the target
    const newItems = []; // make a new array
    for (let i = 0; i < listOfItems.length; i++ /* Loop over the listOfItems*/) {
        const newOfType = document.createElement(type);
        // Create a new html element of whatever type we choose
        newOfType.innerText = listOfItems[i];
        // Set the Text value to be whatever value was at index i
        newOfType.addEventListener('click', changeToColor);

        newItems.push(newOfType);
        // push the newOfType into the array
    }
    for (let item of newItems) {
        target.appendChild(item);
        // place each item into the target with the appendChild
        // method
    }

}

button.addEventListener('click', changeColorBoxColor );
colorField.addEventListener('input', changeColorBoxColor);


// create and populate array of "square" elements
const divArr = []; // putting in array.  Can I use render? 
for (let i = 0; i < NUM_SQUARES; i++)
{
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
     // make color change on click
    newDiv.addEventListener("mouseover", changeSmallSquareColor);
    // and add to array
    divArr.push (newDiv);
    document.querySelector('body').appendChild(newDiv);
}

