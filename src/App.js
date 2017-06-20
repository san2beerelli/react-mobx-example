import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostList from './modules/posts/PostList';
import PostDetails from './modules/posts/PostDetails';
import PostStore from './store/PostStore';
// import TodoStore from './store/TodoStore';
// import TodoList from './modules/TodoList';

class App extends Component {
    constructor(props){
        super(props);
    }
    pageRenderer(match){
        console.log(match)
        return <PostDetails/>
    }
    render () {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <Route exact path="/" render={() => <PostList postStore={PostStore} />}/>
                        <Route path="/post/" render={
                            ({match}) => (this.pageRenderer(match))
                        }/>
                    </div>
                </Router>
                {/*<TodoList store={ TodoStore }/>*/}
            </MuiThemeProvider>
        )
    }
}

export default App