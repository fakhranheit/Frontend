import React,{Component} from 'react';
import './App.css';
import Header from './components/header'
import Homepage from './pages/homepage';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Header/>
        <Homepage/>
      </div>
     );
  }
}
 
export default App;
