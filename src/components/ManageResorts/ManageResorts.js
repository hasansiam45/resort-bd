import React, { useState } from 'react'
import { useEffect } from 'react'
import MyNavbar from '../MyNavbar/MyNavbar'

const ManageResorts = () => {
    
    const [resorts, setResorts] = useState([])
    
    useEffect(() => {
        fetch('https://secret-coast-76571.herokuapp.com/resorts')
            .then(res => res.json())
            .then(data => setResorts(data))
    }, [])
    
    const handleDelete = id => {
    
        fetch(`https://secret-coast-76571.herokuapp.com/delete/${id}`, {
        
        method: 'DELETE'
        
        })
            .then(res => res.json())
            .then(result => {
            console.log('deleted',result)
            })
console.log(id)
    
    }
    
    return (
        
        <div>
            
            <MyNavbar></MyNavbar>
            
            {
            resorts.map(resort => <div className = "row text-center bg-success p-2 border-bottom border-dark font-weight-bold text-white" >
                
                <span className="col-md-4">{resort.name} , {resort.district}</span> <span className="col-md-4">{resort.price} BDT/day</span> <span className="col-md-4"> <button className="btn btn-danger" onClick={() => handleDelete(resort._id)}>Delete</button> </span>
                </div> )
            }
            
        </div>
    )
}

export default ManageResorts
