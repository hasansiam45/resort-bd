import React, { useState } from 'react'
import { useEffect } from 'react';
import MyNavbar from '../../MyNavbar/MyNavbar'
import Card from '../Card/Card';

const Chittagong = () => {
    
         const [resorts, setResorts] = useState([]);
    
    useEffect(() => {
        fetch('https://secret-coast-76571.herokuapp.com/resorts')
            .then(res => res.json())
            .then(data => setResorts(data))
    }, [])
    
    
    const chittagongResorts = resorts.filter(rs => rs.district === 'CHITTAGONG')
    
    return (
          <div className="overflow-hidden">
            <MyNavbar></MyNavbar>
            <h1 className="m-3 text-center">Resorts In Chittagong</h1>
            
        <div className="row">
            {

                chittagongResorts.map(resort => <Card resort={resort}></Card>)

            }
        </div>
        </div>
    )
}

export default Chittagong
