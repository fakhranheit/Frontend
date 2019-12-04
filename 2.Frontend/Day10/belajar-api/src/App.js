import React, { Component } from 'react';
import Header from './components/header'
import Home from './pages/home'
import './App.css';

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