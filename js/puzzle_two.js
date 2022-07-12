// Puzzle Two

// Create array to represent a grid
let grid = createPuzzle2Array();

// Add player to the grid array
let player = {
    row: 2,
    col: 3
}

grid[player.row][player.col] = 2;

// Add end goal to the grid array
let endGoal = {
    row: 0,
    col: 3
}

grid[endGoal.row][endGoal.col] = 3;

// Create divs to model the grid array
createDivGrid(grid);

