// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    //assign rows and columns to the height and width input (instantiated in higher scope)
    rows = document.getElementById("input_height").value;
    cols = document.getElementById("input_width").value;

    //string for displaying the table HTML data
    let tableHTML = "";

    //nested loops for creating the table
    for (let row = 0; row < rows; row++) {
        tableHTML += "<tr>";
        for (let col = 0; col < cols; col++) {
            tableHTML += "<td></td>"
        }
        tableHTML += "</tr>";
    }

    //adds HTML to the pixel_canvas element to draw the grid
    document.getElementById("pixel_canvas").innerHTML = tableHTML;

}

//submit button and event listener to call the makeGrid function
let button = document.getElementById("submitButton");

button.addEventListener("click", function(event) {
    makeGrid();
    event.preventDefault();
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


