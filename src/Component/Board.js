import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskList from './TaskList';

const initialTasks = [
  { id: '1', title: 'Task 1', description: 'Description 1', status: 'backlog' },
  { id: '2', title: 'Task 2', description: 'Description 2', status: 'in-progress' },
];

const Board = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = () => {
    const newTask = {
      id: String(tasks.length + 1),
      title: `Task ${tasks.length + 1}`,
      description: `I love this one. While discussing tools with a few members at MomMasterminds, one asked if anyone knew a todo web  app that would create tasks using text messages${tasks.length + 1}`,
      status: 'backlog',
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(
    task => task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    
    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = source.droppableId;
    const finish = destination.droppableId;

    if (start === finish) {
      const newTasks = Array.from(tasks);
      const [movedTask] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, movedTask);

      setTasks(newTasks);
    } else {
      const newTasks = Array.from(tasks);
      const [movedTask] = newTasks.splice(source.index, 1);
      movedTask.status = finish;
      newTasks.splice(destination.index, 0, movedTask);

      setTasks(newTasks);
    }
  };

  const groupedTasks = {
    backlog: filteredTasks.filter(task => task.status === 'backlog'),
    'in-progress': filteredTasks.filter(task => task.status === 'in-progress'),
    done: filteredTasks.filter(task => task.status === 'done'),
  };

  return (
    <div>
      <input 
        type="text"
        placeholder="Search tasks..."
        className="mb-4 p-2 border w-full m-2 w-25 rounded-lg"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 mb-4 w-25 m-2 font-bold rounded-lg" onClick={addTask}>Add Task</button>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4">
          {Object.keys(groupedTasks).map(status => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex-1 bg-gray-200 p-2 rounded"
                >
                  <h2 className="text-xl font-bold mb-2 capitalize">{status}</h2>
                  <TaskList status={status} tasks={groupedTasks[status]} deleteTask={deleteTask} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
