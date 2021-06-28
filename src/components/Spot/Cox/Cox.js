import React, { useState } from 'react'
import { useEffect } from 'react';
import MyNavbar from '../../MyNavbar/MyNavbar'
import Card from '../Card/Card';


const Cox = () => {
    
    const [resorts, setResorts] = useState([]);
    
    useEffect(() => {
        fetch('https://secret-coast-76571.herokuapp.com/resorts')
            .then(res => res.json())
            .then(data => setResorts(data))
    }, [])
    
    
    const coxResorts = resorts.filter(rs => rs.district === `COX'S BAZAR`)
    
    return (
             <div className="overflow-hidden">
            <MyNavbar></MyNavbar>
            <h1 className="m-3 text-center">Resorts In Cox's Bazar</h1>
            
            <div className="row">
                {

                    coxResorts.map(resort => <Card resort={resort}></Card>)

                }
            </div>
        </div>
    )
}

export default Cox
