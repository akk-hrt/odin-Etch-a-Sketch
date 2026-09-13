const container = document.getElementById("container");

function changeBGColour(obj){
    obj.setAttribute("class", "grid-hovered");
}

for (let r = 1; r <= 16; r++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "row" + r);
    
    for (let c = 1; c <= 16; c++) {
        const grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        grid.setAttribute("onmouseover", "changeBGColour(this)");
        // grid.textContent = c;
        row.appendChild(grid);
    }

    container.appendChild(row);
}

