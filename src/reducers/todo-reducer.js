import { actionTypes } from '../actions/todo-actions';

export const selectionFilters = {
    ALL: 'ALL',
    DONE: 'DONE',
    TODO: 'TODO'
}

const defaultTodoState = {
    todos: [],
    filter: {
        selectionFilter: selectionFilters.ALL,
        search: ''
    }
}
const todoReducer = (state = defaultTodoState, action) => {

    switch (action.type) {
        case actionTypes.TODO_FETCH_TODOS_SUCCEEDED:
            return {
                ...state,
                todos: action.data,
            }
        case actionTypes.TODO_TOGGLE:
            const todos = state.todos.map(t => t.id === action.todo.id ? { ...action.todo, done: !action.todo.done } : t)
            return {
                ...state,
                todos
            }
        case actionTypes.TODOS_SEARCH_CHANGED:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    search: action.value,
                }
            }
        case actionTypes.TODO_SELECTION_FILTER_CHANGED:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    selectionFilter: action.value
                }
            }
        case actionTypes.TODO_ADD_SAVE_SUCCEEDED:
            return {
                ...state,
                todos: [...state.todos, action.data]
            }
        default:
            return state
    }
}

export default todoReducer;