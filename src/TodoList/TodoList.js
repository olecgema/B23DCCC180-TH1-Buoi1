// src/TodoList/TodoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
  const works = useSelector(state => state.todo.works);
  const dispatch = useDispatch();
  const [work, setWork] = useState("");
  const [editValue, setEditValue] = useState("");
  const [isEditing, setIsEditing] = useState(null);

  const addWork = () => {
    if (!work) return;
    dispatch({ type: 'ADD_TODO', payload: work });
    setWork("");
  };

  const removeJob = (workToRemove) => {
    dispatch({ type: 'REMOVE_TODO', payload: workToRemove });
  };

  const saveEdit = (index) => {
    dispatch({ type: 'EDIT_TODO', payload: editValue, index });
    setIsEditing(null);
    setEditValue("");
  };

  return (
    <div>
      <h2>To-do List</h2>
      <input 
        value={work} 
        onChange={e => setWork(e.target.value)} 
        placeholder="Add"
      />
      <button onClick={addWork}>Add</button>
      
      <ul>
        {works.map((item, index) => (
          <li key={index}>
            {isEditing === index ? ( 
              <>
                <input 
                  value={editValue} 
                  onChange={e => setEditValue(e.target.value)} 
                />
                <button onClick={() => saveEdit(index)}>Lưu</button>
              </>
            ) : (
              <>
                <label>{item}</label>
                <button onClick={() => {
                  setIsEditing(index); 
                  setEditValue(item);  
                }}>Chỉnh sửa</button>
                <button onClick={() => removeJob(item)}>Xóa</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
