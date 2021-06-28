import React, { useState } from 'react'
import { useEffect } from 'react';
import MyNavbar from '../../MyNavbar/MyNavbar'
import Card from '../Card/Card';


const Sajek = () => {
    
        const [resorts, setResorts] = useState([]);
    
    useEffect(() => {
        fetch('https://secret-coast-76571.herokuapp.com/resorts')
            .then(res => res.json())
            .then(data => setResorts(data))
    }, [])
    
    
    const sajekResorts = resorts.filter(rs => rs.district === 'SAJEK')
    
    return (
           <div className="overflow-hidden">
            <MyNavbar></MyNavbar>
            <h1 className="m-3 text-center">Resorts In Sajek</h1>
            
            <div className="row">
                {

                    sajekResorts.map(resort => <Card resort={resort}></Card>)

                }
            </div>
        </div>
    )
}

export default Sajek
