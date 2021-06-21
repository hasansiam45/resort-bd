import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import MyNavbar from '../MyNavbar/MyNavbar';

const AddReviews = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl, setImgUrl] = useState(null)
    
      const onSubmit = data => {
          const reviewDetails = {
              name: data.name,
              img: imgUrl,
              review: data.msg
          };
          
          fetch('http://localhost:5000/addReviews', {
          
              method: 'POST',
              headers: {
              
                  'content-type': 'application/json'
              
              },
              body: JSON.stringify(reviewDetails)
          
          })
              .then(response => {
                  console.log(response)
                  alert('Review added successfully')
              })
          
    }
    
    
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
        
        <div>
            <MyNavbar></MyNavbar>
            
                       <div className="text-center">
                
                <form className="p-5 bg-dark text-white" onSubmit={handleSubmit(onSubmit)}>
                
                        
                    <input className="m-1" type="text" placeholder="your name" {...register("name", { required: true })} /> <br /> <br />
                    <input name="image" type="file" placeholder="Your image" onChange={handleImgUpload} /> <br/> <br/>
                    <textarea name="" id="" cols="30" rows="6" placeholder="your Review" {...register("msg", { required: true })}></textarea> <br /> <br />
                    
                    
                    {errors.name && <p className="text-danger">Name is required</p>}
                    {errors.msg && <p className="text-danger">Review is required</p>}
       
                    
                    
                        
                    <input className="btn btn-primary" type="submit" />
                        
                        
                    </form>
            </div>
        </div>
    )
}

export default AddReviews
