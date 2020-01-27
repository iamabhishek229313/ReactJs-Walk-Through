import React ,{Component} from 'react';
import Cities from './Cities' ;
import './App.css';



class App extends Component {

  
  render() {
    return (
      <div className= "App">
        <h1> 
          First Page In React JS and the first walk-through into this.
        </h1>
        <p>Welcome</p>
        <Cities name = "Giridih"  destination ="Khandoli" country = "India"/>
      </div>
    );
  }
}

export default App;
