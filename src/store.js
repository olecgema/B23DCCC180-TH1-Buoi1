// src/store.js
import { createStore, combineReducers } from 'redux';
import todoReducer from './TodoList/todoReducer';
import imageSearchReducer from './ImageSearch/imageSearchReducer';
import randomColorReducer from './RandomColor/randomColorReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  imageSearch: imageSearchReducer,
  randomColor: randomColorReducer,
});

const store = createStore(rootReducer);

export default store;
