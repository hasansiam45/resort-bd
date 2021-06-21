import React from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import MyNavbar from '../MyNavbar/MyNavbar';
import { useState } from 'react';

const AddResorts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl, setImgUrl] = useState(null)
    
    const onSubmit = data => {
        const districtName = data.district.toUpperCase()
        const resortData = {
        
            district: districtName,
            name: data.resort,
            img: imgUrl,
            desc: data.desc,
            contact: data.contact
        }
        
        const url = 'http://localhost:5000/addResorts'
        fetch(url, {
            
            method: 'POST',
            headers: {
            
                'content-type' : 'application/json'
            
            },
            
            body: JSON.stringify(resortData)
        
        
        })
            .then(res => console.log(res))
        alert('form submitted successfully!')
    };
    
    
    const handleImgUpload = event => {
     
        const imgData = new FormData();
        imgData.set('key' , '7dcc06ccc3c242fb63b892bea304ea0c')
        imgData.append('image', event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                console.log(response)
                setImgUrl(response.data.data.display_url)
            })
            .catch(function (error) {
                    console.log(error);
                });
    }

    return (
        
        <div className="bg-dark text-white">
            <MyNavbar></MyNavbar>
            
            <h2 className="text-center m-3">Add Resorts From Here</h2>
        
        <div className="d-flex justify-content-center">
            
            <form className="border border-white p-5" onSubmit={handleSubmit(onSubmit)}>
                
                <input placeholder="District Name" {...register("district", { required: true })} /> <br /> <br />

                    <input placeholder="Resort Name" {...register("resort", { required: true })} /> <br /> <br />
                    
                    <input name="image" type="file" onChange={handleImgUpload} /> <br/> <br/>
                
                    <textarea rows="6" cols="35" placeholder="Description" {...register("desc", { required: true })} /> <br /> <br />
                    
                    <input type="number" placeholder="Contact Number" {...register("contact", { required: true })} /> <br /> <br />
                    
      
                    {errors.district && <p className="text-danger">District Name is required</p>}
                    {errors.resort && <p className="text-danger">Resort Name is required</p>} 
                    {errors.image && <p className="text-danger">Image is required</p>}
                    {errors.desc && <p className="text-danger">Description is required</p>} 
                    
                    
                    <div className="text-center">
                    <input className="btn btn-primary" type="submit" />
                    </div>
                
            </form>
            
            </div>
            
        </div>
    )
}

export default AddResorts