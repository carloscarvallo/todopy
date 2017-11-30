import { actionTypes, actions } from '../actions/todo-actions';
import { combineEpics } from 'redux-observable';
import axios from 'axios';
import 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

const getTodosEpic = (action$, store) => (
    action$.ofType(actionTypes.TODO_FETCH_TODOS)
        .switchMap(action => {
            //Construimos un observable que reintenta ante errores en el backend, y 
            //llama la accion de falla ante dicho caso.
            return Observable.concat(
                Observable.defer(() => axios.get(`http://www.mocky.io/v2/5a188b4c3000007d0063f42b`))
                    .retry(5).mergeMap(response =>
                        Observable.concat(
                            Observable.of(actions.fetchTodosSucceeded(response.data)),
                        )
                    ).catch(error => Observable.concat(
                        Observable.of(actions.fetchTodosFailed(error)),
                    ))
            )
        })
)

const addTodoEpic = (action$, store) => (
    action$.ofType(actionTypes.TODO_ADD_SAVE).map(acton => {
        let id = store.getState().todo.todos.reduce((acc, next) => next.id > acc ? next.id : acc, 0) + 1
        const todo = {
            id,
            description: store.getState().todoAdd.description,
            done: false
        }
        return actions.todoSaveSucceeded(todo)
    })
)

export default combineEpics(getTodosEpic, addTodoEpic)