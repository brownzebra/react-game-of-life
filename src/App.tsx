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
  const pulsar = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  return pulsar as GridType;
};

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
