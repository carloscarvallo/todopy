import React from 'react'
import { Modal, Input, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { actions } from '../actions/todo-actions'

const AddTodo = props => (
    <Modal open={props.open}>
        <Modal.Header>Agregar Todo</Modal.Header>
        <Modal.Content>
            <Input
                value={props.description}
                onChange={(event, data) => props.onDescripcionChanged(data.value)}
                focus
                fluid
                iconPosition='left'
                placeholder='Descripcion del TODO'>
                <Icon name='checkmark' />
                <input />
            </Input>
        </Modal.Content>
        <Modal.Actions>
            <Button basic color='red' onClick={props.onCancel}>
                <Icon name='cancel' /> Cancelar
        </Button>
            <Button basic color='green' onClick={props.onSave}>>
                <Icon name='save' /> Guardar
        </Button>
        </Modal.Actions>
    </Modal>
)

const mapStateToProps = state => ({
    open: state.todoAdd.open,
    description: state.todoAdd.description
})

const mapDispatchToProps = dispatch => ({
    onDescripcionChanged: value => dispatch(actions.descriptionChanged(value)),
    onCancel: () => dispatch(actions.todoCancel()),
    onSave: () => dispatch(actions.todoSave())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)