import React from 'react'
import { Button, Grid, Menu, Icon, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { actions } from '../actions/todo-actions'
import { selectionFilters } from '../reducers/todo-reducer'

const TodoHeader = props => (
    <Grid columns={3} style={{ marginTop: '10px' }}>
        <Grid.Column width={3}>
            <Button onClick={props.addTodoClicked} basic color='blue'> Agregar Todo </Button>
        </Grid.Column>
        <Grid.Column width={10}>
            <Input value={props.search} onChange={(event, data) => props.searchChanged(data.value)} fluid focus placeholder='Search...' />
        </Grid.Column>
        <Grid.Column width={3} style={{ textAlign: 'right' }}>
            <Menu icon compact >
                <Menu.Item
                    name='video play'
                    active={props.selection === selectionFilters.ALL}
                    onClick={() => props.selectionFilterChanged(selectionFilters.ALL)}>
                    <Icon name='list ul' />
                </Menu.Item>
                <Menu.Item
                    name='calendar outline'
                    active={props.selection === selectionFilters.TODO}
                    onClick={() => props.selectionFilterChanged(selectionFilters.TODO)}>
                    <Icon name='calendar outline' />
                </Menu.Item>
                <Menu.Item
                    name='video camera'
                    active={props.selection === selectionFilters.DONE}
                    onClick={() => props.selectionFilterChanged(selectionFilters.DONE)}>
                    <Icon name='checked calendar' />
                </Menu.Item>
            </Menu>
        </Grid.Column>
    </Grid>

)

const mapStateToProps = state => ({
    search: state.todo.filter.search,
    selection: state.todo.filter.selectionFilter
})

const mapDispatchToProps = dispatch => ({
    searchChanged: (value) => dispatch(actions.searchChanged(value)),
    selectionFilterChanged: (value) => dispatch(actions.selectionFilterChanged(value)),
    toggleTodo: (todo) => dispatch(actions.toggleTodo(todo)),
    addTodoClicked: () => dispatch(actions.addRequested())

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader)