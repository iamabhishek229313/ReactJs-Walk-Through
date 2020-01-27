import React ,{Component} from 'react';
import Cities from './Cities' ;
import './App.css';



class App extends Component {
  state = {
    cities : [
      { name : "Giridih" , destination : 'Khandoli' , country : "India" ,id  : 1},
      { name : "Giridih" , destination : 'Khandoli' , country : "India" , id : 2},
      { name : "Giridih" , destination : 'Khandoli' , country : "India" , id : 3},
      { name : "Giridih" , destination : 'Khandoli' , country : "India" , id : 4}
    ]
  };
  
  render() {
    return (
      <div className= "App">
        <h1> 
          First Page In React JS and the first walk-through into this.
        </h1>
        <p>Welcome</p>
        <Cities cities = {this.state.cities} />
      </div>
    );
  }
}

export default App;
