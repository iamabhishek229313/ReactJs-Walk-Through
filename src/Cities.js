import React, { Component } from 'react';

class Cities extends Component {
    render() {
        const { name, destination, country } = this.props;
        return (
            <div className="cities">
                <div>Name :  {name}</div>
                <div>Destination : {destination}</div>
                <div>Country : {country}</div> 
            </div>
        );
    }
}

export default Cities ;