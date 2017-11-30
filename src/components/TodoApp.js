import React, { Component } from 'react'
import { Header, Icon, Segment, List } from 'semantic-ui-react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import TodoHeader from './TodoHeader'
import { connect } from 'react-redux'
import { actions } from '../actions/todo-actions'

class TodoApp extends Component {

    componentDidMount() {
        this.props.loadTodos()
    }

    filterTodos() {
        let filteredTodos = this.props.todos
        if (this.props.search) {
            filteredTodos = filteredTodos.filter(t =>
                t.description.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1)
        }
        if(this.props.selection === 'DONE'){
            filteredTodos = filteredTodos.filter(t => t.done)
        }
        if(this.props.selection === 'TODO'){
            filteredTodos = filteredTodos.filter(t => !t.done)
        }
        return filteredTodos
    }

    render() {
        return (
            <div>
                <AddTodo />
                <div style={{ marginTop: '20px' }} >
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='users' circular />
                        <Header.Content>
                            Pythonpy meetup
              </Header.Content>
                    </Header>
                </div>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>
                    <Segment raised >
                        <TodoHeader />
                        <h2>TODOS</h2>
                        <div>
                            <List divided verticalAlign='middle'>
                                {
                                    this.filterTodos().map(
                                        data => <TodoItem
                                            key={data.id}
                                            todo={data}
                                            onTodoClick={() => { this.props.toggleTodo(data) }}
                                        />)}
                            </List>
                        </div>
                    </Segment>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todo.todos,
    search: state.todo.filter.search,
    selection: state.todo.filter.selectionFilter
})

const mapDispatchToProps = dispatch => ({
    loadTodos: () => dispatch(actions.fetchTodos()),
    toggleTodo: (todo) => dispatch(actions.toggleTodo(todo))

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
