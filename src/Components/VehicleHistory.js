import React from 'react';

export default function VehicleHistory(props) {
    if(Array.isArray(props.searched) && props.searched.length > 0){
        return (
            <div>
                <div className="title-container">
                    <h3>History</h3>
                </div>
                <hr />
                <div className="searched__vehicle-container">
                    {props.searched.map((data) => {
                        return (
                            <p>{data.years[0].year} {data.make.name} {data.model.name} {data.engine.name} {data.categories.vehicleStyle}</p>
                        )
                    })}
                </div>
            </div>
        )
                }
}