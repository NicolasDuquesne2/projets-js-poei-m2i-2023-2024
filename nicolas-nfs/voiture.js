//Déclarations de variables module
const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const topButton = document.querySelector("#top");
const botButton = document.querySelector("#bottom");
const car = document.querySelector("#voiture");
car.style.gridColumnStart =1;
car.style.gridRowStart = 1;


const freePlaces = [
    {x:1, y:1},
    {x:2, y:1},
    {x:3, y:1},
    {x:4, y:1},
    {x:5, y:1},
    {x:6, y:1},
    {x:7, y:1},
    {x:8, y:1},
    {x:9, y:1},
    {x:1, y:2},
    {x:5, y:2},
    {x:9, y:2},
    {x:1, y:3},
    {x:5, y:3},
    {x:9, y:3},
    {x:1, y:4},
    {x:5, y:4},
    {x:9, y:4},
    {x:1, y:5},
    {x:2, y:5},
    {x:3, y:5},
    {x:4, y:5},
    {x:5, y:5},
    {x:6, y:5},
    {x:7, y:5},
    {x:8, y:5},
    {x:1, y:6},
    {x:5, y:6},
    {x:9, y:6},
    {x:1, y:7},
    {x:5, y:7},
    {x:9, y:7},
    {x:1, y:8},
    {x:5, y:8},
    {x:9, y:8},
    {x:9, y:9},
    {x:1, y:9},
    {x:2, y:9},
    {x:3, y:9},
    {x:4, y:9},
    {x:5, y:9},
    {x:6, y:9},
    {x:7, y:9},
    {x:8, y:9},
    {x:9, y:9},
]

//Attribution d'évènements

leftButton.addEventListener('click', (event) => moveLeft(event));
rightButton.addEventListener('click', (event) => moveRight(event));
topButton.addEventListener('click', (event) => moveTop(event));
botButton.addEventListener('click', (event) => moveDown(event));

//Fonctions

function moveLeft() {

}


function moveRight(event) {
    console.log((event));
    let newXPos = Number(car.style.gridColumnStart);
    newXPos +=1;
    const curYPos = Number(car.style.gridRowStart);
    car.style.gridColumnStart = newXPos;
    car.style.gridRowStart = curYPos;

    if(checkPosition(newXPos, curYPos)) {
        console.log(newXPos, curYPos);
    }
}

function moveTop() {

}

function moveDown() {

}


function checkPosition(xPos, yPos) {
    return freePlaces.includes(freePlace => freePlace.x == xPos && freePlace.y == yPos);
}
