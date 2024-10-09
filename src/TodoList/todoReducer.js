// src/TodoList/todoReducer.js
const initialState = {
    works: JSON.parse(localStorage.getItem('workList')) || [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        const newWorkList = [...state.works, action.payload];
        localStorage.setItem('workList', JSON.stringify(newWorkList));
        return { ...state, works: newWorkList };
      case 'REMOVE_TODO':
        const filteredWorks = state.works.filter(item => item !== action.payload);
        localStorage.setItem('workList', JSON.stringify(filteredWorks));
        return { ...state, works: filteredWorks };
      case 'EDIT_TODO':
        const updatedWorks = state.works.map((item, idx) => idx === action.index ? action.payload : item);
        localStorage.setItem('workList', JSON.stringify(updatedWorks));
        return { ...state, works: updatedWorks };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  