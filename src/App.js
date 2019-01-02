import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
        <div className="App-body">
          <Landing/>
        </div>
          <footer className="App-footer">
            <Footer/>
          </footer>
      </div>
    );
  }
}

export default App;
