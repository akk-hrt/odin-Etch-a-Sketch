const container = document.getElementById("container");

function changeBGColour(obj){
    obj.setAttribute("class", "grid-hovered");
}

function createNewCanvas(){
    container.textContent = "";
    let num = prompt("Please enter the number (16-100) of squares per side for the new grid.", "30");

    if (num <16) {
        num = 16;
    } else if (num > 100) {
        num = 100;
    } else if (!Number.isInteger(num)) {
        num = Math.floor(Math.random() * 100);
    }

    for (let r = 1; r <= num; r++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "row" + r);
    
    for (let c = 1; c <= num; c++) {
        const grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        grid.setAttribute("onmouseover", "changeBGColour(this)");
        // grid.textContent = c;
        row.appendChild(grid);
    }

    container.appendChild(row);
}
}



