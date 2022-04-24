import React from 'react'
import './Vehicle.css'
export default function Vehicle(props) {
    if (props.data !== undefined) {
        return (
            <div>
                <div className="vehicle__info-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Manufacturer</th>
                                <th>Engine</th>
                                <th>Trim</th>
                                <th>Transmission</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.data.year}</td>
                                <td>{props.data.make}</td>
                                <td>{props.data.model}</td>
                                <td>{props.data.manufacturer}</td>
                                <td>{props.data.engine}</td>
                                <td>{props.data.trim}</td>
                                <td>{props.data.transmission}</td>
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