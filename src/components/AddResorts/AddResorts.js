import React from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import Select from 'react-select';
import MyNavbar from '../MyNavbar/MyNavbar';
import { useState } from 'react';
import Footer from '../Footer/Footer';

const AddResorts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl, setImgUrl] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const onSubmit = data => {

        const resortData = {

            district: selectedOption.value.toUpperCase(),
            name: data.resort,
            img: imgUrl,
            price: data.price,
            desc: data.desc,
            contact: data.contact
        }

        const url = 'https://secret-coast-76571.herokuapp.com/addResorts'
        fetch(url, {

            method: 'POST',
            headers: {

                'content-type': 'application/json'

            },

            body: JSON.stringify(resortData)


        })
        .then(res => console.log(res))
        alert('form submitted successfully!')
    };


    const handleImgUpload = event => {

        const imgData = new FormData();
        imgData.set('key', '7dcc06ccc3c242fb63b892bea304ea0c')
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url)
            })
            .catch(function (error) {
            });
    }

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const options = [
        { value: 'Dhaka', label: 'Dhaka' },
        { value: 'Barisal', label: 'Barisal' },
        { value: 'Syhlet', label: 'Syhlet' },
        { value: 'Rajshahi', label: 'Rajshahi' },
        { value: 'Mymensingh', label: 'Mymensingh' },
        { value: 'Khulna', label: 'Khulna' },
        { value: 'Rangpur', label: 'Rangpur' },
        { value: 'Chittagong', label: 'Chittagong' },
      ];

    return (

        <div>
            <MyNavbar></MyNavbar>

            <div style={{ height: '80vh', overflowY: 'auto' }}>
                <h2 className="text-center m-3">Add Resorts From Here</h2>

                <div className="d-flex justify-content-center">

                    <form className="border border-white p-5" onSubmit={handleSubmit(onSubmit)}>

                        {/* <input placeholder="District Name" {...register("district", { required: true })} /> <br /> <br /> */}
                        <label for="district">Division Name : </label>
                        <Select
                            value={selectedOption}
                            onChange={handleChange}
                            options={options}
                        />
                        <br /> <br />
                        <input placeholder="Resort Name" {...register("resort", { required: true })} /> <br /> <br />

                        <input name="image" type="file" onChange={handleImgUpload} /> <br /> <br />

                        <textarea rows="6" cols="35" placeholder="Description" {...register("desc", { required: true })} /> <br /> <br />

                        <input type="price" placeholder="price" {...register("price", { required: true })} /> <br /> <br />

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
            <Footer></Footer>
        </div>
    )
}

export default AddResorts
