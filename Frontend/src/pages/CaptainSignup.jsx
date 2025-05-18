import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/captainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignup = () => {

    const navegate =useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const { captain, setCaptain } = useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
            fullName: {
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                type: vehicleType
            }
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
        if(response.status === 201){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data,token)
            navigate('/captain-home')
        }

        setEmail('');
        setPassword('');
        setLastName('');
        setFirstName('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between bg-gray-50'>
            <div>
                <img className='w-16 mb-2 mx-auto' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt='Uber Logo' />
                <form onSubmit={(e) => submitHandler(e)} className='bg-white shadow-md rounded-lg p-6'>
                    <h3 className='text-lg mb-4 font-semibold text-gray-700'>Sign Up</h3>

                    <div className='mb-5'>
                        <h3 className='text-sm mb-2 font-medium text-gray-600'>Please enter your name</h3>
                        <div className='flex gap-4'>
                            <input 
                                required                     
                                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                                type='text'
                                placeholder='First name'
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input 
                                required                     
                                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                                type='text'
                                placeholder='Last name'
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='mb-5'>
                        <h3 className='text-sm mb-2 font-medium text-gray-600'>Please enter your email</h3>
                        <input 
                            required                     
                            className='bg-[#eeeeee] rounded px-4 py-2 w-full text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                            type='email'
                            placeholder='email@example.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='mb-5'>
                        <h3 className='text-sm mb-2 font-medium text-gray-600'>Enter Password</h3>
                        <input 
                            required                     
                            className='bg-[#eeeeee] rounded px-4 py-2 w-full text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                            type='password'
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='mb-5'>
                        <h3 className='text-sm mb-2 font-medium text-gray-600'>Vehicle Information</h3>
                        <div className='mb-5 flex gap-4'>
                            <input 
                                required                     
                                className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                                type='text'
                                placeholder='Vehicle Color'
                                value={vehicleColor}
                                onChange={(e) => setVehicleColor(e.target.value)}
                            />
                            <input 
                                required                     
                                className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                                type='text'
                                placeholder='Vehicle Plate'
                                value={vehiclePlate}
                                onChange={(e) => setVehiclePlate(e.target.value)}
                            />
                        </div>

        

                        <div className='mb-5 flex gap-4'>
                            <input 
                                required                     
                                className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                                type='number'
                                placeholder='Vehicle Capacity'
                                value={vehicleCapacity}
                                onChange={(e) => setVehicleCapacity(e.target.value)}
                            />
                            <select 
                                required                     
                                className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                            >
                                <option value='' disabled>Select Vehicle Type</option>
                                <option value='car'>Car</option>
                                <option value='auto'>Auto</option>
                                <option value='motor'>Motor</option>
                            </select>
                        </div>
                    </div>

                    <button className='bg-blue-600 hover:bg-blue-700 text-white mb-3 rounded px-4 py-2 w-full text-lg transition duration-300'>
                        Sign Up
                    </button>

                    <p className='text-center text-sm text-gray-600'>Already have an account? <Link to='/captain-login' className='text-blue-600 hover:text-blue-800'>Login here</Link></p>
                </form>
            </div>

            <div className='mt-6 p-4 bg-gray-100 rounded'>
                <p className='text-[10px] leading-tight text-gray-700'>
                    This site is protected by reCAPTCHA and the
                    <span className='underline'> Google Policy </span> and 
                    <span className='underline'> Terms of Service apply</span>
                </p>
            </div>
        </div>
    );
};

export default CaptainSignup;

