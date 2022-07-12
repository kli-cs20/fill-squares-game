// GRID DESIGNER

// Global Constants
const NUM_ROWS = 6;
const NUM_COLS = 6;
const resultEl = document.getElementById("result");
const resetBtn = document.getElementById("reset");

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

resetBtn.addEventListener("click", resetPuzzle);

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

// Key Event Listeners - player movement
document.addEventListener("keydown", movePlayer);

function movePlayer(e) {
    if (e.keyCode === 39) { // Right arrow key
        if (player.col + 1 < 6) {
            updatePlayer(player.row, player.col + 1);
        }
    } else if (e.keyCode === 37) { // Left arrow key
        if (player.col - 1 >= 0) {
            updatePlayer(player.row, player.col - 1);
        }
    } else if (e.keyCode === 38) { // up arrow key
        if (player.row - 1 >= 0) {
            updatePlayer(player.row - 1, player.col);  
        }
    } else if (e.keyCode === 40) { // Down arrow key
        if (player.row + 1 < 6) {
            updatePlayer(player.row + 1, player.col);
        }
    }

    // Check if puzzle is completed
    if (grid[endGoal.row][endGoal.col] === 2) {
        if (checkIfComplete()) {
            resultEl.innerHTML = "Congratulations, you completed the puzzle!"
        }
    }

}

function updatePlayer(newRow, newCol) {
    function checkCollisions() {
        return grid[newRow][newCol] !== 1 && grid[newRow][newCol] !== 2;
    }

    if (checkCollisions()) {
        // Update player location
        player.row = newRow;
        player.col = newCol;
            
        // Update class and grid
        let cellId = "cell" + player.row + "-" + player.col;
        document.getElementById(cellId).classList.add("player");

        grid[player.row][player.col] = 2;
    }
}

function checkIfComplete() {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 6; col++) {
            if (grid[row][col] !== 0) {
                return true
            }
            return false
        }
    }
}