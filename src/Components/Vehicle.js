import React from 'react'
import './Vehicle.css'
export default function Vehicle(props) {
    
    
    if(Object.keys(props.data).length !== 0){
        const vehicleInfo = props.data;
        return (
            <div>
                <div className="vehicle__info-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Engine</th>
                                <th>MPG</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                <td>{vehicleInfo.years[0].year}</td>
                                <td>{vehicleInfo.make.name}</td>
                                <td>{vehicleInfo.model.name}</td>
                                <td>{vehicleInfo.engine.name}</td>
                                <td>City: {vehicleInfo.mpg.city}/Hwy: {vehicleInfo.mpg.highway}</td>
                                <td>{vehicleInfo.categories.vehicleType}</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
     }
}

/*
    "data": {
        "year": 2015,
        "make": "CHEVROLET",
        "model": "EQUINOX",
        "manufacturer": "GENERAL MOTORS",
        "engine": "L4, 2.4L; DOHC; 16V; DI; FFV",
        "trim": "LTZ",
        "transmission": "AUTOMATIC"
    }
*/