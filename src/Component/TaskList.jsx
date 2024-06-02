import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskList = ({ tasks, status, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="bg-white p-2 rounded mb-2"
            >
              <h3 className="text-lg font-bold">{task.title}</h3>
              <p>{task.description}</p>
              <button className='btn btn-danger w-25 font-bold' onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default TaskList;
