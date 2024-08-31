import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import Controls from './Controls';
import { Grid as GridType, CellState } from './types';

// const createInitialGrid = (rows: number, cols: number): GridType => {
//   return Array.from({ length: rows }, () =>
//     Array.from({ length: cols }, () => (Math.random() > 0.7 ? 1 : 0) as CellState)
//   );
// };

const createInitialGrid = (): GridType => {
  const rows = 20;
  const cols = 38;
  const grid: GridType = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Gosper Glider Gun pattern
  const pattern = [
    [5, 1], [5, 2], [6, 1], [6, 2], [5, 11], [6, 11], [7, 11], [4, 12], [8, 12], [3, 13], [9, 13],
    [3, 14], [9, 14], [6, 15], [4, 16], [8, 16], [5, 17], [6, 17], [7, 17], [6, 18], [3, 21], [4, 21],
    [5, 21], [3, 22], [4, 22], [5, 22], [2, 23], [6, 23], [1, 25], [2, 25], [6, 25], [7, 25], [3, 35],
    [4, 35], [3, 36], [4, 36]
  ];

  pattern.forEach(([x, y]) => {
    grid[x][y] = 1;
  });

  return grid;
};

// const createInitialGrid = (): GridType => {
//   const customGrid = [
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
//       [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  
//   ];
//   return customGrid as GridType;
// };


const App: React.FC = () => {
  const [grid, setGrid] = useState<GridType>(() => createInitialGrid());
  const [running, setRunning] = useState<boolean>(false);

  const nextGeneration = (grid: GridType): GridType => {
    const nextGrid = grid.map((row, i) =>
      row.map((col, j) => {
        const neighbors = countNeighbors(grid, i, j);
        if (col === 1) {
          return neighbors === 2 || neighbors === 3 ? 1 : 0;
        } else {
          return neighbors === 3 ? 1 : 0;
        }
      })
    );
    return nextGrid;
  };

  const countNeighbors = (grid: GridType, x: number, y: number): number => {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 1],
      [1, -1], [1, 0], [1, 1],
    ];
    return directions.reduce((acc, [dx, dy]) => {
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length) {
        acc += grid[newX][newY];
      }
      return acc;
    }, 0);
  };

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setGrid(prevGrid => nextGeneration(prevGrid));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [running]);

  return (
    <div>
      <h1>Conway's Game of Life</h1>
      <Grid grid={grid} />
      <Controls running={running} setRunning={setRunning} />
    </div>
  );
};

export default App;
