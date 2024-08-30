import React from 'react';
import { CellState } from './types';

interface CellProps {
  value: CellState;
}

const Cell: React.FC<CellProps> = ({ value }) => {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        backgroundColor: value ? 'black' : 'white',
        border: 'solid 1px gray',
      }}
    ></div>
  );
};

export default Cell;
