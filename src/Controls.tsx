import React from 'react';

interface ControlsProps {
  running: boolean;
  setRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const Controls: React.FC<ControlsProps> = ({ running, setRunning }) => {
  return (
    <div>
      <button onClick={() => setRunning(!running)}>
        {running ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Controls;