import  React, { Component } from 'react';

class AddCity extends Component {
    state ={
        name : null ,
        destination : null ,
        country : null
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() ;
        this.props.newCity(this.state);
    }

    render() {
        return (
            <div className="Add-City">
                <form onSubmit ={this.handleSubmit}>
                    <label htmlFor="name">City</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="name">Destination</label>
                    <input type="text" id="destination" onChange={this.handleChange}/>
                    <label htmlFor="name">Country</label>
                    <input type="text" id="country" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddCity  