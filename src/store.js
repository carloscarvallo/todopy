import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics/todo-epic';
import rootReducer from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';


const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));
//const store = createStore(rootReducer, (applyMiddleware(epicMiddleware)));

export default store;