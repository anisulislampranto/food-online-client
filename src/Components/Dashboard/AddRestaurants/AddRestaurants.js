import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import './AddRestaurant.css';
import { useForm } from "react-hook-form";
import whyUs from '../../Images/whysUs.jpg';
import partner from '../../Images/partner.png';


const AddRestaurants = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.emailRequired)
    };



    return (
        <div className='add-restaurant-page'>
            <Navbar/>
                <div className='container add-restaurant-form-card'>

                        <div className='row'>

                            <div className='col-md-5 my-auto mx-4'>
                                <img style={{width:'400px'}} src={partner} alt="" />
                                <h1 >PARTNER WITH US</h1>
                                <p > We're hungry for the best things in life: delicious food, exploring the city and bringing the first bite of food to our customers. </p>
                            </div>

                            <div className='col-md-6 my-5'>

                                <h2 className='text-center'>Interested? Fill in the form below to become our partner and increase your revenue!</h2>
                                <p><small>To sign up via Tel: <strong>09678 561 561</strong></small></p>
                                <p><small>To sign up by yourself please fill in below form:</small></p>

                                <form className='mx-2' onSubmit={handleSubmit(onSubmit)}>
                                    <label style={{textAlign:'left'}} htmlFor="name"><strong>Name:</strong></label> 
                                    <input defaultValue="name" {...register("nameRequired", { required: true })} /> 
                                    {errors.nameRequired && <span style={{color:'red'}}>This field is required</span>}  <br />
                                    <label htmlFor="email"><strong>Email:</strong></label> 
                                    <input defaultValue="email" {...register("emailRequired", { required: true })} /> 
                                    {errors.emailRequired && <span style={{color:'red'}}>This field is required</span>}  <br />
                                    <label htmlFor="number"><strong>Number:</strong></label> 
                                    <input defaultValue="Number" {...register("numberRequired", { required: true })} /> 
                                    {errors.numberRequired && <span style={{color:'red'}}>This field is required</span>} <br />
                                    <label htmlFor="restaurantName"><strong>Restaurant Name:</strong></label> 
                                    <input defaultValue="restaurantName" {...register("restaurantNameRequired", { required: true })} /> 
                                    {errors.restaurantNameRequired && <span style={{color:'red'}}>This field is required</span>} <br />
                                    <label htmlFor="restaurantAddress"><strong>Restaurant Address:</strong></label> 
                                    <input defaultValue="restaurantAddress" {...register("restaurantAddressRequired", { required: true })} /> 
                                    {errors.restaurantAddressRequired && <span style={{color:'red'}}>This field is required</span>} <br />
                                    <label style={{marginTop:'15px'}} htmlFor="picture"><strong>Restaurant Photo:</strong></label> 
                                    <input style={{paddingLeft: '0px'}} type="file" {...register("pictureRequired", { required: true })} /> 
                                    {errors.pictureRequired && <span style={{color:'red'}}>This field is required</span>} 
                                    <input className='btn btn-primary' type="submit" />
                                </form>
                            </div>
                        </div>
                </div>

            <div className='activation-card my-5 py-5'>
                    <h1 className='text-center py-3'><strong>Steps to Activation</strong></h1>
                    <div className='d-flex container text-center'> 
                        <h2>Step 1: <br /> Sign up online </h2>
                        <h2>Step 2: <br /> FoodOnline sends the contract </h2>
                        <h2>Step 3: <br /> Sign the contract </h2>
                        <h2>Step 4: <br /> GO LIVE on FoodOnline</h2>
                    </div>
            </div>

            <div className='joinning-advantage-info-card'>
                <div className='row'>
                    <div className='col-md-3 my-4'>
                        <img style={{width:'100%', borderRadius:'0px 5px 5px 0px'}} src={whyUs} alt="" />
                    </div>
                    <div className='col-md-9 my-4'>
                        <h1>More Revenue</h1>
                        <p>With foodpanda, you will gain an additional source of income. Our customers are continually searching the latest cool restaurants in their city.</p>
                        <h1>Dedicated Support</h1>
                        <p>From perfecting your delivery menu and sending out weekly reports, to improving your performance, we're here to help you every step of the way.</p>
                        <h1>Constant Flexibility</h1>
                        <p>Pause orders if you're feeling overwhelmed. You decide for yourself when you want to cook for your food lovers and are free to leave on a monthly basis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRestaurants;