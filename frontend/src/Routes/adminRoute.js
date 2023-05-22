import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../pages/admin/header/Navbar'
import UserRequest from '../pages/admin/userRequest'

const AdminRoute = () => {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route exact path='/admin-home' element={<UserRequest />} />
      </Routes>
    </Router>
    <div className="footer bg-dark mt-3 text-white p-3">
      <Footer />
    </div>
    </>
  )
}

export default AdminRoute