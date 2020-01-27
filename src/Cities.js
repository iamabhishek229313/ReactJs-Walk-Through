import React, { Component } from 'react';

class Cities extends Component {
    render() {
        const { cities } = this.props; // De-Structurelisation
        const htmlCitiesList = cities.map(city => {
            return (
                <div className="cities">
                    <div>Name :  {city.name}</div>
                    <div>Destination : {city.destination}</div>
                    <div>Country : {city.country}</div>
                </div>
            );
        });

        return (
            <div className="City-List">
                {htmlCitiesList}
            </div>
        );
    }
}

export default Cities;