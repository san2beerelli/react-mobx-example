import { computed, observable, action } from 'mobx';

class PostStore{
    @observable posts=[]
    @action async fetchPosts(){
        const response = await fetch("http://jsonplaceholder.typicode.com/posts");
        const status = await response.status;
        const data = await response.json();
        this.posts = data;
    }

}

export default new PostStore;