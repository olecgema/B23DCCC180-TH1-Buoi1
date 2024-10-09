
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const RandomColor = () => {
  const color = useSelector(state => state.randomColor.color);
  const history = useSelector(state => state.randomColor.history); 
  const dispatch = useDispatch();

  const changeColor = () => {
    const colors = ['red', 'blue', 'green', 'black', 'orange', 'purple', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    dispatch({ type: 'SET_COLOR', payload: randomColor });
  };

  const undoColor = () => {
    dispatch({ type: 'UNDO_COLOR' });
  };

  return (
    <div style={{ backgroundColor: color, height: '100vh', transition: 'background-color 0.5s' }}>
      <button onClick={changeColor} style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px' }}>
        Đổi Màu
      </button>
      <button onClick={undoColor} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Quay Lại
      </button>
      <h1 style={{ color: 'white' }}>{color}</h1>


      <div style={{ marginTop: '20px', color: 'white' }}>
        <h2>Lịch Sử Đổi Màu:</h2>
        <ul>
          {history.map((col, index) => (
            <li key={index} style={{ color: col }}>{col}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RandomColor;
