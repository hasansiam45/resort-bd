import React, { useState } from 'react'
import { useEffect } from 'react';
import MyNavbar from '../../MyNavbar/MyNavbar'
import Card from '../Card/Card';


const Bandorban = () => {
     const [resorts, setResorts] = useState([]);
    
    useEffect(() => {
        fetch('https://secret-coast-76571.herokuapp.com/resorts')
            .then(res => res.json())
            .then(data => setResorts(data))
    }, [])
    
    
    const bandorbanResorts = resorts.filter(rs => rs.district === 'BANDORBAN')

    
    return (

         <div className="overflow-hidden">
            <MyNavbar></MyNavbar>
            <h1 className="m-3 text-center">Resorts In Bandorban</h1>
            
        <div className="row">
            {

                bandorbanResorts.map(resort => <Card resort={resort}></Card>)

            }
        </div>
        </div>
    )
}

export default Bandorban
