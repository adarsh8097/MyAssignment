import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { MdDelete } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import { MdOutlineComment } from "react-icons/md";

const TaskList = ({ tasks, status, deleteTask }) => {
    
   function handleCount(){
    alert("temprary issue data not show");
   }

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
              <div className='flex justify-between'>
              <h3 className="text-lg font-bold">{task.title}</h3>
              <button className='btn btn-secondary rounded-full font-bold text-black text-2xl w-10 mx-2 p-2' onClick={() => deleteTask(task.id)}><MdDelete/></button>
              </div>
              <p>{task.description}</p>
              <div className='flex justify-between'>
              <div className='flex p-2 text-gray-500' style={{gap:'5px'}}>
              <p onClick={handleCount}><MdOutlineContactPage/></p>
              <p style={{marginTop:"-5px"}}>2</p>
              <p onClick={handleCount}><MdOutlineComment/></p>
              <p style={{marginTop:"-5px"}}>4</p>
              </div>
              <div className='flex' style={{gap:"10px"}}>
                <img src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600" alt='post-data1' width="25px" height="100px" style={{borderRadius:"100%"}}/>
                <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt='post-data2' width="25px" height="100px" style={{borderRadius:"100%"}}/>
                <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600" alt='post-data3' width="25px" height="100px" style={{borderRadius:"100%"}}/>
              </div>
              </div>
                </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default TaskList;
