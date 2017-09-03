// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}

//submit button and event listener to call the makeGrid function
let button = document.getElementById("submitButton");

button.addEventListener("click", function() {
    makeGrid();
})

//currentColor is the form element; currentColorValue is the hex decimal value;
let currentColor = document.getElementById("colorPicker");
let currentColorValue = currentColor.value;

//event listener to constantly update the current color hex decimal value
currentColor.addEventListener("change", function(event) {
    currentColorValue = this.value;
})



