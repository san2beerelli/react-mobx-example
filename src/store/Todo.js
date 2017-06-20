import { computed, observable } from 'mobx';

class Todo{
    @observable title
    @observable id
    @observable completed

    constructor(value){
        this.title = value;
        this.id = Date.now();
        this.completed = false;
    }

}

export default Todo;