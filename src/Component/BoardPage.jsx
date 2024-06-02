import React, { useState } from 'react';
import Board from './Board';

const BoardPage = () => {
  const [title, setTitle] = useState('Board Title');

  return (
    <div className="flex-1 p-4">
      <input
        className="text-2xl font-bold mb-4 w-full border-b-2 p-2 "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Board />
    </div>
  );
};

export default BoardPage;
