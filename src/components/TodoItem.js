import React from 'react'
import { List, Button } from 'semantic-ui-react'



const TodoItem = props => (
    <List.Item onClick={props.onTodoClick}>
        <List.Content floated='right'>
            <Button color='red' onClick={props.onDeleteClicked}>Eliminar</Button>
        </List.Content>
        <List.Content>
            <List.Header as='a'>{props.todo.description}</List.Header>
            <List.Description>{props.todo.done ? 'COMPLETADO' : 'POR HACER'}</List.Description>
        </List.Content>
    </List.Item>
)

export default TodoItem