import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { UserContext } from '../../App'
import MyNavbar from '../MyNavbar/MyNavbar';

const AllBookings = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allBookings, setAllBookings] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/allBookings')
            .then(res => res.json())
            .then(data => {
            setAllBookings(data)
            })
    }, [])
    
    console.log(allBookings)
    
    return (
        
        <div>
            <MyNavbar></MyNavbar>
            <h1 className="text-center m-3">Welcome {loggedInUser.name} </h1>
            <h4 className="text-center">Total Bookings {allBookings.length}</h4>
            
            {
            
                allBookings.map(booking => <div style={{textAlign: 'center', backgroundColor: 'black', padding:'40px',color:'white', width:'60%', marginLeft:'20%', marginBottom:'5%', borderRadius:'15px'}}>
                    <p>User Email: {booking.email}</p>
                    <p>Resort : {booking.resort} , {booking.district}</p>
                    <p>Total Cost: {booking.livingCost} BDT</p>
                    <p>Duration: {booking.day} Days</p>
                    <p>Booking Time: {(new Date(booking.bookingDate).toDateString('dd-mm-yyyy'))}</p>
                    
                
                   </div>)
            
            }
            
        </div>
    )
}

export default AllBookings
