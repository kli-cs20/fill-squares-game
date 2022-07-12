// GRID FUNCTIONS

function createGridArray() {
    // Create and return a grid array
    return [ [0, 0, 0, 1, 0, 1], 
             [0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 1, 0, 0], 
             [1, 0, 0, 0, 0, 0], 
             [1, 0, 0, 0, 0, 0] ];
}

function createPuzzle2Array() {
    return [ [0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0], 
             [0, 0, 1, 0, 0, 0], 
             [0, 1, 0, 0, 1, 0], 
             [1, 0, 0, 0, 0, 0], 
             [1, 0, 0, 0, 0, 0] ];
}

function createDivGrid(grid) {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            // Create a div for each element in 2d array
            let divEl = document.createElement("div");

            // Add an id to each divEl
            divEl.id = "cell" + row  +  "-" + col;

            // Add appropriate class to each div element
            if (grid[row][col] === 1) {
                divEl.classList.add("grey");
            } else if (grid[row][col] === 2) {
                divEl.classList.add("player");
            } else if (grid[row][col] === 3) {
                divEl.classList.add("goal");
            }

            // Add dataset values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col; 

            // Add div to container
            document.getElementById("container").append(divEl);
        }
    }
}

function resetPuzzle() {
    location.reload();
    // console.log("reset")
    // for (let row = 0; row < 6; row++) {
    //     for (let col = 0; col < 6; col++) {
    //         if (grid[row][col] === 2) {
    //             grid[row][col] === 0;
                
    //         }
    //     }
    // }
}

