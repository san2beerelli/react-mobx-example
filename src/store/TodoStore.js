import { computed, observable, action } from 'mobx';
import Todo from './Todo';

class TodoStore{
    @observable todos=[]
    @observable filter = ""
    @action async fetchAll(){
        const response = await fetch("http://jsonplaceholder.typicode.com/todos");
        const status = await response.status;
        const data = await response.json();
        this.todos = data;
    }
    @computed get filterTodos(){
        let matchesFilter = new RegExp(this.filter,"i")
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.title))
    }
    createTodos(value){
        this.todos.push(new Todo(value));
    }
    clearClick = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.completed)
        this.todos.replace(incompleteTodos)
    }
}

export default new TodoStore;