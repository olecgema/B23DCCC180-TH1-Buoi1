
const initialState = {
    color: '#ffffff',
    history: [],
  };
  
  const randomColorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COLOR':
        return {
          color: action.payload,
          history: [...state.history, state.color],
        };
      case 'UNDO_COLOR':
        return {
          ...state,
          color: state.history[state.history.length - 1] || state.color,
          history: state.history.slice(0, state.history.length - 1),
        };
      default:
        return state;
    }
  };
  
  export default randomColorReducer;
  