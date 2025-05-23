import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userDataContext } from '../context/userContext';

const UserSignup = () => 
    {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    const navigate = useNavigate();
    const { user, setUser } = useContext(userDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        const newUser = {
            fullname: {
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password
        };

        // Correct the URL to match the backend endpoint
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

        if (response.status === 201) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('toke', data.token)
            navigate('/home');
        }

        setEmail('');
        setPassword('');
        setLastName('');
        setFirstName('');
    };

    return (
        <div className='p-7 h-screen flex flex-col justify-between bg-gray-50'>
           <div>
               <img className='w-16 mb-6 mx-auto' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='Uber Logo' />
               <form onSubmit={(e) => submitHandler(e)} className='bg-white shadow-md rounded-lg p-6'>
                   <h3 className='text-lg mb-4 font-semibold text-gray-700'>Sign Up</h3>

                   <h3 className='text-sm mb-2 font-medium text-gray-600'>Please enter your name</h3>
                   <div className='flex gap-4 mb-5'>
                       <input 
                           required                     
                           className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                           type='text'
                           placeholder='First name'
                           value={firstname}
                           onChange={(e)=>{
                            setFirstName(e.target.value)
                           }}
                          
                       />
                       <input 
                           required                     
                           className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                           type='text'
                           placeholder='Last name'
                           value={lastname}
                           onChange={(e)=>{
                            setLastName(e.target.value)
                           }}
                       />
                   </div>

                   <h3 className='text-sm mb-2 font-medium text-gray-600'>Please enter your email</h3>
                   <input 
                       required                     
                       className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                       type='email'
                       placeholder='email@example.com'
                       value={email}
                       onChange={(e)=>{
                        setEmail(e.target.value)
                       }}
                   />

                   <h3 className='text-sm mb-2 font-medium text-gray-600'>Enter Password</h3>
                   <input 
                       required                     
                       className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                       type='password'
                       placeholder='password'
                       value={password}
                       onChange={(e)=>{
                        setPassword(e.target.value)
                       }}
                   />

                   <button className='bg-blue-600 hover:bg-blue-700 text-white mb-3 rounded px-4 py-2 w-full text-lg transition duration-300'>
                       Sign Up
                   </button>

                   <p className='text-center text-sm text-gray-600'>Already have an account? <Link to='/login' className='text-blue-600 hover:text-blue-800'>Login here</Link></p>
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

export default UserSignup;
