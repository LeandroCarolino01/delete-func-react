import React, { Component } from 'react';
import Ideas from './components/ideas'
import './App.css';

class App extends Component {
  state = {
    ideas: [
      {id: 1, content: 'Create an app', name: 'generate money'},
      {id: 2, content: 'study physics', name: 'understand quantum'},
      {id: 3, content: 'study history', name: 'archeology'},
      {id: 4, content: 'whatever', name: 'what'}
    ]
  }

  deleteIdea = (id) => {
    const ideas = this.state.ideas.filter(idea => {
      return idea.id !==id
    });
    this.setState({
      ideas
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Ideas</h1>
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </div>
    );
  }
}

export default App;
