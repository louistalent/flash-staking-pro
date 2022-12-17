import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LeftBar } from '../components';
import { Home, Profile, StackDashboard, Setting, Support, Chatboard, Chatlist } from "../pages"


const AppRouter = () => {
    return (
        <>
            <Router>

                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/Profile' element={<Profile />} />
                    <Route path='/Setting' element={<Setting />} />
                    <Route path='/Staking' element={<StackDashboard />} />
                    <Route path='/Support' element={<Support />} />
                    <Route path='/Chatlist' element={<Chatlist />} />
                    <Route path='/Chatboard' element={<Chatboard />} />

                </Routes>
            </Router>

        </>
    )
}

export default AppRouter;