import React, { useState } from 'react'
import { useEffect } from 'react';
import MyNavbar from '../../MyNavbar/MyNavbar'
import Card from '../Card/Card';


const Barisal = () => {
     const [resorts, setResorts] = useState([]);
    
    useEffect(() => {
        fetch('https://secret-coast-76571.herokuapp.com/resorts')
            .then(res => res.json())
            .then(data => setResorts(data))
    }, [])
    
    
    const barisalResorts = resorts.filter(rs => rs.district === 'BARISAL')

    
    return (

         <div className="overflow-hidden">
            <MyNavbar></MyNavbar>
            <h1 className="m-3 text-center">Resorts In Barisal</h1>
            
        <div className="row">
            {

                barisalResorts.map(resort => <Card resort={resort}></Card>)

            }
        </div>
        </div>
    )
}

export default Barisal
