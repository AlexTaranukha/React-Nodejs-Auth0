import React, { Component } from 'react';
import NavBar from './NavBar/NavBar.js';
import Questions from './Questions/Questions.js'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Questions/>
      </div>
    );
  }
}

export default App;
