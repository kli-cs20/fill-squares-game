// Puzzle Four

// Create array to represent a grid
let grid = createGridArray();

// Add player to the grid array
let player = {
    row: 3,
    col: 4
}

grid[player.row][player.col] = 2;

// Add end goal to the grid array
let endGoal = {
    row: 0,
    col: 5
}

grid[endGoal.row][endGoal.col] = 3;

// Create divs to model the grid array
createDivGrid(grid);

function createGridArray() {
    return [ [1, 0, 0, 0, 1, 0], 
             [1, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0], 
             [0, 0, 1, 0, 0, 1], 
             [0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0] ];
}