import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const Task = ({ task, deleteTask }) => {
  return (
    <div className="bg-white p-4 mb-2 shadow rounded flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <button onClick={() => deleteTask(task.id)}>
        <FiTrash2 className="text-red-600" />
      </button>
    </div>
  );
};

export default Task;
