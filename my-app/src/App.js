import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() extends Component {

  state = {
    posts: []
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((data) => {

      this.setState({ posts: data})

    }).catch(console.log)
  }


  return (

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Mon titre</h5>
        <p class ="card-text">Hello, voici mon post</p>
      </div>
    </div>
  );
}

export default App;
