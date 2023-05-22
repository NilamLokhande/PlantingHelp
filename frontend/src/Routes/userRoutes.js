import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Home from '../pages/home'
import Ngo from '../pages/ngo'
import NgoDetails from '../pages/ngo/ngoDetails'
import NgoTrees from '../pages/ngo/ngoTrees'

const UserRoutes = () => {
    return (
        <>
            <Header />
            <Router>
                <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/ngo' element={<Ngo />} />
                        <Route path='/ngo/details' element={<NgoDetails />} />
                        <Route path='/ngo/details/trees' element={<NgoTrees />} />
                </Routes>
            </Router>
            <div className="footer bg-dark mt-3 text-white p-3">
                <Footer />
            </div>
        </>
    )
}

export default UserRoutes