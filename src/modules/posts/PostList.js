import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@observer
class PostList extends Component {
    constructor(){
        super();
       // this.listItemClickHandler = this.listItemClickHandler.bind(this);
    }
    listItemClickHandler(post){
        console.log(post.title);
    }
     componentWillMount(){
        this.props.postStore.fetchPosts();
    }

    render () {
        const { posts } = this.props.postStore;
        const postListItems = posts.map((post) => {
            return <div key={post.id}>
                     <Divider />
                     <ListItem primaryText={post.title} containerElement={<Link to={`/post/${post.id}`} />} />
                 </div> 
        })
        return (
        <List>
            {postListItems}
            <Divider />
        </List>
        )
    }
}

export default PostList