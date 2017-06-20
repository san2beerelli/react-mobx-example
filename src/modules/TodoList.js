import React, { Component } from 'react'
import { observer } from 'mobx-react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

@observer
class TodoList extends Component {
    componentWillMount(){
        this.props.store.fetchAll();
    }
    createNew(e){
        if(e.which === 13){
           this.props.store.createTodos(e.target.value);
           e.target.value = "";
        }
    }
    filter(e){
        this.props.store.filter = e.target.value;
    }
    toggleComplete(todo){
        todo.completed = !todo.completed;
    }
   
    render () {
        const {filter, todos, filterTodos } = this.props.store;
        const todosList = filterTodos.map((todo) => {
            return <li key={todo.id} > 
                 <Checkbox label={todo.title} checked={todo.completed} onCheck={this.toggleComplete.bind(this,todo)}/>
            </li>
        })
        return (
            <div>
                <h1>
                    Todos
                </h1>
                <TextField hintText="Create Todos" onKeyPress={this.createNew.bind(this)} />
                <TextField hintText="Search Todos" onChange={this.filter.bind(this)} />
                <ul style={{listStyleType: "none"}}>
                    {todosList}
                </ul>
                <FlatButton label="Clear Completed" primary={true} onTouchTap={this.props.store.clearClick} />
            </div>
        )
    }
}

export default TodoList