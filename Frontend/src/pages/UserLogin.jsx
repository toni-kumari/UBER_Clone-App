import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        });
        setEmail('');
        setPassword('');
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between bg-gray-50'>
            <div>
                <img className='w-16 mb-6 mx-auto' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='Uber Logo' />
                <form onSubmit={(e) => submitHandler(e)} className='bg-white shadow-md rounded-lg p-6'>
                    <h3 className='text-lg mb-4 font-semibold text-gray-700'>Login</h3>

                    <h3 className='text-sm mb-2 font-medium text-gray-600'>Please enter your email</h3>
                    <input 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                        type='email'
                        placeholder='email@example.com'
                    />

                    <h3 className='text-sm mb-2 font-medium text-gray-600'>Enter Password</h3>
                    <input 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-sm placeholder:text-xs border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                        type='password'
                        placeholder='password'
                    />

                    <button className='bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg transition duration-300'>
                        Login
                    </button>

                    <p className='text-center text-sm text-gray-600'>Don't have an account? <Link to='/signup' className='text-blue-600 hover:text-blue-800'>Create one</Link></p>
                </form>
            </div>

            <div className='mt-6'>
                <Link 
                    to='/captain-login'
                    className='bg-[#1DB954] flex items-center justify-center text-white mb-5 rounded px-4 py-2 w-full text-lg transition duration-300'>
                    Sign in as Captain
                </Link>
            </div>
        </div>
    );
};

export default UserLogin;
