// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    //assign rows and columns to the height and width input (instantiated in higher scope)
    rows = document.getElementById("input_height").value;
    cols = document.getElementById("input_width").value;

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

//instantiate the columns and rows variables so they can be used outside of the makeGrid() function
let cols, rows = 0;


