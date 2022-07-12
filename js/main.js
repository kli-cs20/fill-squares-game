// GRID DESIGNER

// Global Constants
const NUM_ROWS = 6;
const NUM_COLS = 6;

// Create array to represent a grid
let grid = createGridArray();

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

// Key Event Listeners - player movement
document.addEventListener("keydown", movePlayer);

function movePlayer(e) {
    if (e.keyCode === 39) { // Right arrow key
        updatePlayer(player.row, player.col + 1);
    } else if (e.keyCode === 37) { // Left arrow key
        updatePlayer(player.row, player.col - 1);
    } else if (e.keyCode === 38) { // up arrow key
        updatePlayer(player.row - 1, player.col);
    } else if (e.keyCode === 40) { // Down arrow key
        updatePlayer(player.row + 1, player.col);
    }
}

function updatePlayer(newRow, newCol) {
    // Update player location
    player.row = newRow;
    player.col = newCol;

    // Update class and grid
    let cellId = "cell" + player.row + "-" + player.col;
    document.getElementById(cellId).classList.add("player");

    grid[player.row][player.col] = 2;
}


