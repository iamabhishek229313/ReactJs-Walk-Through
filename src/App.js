import React ,{Component} from 'react';
import Cities from './Cities' ;
import './AddCity' ;
import './App.css';
import AddCity from './AddCity';



class App extends Component {
  state = {
    cities : [
      { name : "Giridih" , destination : 'Khandoli' , country : "India" ,id  : 1},
      { name : "Giridih" , destination : 'Khandoli' , country : "India" , id : 2},
      { name : "Giridih" , destination : 'Khandoli' , country : "India" , id : 3},
      { name : "Giridih" , destination : 'Khandoli' , country : "India" , id : 4}
    ]
  };
  
  addCity = (city) =>{
    city.id = Math.random() ;
    let newCities = [...this.state.cities , city];
    this.setState({
      cities : newCities
    });
  }

  deleteCity = (id) => {
    let newCities = this.state.cities.filter( city =>{
      return city.id !== id ; // return false for the id that we want to delete there .
    });

    this.setState({
      cities : newCities 
    });
  }

  render() {
    return (
      <div className= "App">
        <h1> 
          First Page In React JS and the first walk-through into this.
        </h1>
        <p>Welcome</p>
        <Cities deleteCity={this.deleteCity} cities = {this.state.cities} />
        <AddCity newCity={this.addCity}/>
      </div>
    );
  }
}

export default App;
