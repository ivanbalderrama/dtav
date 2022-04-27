import React, { useState} from 'react';
import Vehicle from './Vehicle'
import VehicleHistory from './VehicleHistory'
import speedometer from '../images/speedometer.jpg'
import axios from 'axios';
import './Data.css'

export default function Data() {
    const [vin, setVin] = useState();
    const [vehicle, setVehicle] = useState({});
    const [searchedHistory, setSearchedHistory] = useState([])
    

    const apiUrl = `https://auto.dev/api/vin/${vin}?apikey=ZrQEPSkKYi5pdmFuMDkwN0BnbWFpbC5jb20=`;

    function fetchData() {
        console.log(apiUrl);
        axios
            //Get Data from url
            .get(apiUrl)
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
            setSearchedHistory(searchedHistory => [...searchedHistory, vehicle]);
        }
        
    };
    /*--------------------------------------------------------------------------------------------
    const [searchedHistory, setSearchedHistory] = useState([])
    useEffect(() => {
        const storeVehicle = [];
        storeVehicle.push(vehicle)
        setSearchedHistory(storeVehicle);
    }, [vehicle])
     --------------------------------------------------------------------------------------------*/
    return (
        <div>
            <div className="image-container">
                <img className='speedometer-image' src={speedometer} alt="speedometer" />
            </div>
            <div className="vinInfo-container">
                <h2>Search Vehicle</h2>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <input type="text" required placeholder="Enter VIN Number" maxLength="17" value={vin} onChange={(e) => setVin(e.target.value)} />
                    <button className="vinBtn" type='submit'>Submit</button>
                </form>
            </div>
            <div>
                <Vehicle data={vehicle}/>
            </div>
            <div className="vehicle__history-container">
                <VehicleHistory searched={searchedHistory} />
            </div>
        </div>
    )
}