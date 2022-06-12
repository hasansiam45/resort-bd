import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import MyNavbar from '../MyNavbar/MyNavbar';

const AddAdmin = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
        const onSubmit = data => {
            
            fetch('https://secret-coast-76571.herokuapp.com/addAdmins',{

            method: 'POST',
            headers: {
            
                'content-type' : 'application/json'
            
            },
            
            body: JSON.stringify(data)


        })
            .then(res => {
                alert('admin added successfully')
            })

    }
    


    
    return (
        
        <div>
            
            <MyNavbar></MyNavbar>
            
            <div className="text-center">
                
              <form className="m-5 p-5" onSubmit={handleSubmit(onSubmit)}>
             
                      
                        <input className="m-1" type="email" placeholder="Enter Admin Email" {...register("email",{ required: true })} /> <br /> <br/>
    
                
                        {errors.email && <p className="text-danger">Email is required</p>}
                       
                     
                        <input className="btn btn-primary" type="submit" />
                      
                    
                 </form>
            </div>
        </div>
    )
}

export default AddAdmin
