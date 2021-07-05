const container = document.querySelector('#square-grids');
var gridNumber = prompt("How many grids do you want?", "64");

while (gridNumber>100){
    gridNumber = prompt("That's too high, please enter less or equal to 100.", "64");
}

for(let i=0;i<gridNumber;i++) {
    const firstGrids = document.createElement('div');
    firstGrids.classList.add('column');
    for(let a=0;a<gridNumber;a++) {
        const grids = document.createElement('div');
        grids.classList.add('grid');
        firstGrids.appendChild(grids);
    }
    container.appendChild(firstGrids);
}

function test(e){
    e.target.classList.add('color');
}

function tests(e){
    el.classList.remove('color');
}

function clear(e){
    const grs = document.querySelectorAll('.grid');
    grs.forEach(grs => grs.classList.remove('color'));
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

const demo = document.querySelector("#demo")
const grid = document.querySelectorAll('.grid');
grid.forEach(grid => grid.addEventListener('mouseover', test));
demo.addEventListener('click',clear)