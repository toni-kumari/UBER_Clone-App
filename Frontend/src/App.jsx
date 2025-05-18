import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Captainlogin from './pages/Captainlogin';
import CaptainSignup from './pages/CaptainSignup';
import HomeElement from './pages/HomeElement';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<UserLogin />}/>
                <Route path='/signup' element={<UserSignup />}/>
                <Route path='/captain-login' element={<Captainlogin/>}/>
                <Route path='/captain-signup' element={<CaptainSignup />}/>
                <Route path='/home' element={<UserProtectedWrapper> <HomeElement /> </UserProtectedWrapper>}/>
                <Route path='user/logout' element ={<UserProtectedWrapper> <UserLogout /> </UserProtectedWrapper>} />
                <Route path='/captain-home' element ={<CaptainHome />} />
            </Routes>

        </div>
    );
};

export default App;