import React, { useState } from 'react'
import { useEffect } from 'react';
import MyNavbar from '../../MyNavbar/MyNavbar'
import Card from '../Card/Card';

const Dhaka = () => {
    
    const [resorts, setResorts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/resorts')
            .then(res => res.json())
            .then(data => setResorts(data))
    }, [])
    
    
    const dhakaResorts = resorts.filter(rs => rs.district === 'DHAKA')

    
    
    
    return (
        
        <div>
            <MyNavbar></MyNavbar>
            <h1 className="m-3 text-center">Resorts In Dhaka</h1>
        <div className="row">
            {

                dhakaResorts.map(resort => <Card resort={resort}></Card>)

            }
        </div>
        </div>
    )
}

export default Dhaka
