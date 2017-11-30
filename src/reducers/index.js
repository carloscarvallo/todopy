import { combineReducers } from 'redux';
import todo from './todo-reducer';
import todoAdd from './todo-add-reducer';
const rootReducer = combineReducers({
    todo, todoAdd
});

export default rootReducer;