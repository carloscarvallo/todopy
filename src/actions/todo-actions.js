export const actionTypes = {
    TODO_FETCH_TODOS: 'TODO_FETCH_TODOS',
    TODO_FETCH_TODOS_SUCCEEDED: 'TODO_FETCH_TODOS_SUCCEEDED',
    TODO_FETCH_TODOS_FAILED: 'TODO_FETCH_TODOS_FAILED',

    TODO_TOGGLE: 'TODO_TOGGLE',

    TODOS_SEARCH_CHANGED: 'TODOS_SEARCH_CHANGED',
    TODO_SELECTION_FILTER_CHANGED: 'TODO_SELECTION_FILTER_CHANGED',

    TODO_ADD_REQUESTED: 'TODO_ADD_REQUESTED',

    TODO_ADD_DESCRIPTION_CHANGED: 'TODO_ADD_DESCRIPTION_CHANGED',

    TODO_ADD_SAVE: 'TODO_ADD_SAVE',
    TODO_ADD_CANCEL: 'TODO_ADD_CANCEL',
    TODO_ADD_SAVE_SUCCEEDED: 'TODO_ADD_SAVE_SUCCEEDED',
    TODO_ADD_SAVE_FAILED: 'TODO_ADD_SAVE_FAILED'
}

export const actions = {
    fetchTodos: () => ({
        type: actionTypes.TODO_FETCH_TODOS
    }),
    fetchTodosSucceeded: data => ({
        type: actionTypes.TODO_FETCH_TODOS_SUCCEEDED,
        data
    }),
    fetchTodosFailed: error => ({
        type: actionTypes.TODO_FETCH_TODOS_FAILED
    }),
    searchChanged: value => ({
        type: actionTypes.TODOS_SEARCH_CHANGED,
        value
    }),
    selectionFilterChanged: value => ({
        type: actionTypes.TODO_SELECTION_FILTER_CHANGED,
        value
    }),
    addRequested: () => ({
        type: actionTypes.TODO_ADD_REQUESTED
    }),
    descriptionChanged: value => ({
        type: actionTypes.TODO_ADD_DESCRIPTION_CHANGED,
        value
    }),
    todoSave: () => ({
        type: actionTypes.TODO_ADD_SAVE
    }),
    todoCancel: () => ({
        type: actionTypes.TODO_ADD_CANCEL
    }),
    todoSaveSucceeded: data => ({
        type: actionTypes.TODO_ADD_SAVE_SUCCEEDED,
        data
    }),
    todoSaveFailed: error => ({
        type: actionTypes.TODO_ADD_SAVE_FAILED
    }),
    toggleTodo: todo => ({
        type: actionTypes.TODO_TOGGLE,
        todo
    })
}