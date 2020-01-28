import React from 'react';

const Cities = (props) => { 
    /*
    If we want to use destruturing the props at the paramter of the functional 
    component then we can do like
const Cities = ({cities}) => {
    ........
}
    */
    const { cities } = props; // De-Structurelisation
    const htmlCitiesList = cities.map(city => {
        return (
            <div className="cities" key={city.id} >
                <hr></hr>
                <div>Name :  {city.name}</div>
                <div>Destination : {city.destination}</div>
                <div>Country : {city.country}</div>
                <hr></hr>
            </div>
        );
    });
    return (
        <div className="City-List">
            {htmlCitiesList}
        </div>
    );
}

// class Cities extends Component {
//     render() {
//         const { cities } = this.props; // De-Structurelisation
//         const htmlCitiesList = cities.map(city => {
//             return (
//                 <div className="cities">
//                 <hr></hr>
//                     <div>Name :  {city.name}</div>
//                     <div>Destination : {city.destination}</div>
//                     <div>Country : {city.country}</div>
//                 <hr></hr>
//                 </div>
//             );
//         });

//         return (
//             <div className="City-List">
//                 {htmlCitiesList}
//             </div>
//         );
//     }
// }
export default Cities;