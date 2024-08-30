import React from 'react';
import Cell from './Cell';
import { Grid as GridType } from './types';

interface GridProps {
  grid: GridType;
}

const Grid: React.FC<GridProps> = ({ grid }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${grid[0].length}, 20px)` }}>
      {grid.map((row, i) =>
        row.map((col, j) => <Cell key={`${i}-${j}`} value={col} />)
      )}
    </div>
  );
};

export default Grid;