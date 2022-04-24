import React, { useState} from 'react';
import Vehicle from './Vehicle'
import speedometer from '../images/speedometer.jpg'
import axios from 'axios';
import './Data.css'

export default function Data() {
    const [vin, setVin] = useState();
    const [vehicle, setVehicle] = useState([]);

    
    const apiUrl = `http://api.carmd.com/v3.0/decode?vin=${vin}`;
    
    function fetchData() {
        axios
            //Get Data from url
            .get(apiUrl, {
                headers: {
                "content-type":"application/json",
                "authorization":"Basic ZWRmNTkxN2ItMmY1OC00MWQwLThkM2EtYTI5Mjg5OWMwNzE4",
                "partner-token":"a24c632a6872438599df4d14f933cdda"
            }
            })

            //If succeeds then log to console/setCustomers
            .then((res) => {
                console.log(res);
                setVehicle(res.data);
            })
            //otherwise catch error and console log
            .catch((err) => {
                console.log(err);
            });
    }

    function handleSubmit(e) {
        if (vin.length !== 17) {
            alert("Field must contain 17 letters and numbers.");
        } else {
            e.preventDefault();
            fetchData();
        }
    };
    return (
        <div>
            <div className="image-container">
                <img className='speedometer-image' src={speedometer} alt="speedometer" />
            </div>
            <div className="vinInfo-container">
                <h2>Search Vehicle</h2>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <label>VIN Number</label>
                    <input type="text" required placeholder="Enter VIN Number" value={vin} onChange={(e) => setVin(e.target.value)} />
                    <button className="vinBtn" type='submit'>Submit</button>
                    <p>(Only vehicles from 1981 and later)</p>
                </form>
           </div>
           <div>
               <Vehicle data={vehicle.data}/>
           </div>
        </div>
    )
}