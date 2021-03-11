import React, { useState, useEffect } from 'react';

import Testing from '../Testing/index';

export default function Location(){
    const [location, setLocation] = useState({});

    useEffect(() => {
        navigator.geolocation.watchPosition(handlePositionReceived)
    }, []);

    function handlePositionReceived({ coords }){
        const { latitude, longitude } = coords;
        setLocation({latitude, longitude})
    }

    return (
        <section>
            <div class="text-title">
                <h4>Localização</h4>
                <p>Aonde estou ?</p>
            </div>  
            <ul> 
                <li>Latitude: {location.latitude}</li>
                <li>Longitude: {location.longitude}</li> 
            </ul>  
            <Testing/>
        </section>   
    );
}