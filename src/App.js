import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Page from './components/Page';
import Footer from './components/Footer';
import InputForm from './InputForm'



class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
        <div className="App-body">
          <Page/>
        </div>
        <div>
          <InputForm/>
        </div>
          <footer className="App-footer">
            <Footer/>
          </footer>
      </div>
    );
  }
}

export default App;
