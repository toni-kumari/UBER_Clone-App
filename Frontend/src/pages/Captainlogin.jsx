import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Captainlogin = () => {
    const[email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const [captainData, setCaptainData] = useState({});
    
    const submitHandler =(e)=>{
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password
        });
        setEmail('');
        setPassword('');
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-2' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt='Uber Logo'/>
                <form onSubmit={submitHandler} className='bg-white shadow-md rounded-lg p-6'>
                    <h3 className='text-lg mb-4 font-semibold text-gray-700'>Captain Login</h3>
                    <div className='mb-5'>
                        <label className='block text-sm font-medium text-gray-600 mb-2'>Email Address</label>
                        <input 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 w-full text-sm placeholder:text-sm border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                            type='email'
                            placeholder='email@example.com'
                        />
                    </div>
                    <div className='mb-5'>
                        <label className='block text-sm font-medium text-gray-600 mb-2'>Enter Password</label>
                        <input 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 w-full text-sm placeholder:text-sm border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none'
                            type='password'
                            placeholder='password'
                        />
                    </div>
                    <button className='bg-[#111] text-white rounded px-4 py-2 w-full text-lg transition duration-300 mb-3'>
                        Login
                    </button>
                    <p className='text-center text-sm text-gray-600'>New to Uber? <Link to='/captain-signup' className='text-blue-600 hover:text-blue-800'>Register as a Captain</Link></p>
                </form>
            </div>
            <div>
                <Link 
                    to='/signup'
                    className='bg-blue-600 flex items-center justify-center text-white mb-5 rounded px-4 py-2 w-full text-lg transition duration-300'>
                    sign in as User
                </Link>
            </div> 
        </div>
    );
};

export default Captainlogin;
