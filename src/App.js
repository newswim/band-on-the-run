import React, { Component } from 'react';
import FormInput from './components/FormInput'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="hero-font">Band On The Run</h1>
        </header>
        <section>
          <kbd>This component is using the new `useState` API: </kbd>
          <FormInput />
        </section>
      </div>
    );
  }
}

export default App;
