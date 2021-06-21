import React from 'react'
import MyNavbar from '../MyNavbar/MyNavbar'
import Sidebar from '../Sidebar/Sidebar'

const Dashboard = () => {
    return (
        <div>
            <MyNavbar></MyNavbar>
            <div className="row">
            <div className="col-md-3"><Sidebar></Sidebar></div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default Dashboard
