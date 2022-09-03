import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import MyNavbar from '../../MyNavbar/MyNavbar';

const ResortDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const [allResortDetails,setAllResortDetails] = useState([]);
    useEffect(() => {
        fetch('https://secret-coast-76571.herokuapp.com/resorts')
            .then(res => res.json())
            .then(data => setAllResortDetails(data))
    }, [])
    const resortDetails = allResortDetails.find(details => details._id === id)
    const handleClick = (id) => {
        history.push(`/book/${id}`)
    }
    return (
        <div>
            <MyNavbar></MyNavbar>
            <Row style={{padding: '5% 2%'}}>
                <Col md="6" className='details-col'>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img style={{width: '400px', height: '400px'}} src={resortDetails?.img} alt="Resort"/>
                    </div>
                </Col>
                <Col md="6" className='details-col'>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{paddingTop: '50px'}}>
                            <p><span style={{fontSize: '20px', fontWeight: 'bold'}}> Resort name: </span>{resortDetails?.name}</p>
                            <p><span style={{fontSize: '20px', fontWeight: 'bold'}}> Location: </span> {resortDetails?.district}</p>
                            <p><span style={{fontSize: '20px', fontWeight: 'bold'}}> Description: </span> {resortDetails?.desc}</p>
                            <p><span style={{fontSize: '20px', fontWeight: 'bold'}}> Price: </span> {resortDetails?.price} BDT/day</p>
                            <p><span style={{fontSize: '20px', fontWeight: 'bold'}}> Contact: </span> {resortDetails?.contact}</p>
                            <button className='btn btn-success text-white' onClick={()=>handleClick(resortDetails._id)}>Book Now</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ResortDetails
