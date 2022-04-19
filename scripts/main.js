let defaultCanvasHeight = 600;
let defaultCanvasWidth = 600;
let gridGap = 1;
let defaultColor = "#FFFFFF";
let drawColor = "random";
let newGridSize = 16;
const redrawButton = document.querySelector("#redraw");
const resetButton = document.querySelector("#reset");
const randomButton = document.querySelector("#random");
randomButton.addEventListener("click", () => drawColor = "random");
const colorWell = document.querySelector("#colorWell");
colorWell.addEventListener("input", updateColor, false);


function getColor() {
    if (drawColor === "random") {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    } else {
        return drawColor;
    }
    
}

function updateColor(event) {
    drawColor = event.target.value;
}

// Create grid function
function createDivGrid(gridlength) {
    gridlength = parseInt(gridlength);
    if (gridlength > 100 || gridlength < 1 || isNaN(gridlength)) {
        alert("Grid Length must be a number between  less than 100");
        return;
    }
    const container = document.querySelector('#container');
    let gridArea = Math.pow(gridlength, 2);
    // make sure square dimensions are whole numbers
    let squareHeight = Math.floor(defaultCanvasHeight / gridlength);
    let squareWidth = Math.floor(defaultCanvasWidth / gridlength);
    const subDiv = document.createElement('div');
    subDiv.setAttribute("id", "container");
    subDiv.setAttribute("class", "grid-container");
    subDiv.setAttribute("style", `display: flex; flex-wrap: wrap; grid-gap: ${gridGap}px;`);
    //calculate new canvas dimensions from square dimensions
    subDiv.style.height = `${(squareHeight * gridlength) + ((gridlength - 1) * gridGap )}px`;
    subDiv.style.width = `${(squareWidth * gridlength) + ((gridlength - 1) * gridGap )}px`;
    //subDiv.style.border = "1px solid";
    
    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement('div');
        square.setAttribute("class", "grid");
        square.setAttribute("style", `background-color: ${defaultColor}; width:${squareWidth}px; height:${squareHeight}px;`);
        square.addEventListener("mouseenter", function(e) {e.target.style.backgroundColor = getColor();})
        subDiv.appendChild(square);
    }
    const parentDiv = container.parentNode;
    parentDiv.replaceChild(subDiv, container);
    //container.append(subDiv);
}

function customGrid() {
    newGridSize = prompt("Enter a new Grid size");
    createDivGrid(newGridSize);
}
redrawButton.addEventListener('click', customGrid)
resetButton.addEventListener('click', () => createDivGrid(newGridSize))
createDivGrid(newGridSize);
//square.document.createElement('div')
//squares = Array(16).fill(square);
//container.append(subDiv);