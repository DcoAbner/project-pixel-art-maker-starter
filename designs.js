// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}

let button = document.getElementById("sizePicker").getElementsByTagName("input")[2];

button.addEventListener("click", function() {
    event.preventDefault();
    alert('done');
    makeGrid();
})