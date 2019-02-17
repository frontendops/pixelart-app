// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWeight');

const form = document.querySelector('#sizePicker');

// Select color input

const colorInput = document.querySelector('#colorPicker');

//select canvas to insert blocks
const canvas = document.querySelector('#pixelCanvas');

let col = document.createElement("td");

function makeGrid(h, w) {
    for (let i = 0; i < h; i++) {

        let row = canvas.insertRow(i);

        for (let j = 0; j < w; j++) {
            row.appendChild(col.cloneNode());

        }

    }

};


//creating the canvas on form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();
    //reset canvas on click
    canvas.innerHTML = ''

    const inputHeight = height.value;
    const inputWidth = width.value

    makeGrid(inputHeight, inputWidth);
    console.log(colorInput.value)

})

canvas.addEventListener('click', (e) => {
    e.target.style.backgroundColor = `${colorInput.value}`;
})
