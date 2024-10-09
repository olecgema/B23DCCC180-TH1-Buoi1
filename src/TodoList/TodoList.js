
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const TodoList = () => {
  const dispatch = useDispatch();
  const works = useSelector(state => state.todo.works);
  const [work, setWork] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    const storageWorkList = JSON.parse(localStorage.getItem('workList'));
    if (storageWorkList) {
      storageWorkList.forEach(work => {
        dispatch({ type: 'ADD_TODO', payload: work.text }); 
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('workList', JSON.stringify(works));
  }, [works]);

  const addWork = () => {
    if (work) {
      dispatch({ type: 'ADD_TODO', payload: work });
      setWork("");
    }
  };

  const removeWork = (workToRemove) => {
    dispatch({ type: 'REMOVE_TODO', payload: workToRemove });
  };

  const saveEdit = (index) => {
    dispatch({ type: 'EDIT_TODO', payload: { index, value: editValue } });
    setIsEditing(null);
    setEditValue("");
  };

  const toggleComplete = (index) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: index });
  };

  return (
    <div>
      <h1>To-do List</h1>
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
                <input 
                  type="checkbox" 
                  id={`task-${index}`} 
                  checked={item.completed} 
                  onChange={() => toggleComplete(index)} 
                />
                <label 
                  htmlFor={`task-${index}`}
                  style={{ textDecoration: item.completed ? 'line-through' : 'none' }} 
                >
                  {item.text}
                </label>
                <button onClick={() => {
                  setIsEditing(index); 
                  setEditValue(item.text);  
                }}>Chỉnh sửa</button>
                <button onClick={() => removeWork(item.text)}>Xóa</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
