// GRID DESIGNER

// Global Constants
const NUM_ROWS = 6;
const NUM_COLS = 6;
const resultOne = document.getElementById("result");
const btnOne = document.getElementById("resetOne");

// Create array to represent a grid
let grid = createGridArray();
let grid2 = createPuzzle2Array();

// Add player to the grid array
let player = {
    row: 5,
    col: 3
}

grid[player.row][player.col] = 2;

// Add end goal to the grid array
let endGoal = {
    row: 0,
    col: 4
}

grid[endGoal.row][endGoal.col] = 3;

// Create divs to model the grid array
createDivGrid(grid);

// Key Event Listeners - player movement + reset puzzle
document.addEventListener("keydown", movePlayer);
btnOne.addEventListener("click", resetPuzzle);

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
            resultOne.innerHTML = "Congratulations, you completed Puzzle 1!"
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

