// src/reducers/todoReducer.js
const initialState = {
    works: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          works: [...state.works, { text: action.payload, completed: false }], 
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          works: state.works.filter((item) => item.text !== action.payload),
        };
      case 'EDIT_TODO':
        const updatedWorks = state.works.map((item, idx) => 
          idx === action.payload.index ? { ...item, text: action.payload.value } : item
        );
        return {
          ...state,
          works: updatedWorks,
        };
      case 'TOGGLE_COMPLETE':
        return {
          ...state,
          works: state.works.map((item, idx) =>
            idx === action.payload ? { ...item, completed: !item.completed } : item
          ),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  