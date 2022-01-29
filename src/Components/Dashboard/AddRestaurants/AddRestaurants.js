import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import './AddRestaurant.css';
import { useForm } from "react-hook-form";


const AddRestaurants = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));


    return (
        <div className='add-restaurant-page'>
            <Navbar/>
                <div className='container add-restaurant-form-card'>

                        <div className='row'>

                            <div className='col-md-5 my-auto mx-4'>
                                <h1 >PARTNER WITH US</h1>
                                <p > We're hungry for the best things in life: delicious food, exploring the city and bringing the first bite of food to our customers. </p>
                            </div>
                            
                            <div className='col-md-6 my-5'>

                                <h2 className='text-center'>Interested? Fill in the form below to become our partner and increase your revenue!</h2>
                                <p><small>To sign up via Tel: 09678 561 561</small></p>
                                <p><small>To sign up by yourself please fill in below form:</small></p>

                                <form className='mx-2' onSubmit={handleSubmit(onSubmit)}>
                                    <label style={{textAlign:'left'}} htmlFor="name">Name:</label> 
                                    <input defaultValue="name" {...register("nameRequired", { required: true })} /> 
                                    {errors.nameRequired && <span style={{color:'red'}}>This field is required</span>}  <br />
                                    <label htmlFor="email">Email:</label> 
                                    <input defaultValue="email" {...register("emailRequired", { required: true })} /> 
                                    {errors.emailRequired && <span style={{color:'red'}}>This field is required</span>}  <br />
                                    <label htmlFor="number">Number:</label> 
                                    <input defaultValue="Number" {...register("numberRequired", { required: true })} /> 
                                    {errors.numberRequired && <span style={{color:'red'}}>This field is required</span>} <br />
                                    <label htmlFor="restaurantName">Restaurant Name:</label> 
                                    <input defaultValue="restaurantName" {...register("restaurantNameRequired", { required: true })} /> 
                                    {errors.restaurantNameRequired && <span style={{color:'red'}}>This field is required</span>} <br />
                                    <label htmlFor="restaurantAddress">Restaurant Address:</label> 
                                    <input defaultValue="restaurantAddress" {...register("restaurantAddressRequired", { required: true })} /> 
                                    {errors.restaurantAddressRequired && <span style={{color:'red'}}>This field is required</span>} <br />
                                    <label htmlFor="picture">Upload Restaurant Background Photo:</label> 
                                    <input type="file" {...register("pictureRequired", { required: true })} /> 
                                    {errors.pictureRequired && <span style={{color:'red'}}>This field is required</span>} 
                                    <input className='btn btn-primary' type="submit" />
                                </form>
                            </div>
                        </div>
                </div>

            

        </div>
    );
};

export default AddRestaurants;