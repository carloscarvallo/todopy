import { actionTypes } from '../actions/todo-actions';


const defaultAddTodoState = {
    description: '',
    open: false
}
const todoAddReducer = (state = defaultAddTodoState, action) => {

    switch (action.type) {
        case actionTypes.TODO_ADD_REQUESTED:
            return {
                ...state,
                open: true,
                description: ''
            }
        case actionTypes.TODO_ADD_DESCRIPTION_CHANGED:
            return {
                ...state,
                description: action.value
            }
        case actionTypes.TODO_ADD_CANCEL:
            return {
                ...state,
                description: '',
                open: false
            }
        case actionTypes.TODO_ADD_SAVE_SUCCEEDED:
            return {
                ...state,
                open: false,
                description: ''
            }
        case actionTypes.TODO_ADD_SAVE_FAILED:
            return {
                ...state,
                open: false
            }
        default:
            return state
    }
}

export default todoAddReducer;