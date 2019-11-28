import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './pages/Homepage';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Header/>
        <Home/>
      </div>
     );
  }
}
 
export default App;
