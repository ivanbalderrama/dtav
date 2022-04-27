import React from 'react'
import './Vehicle.css'
export default function Vehicle(props) {
    console.log(props.data);
    if(Object.keys(props.data).length !== 0){
        const vehicleInfo = props.data;
        return (
            <div>
                <div className="vehicle__info-container">
                    <div className="table-container">
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
                                    <td>{vehicleInfo.categories.vehicleStyle}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mech__specs-container'>
                        <ul>
                            <li><strong>Drive Type: </strong>{vehicleInfo.drivenWheels}</li>
                            <li><strong>Horsepower: </strong>{vehicleInfo.engine.horsepower}</li>
                            <li><strong>Torque: </strong>{vehicleInfo.engine.torque}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}