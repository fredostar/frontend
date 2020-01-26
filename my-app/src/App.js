import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/posts';

class App extends Component{

  state = {
    posts: []
  }

  componentDidMount(){
    fetch('localhost:8080/posts')
    .then(res => res.json())
    .then((data) => {

      this.setState({ posts: data})

    }).catch(console.log)
  }

  render () {
   return (<Posts posts={this.state.posts} />);
  }
}

export default App;
