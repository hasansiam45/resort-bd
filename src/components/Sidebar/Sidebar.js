import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Sidebar.css'
const Sidebar = () => {
    
    const [allAdmins, setAllAdmins] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    useEffect(() => {
        fetch('http://localhost:5000/admins')
            .then(res => res.json())
            .then(data => setAllAdmins(data))
    }, [])

    const isAdmin = allAdmins.find(admin => admin.email == loggedInUser.email)
    console.log(isAdmin)
    return (
        
        <div className="dashboard-sidebar">
            <ul>
                
              {isAdmin &&   <div>
                <li>
                    <Link to="/addResorts">Add Resorts</Link>
                </li>
                
                <li>
                    <Link to="/manageResorts">Manage Resorts</Link>
                </li>
                
                <li>
                    <Link to="/allBookings">See All Bookings</Link>
                </li>
                
                <li>
                    <Link to="/addAdmin">Add Admin</Link>
                </li>
                </div>}
                
                
               {!isAdmin &&  <div>
                
                    <li>
                    <Link to="/bookings">My Bookings</Link>
                    </li>
                    
                    <li>
                    <Link to="/addReviews">Add Review</Link>
                    </li>
                
                </div>}
            
            </ul>
        </div>
    )
}

export default Sidebar
