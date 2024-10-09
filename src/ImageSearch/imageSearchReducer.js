// src/ImageSearch/imageSearchReducer.js
const initialState = {
    images: [],
    query: '',
  };
  
  const imageSearchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_IMAGES':
        return { ...state, images: action.payload };
      case 'SET_QUERY':
        return { ...state, query: action.payload };
      default:
        return state;
    }
  };
  
  export default imageSearchReducer;
  