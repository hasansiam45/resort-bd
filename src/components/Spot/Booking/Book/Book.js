import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { UserContext } from '../../../../App';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useEffect } from 'react';
import MyNavbar from '../../../MyNavbar/MyNavbar';
import StripeCheckout from 'react-stripe-checkout';

const Book = () => {

    const { id } = useParams();
    const [formData,setFormData] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [allResortDetails,setAllResortDetails] = useState([]);

    useEffect(() => {
        fetch('https://secret-coast-76571.herokuapp.com/resorts')
            .then(res => res.json())
            .then(data => setAllResortDetails(data))
    }, [])
    
    const resortDetails = allResortDetails.find(details => details._id === id)
    
    const onSubmit = data => {
        alert('form submitted successfully');
        setFormData(data);
    }
    
    // payment system
    
    const onToken = (token) => {
        alert('Payment Successful')
        const day = formData.day
        const cost = resortDetails.price
        const livingCost = day * cost
        const bookingDetails = {name: formData.name || localStorage.getItem('username'), email: localStorage.getItem('loggedInUser'), resort: resortDetails?.name, district: resortDetails?.district, checkIn: formData.checkIn, livingCost, day,  bookingDate: new Date()}

        fetch('https://secret-coast-76571.herokuapp.com/addBookings', {
            method: 'POST',
            headers: {
            'content-type' : 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        
        }).then(res => {
            console.log(res)
        });
    }
    
    return (
        
        <div>
            <MyNavbar></MyNavbar>
      
            
            <div className="text-center">
                {!formData &&
                        
                        <form className="p-5 bg-success text-white" onSubmit={handleSubmit(onSubmit)}>
                        <h2>Please Fill Up the form</h2>
                    
                        <input className="m-1" defaultValue={resortDetails?.district} /> <br />

                        <input className="m-1" defaultValue={resortDetails?.name} /> <br />
                
                        <input className="m-1" defaultValue={`${resortDetails?.price} BDT/Day`} /> <br /> 
                
                        
                        <input className="m-1" type="text" placeholder="Your Name" {...register("name",{ required: true })} /> <br /> 
                
                        <input className="m-1" type="text" placeholder="Your Address" {...register("address", { required: true })} /> <br />
                        
                        <input className="m-1 px-2" type="date" placeholder="Enter Check In Date" {...register("checkIn", { required: true })} /> <br />
                        
                
                        <input className="m-1" type="number" min="1" placeholder="Enter amount of day" {...register("day",{ required: true })} /> <br /> 
                
                
                        <input className="m-1" type="number" placeholder="Your Phone Number" {...register("phone",{ required: true })} /> <br /> <br />
                
                
                
                
                
                        {errors.name && <p className="text-danger">Name is required</p>}
                        {errors.address && <p className="text-danger">Address is required</p>} 
                        {errors.day && <p className="text-danger">Amount of day is required</p>} 
                        {errors.phone && <p className="text-danger">Phone no is required</p>}
                        
                        
                     
                        <input className="btn btn-primary" type="submit" />
                      
                    
                </form>}
                
                </div>
        
            
                <div className="text-center my-5">
                   {formData &&  
                    <div>
                    <h2>Please pay the bill to confirm your booking</h2>
                    <span className="text-danger">This is for testing purpose <br /> Use card number 4242-4242-4242-4242  </span>
                    <br />
                    
                    <StripeCheckout className="m-5 p-3"
                        token={onToken}
                        stripeKey="pk_test_51IeCRsCba5qw5yhFc90Zwm8taRjfbdalkVlyeAIJMLsyTJiVUaV4d20DeU4Wlz8GOWKH7qBZyRGzK4T4skgUktT900ONP7anxT"
                        />
                    </div>
                    }
                </div>
            
       
            
        </div>
    )
}

export default Book
