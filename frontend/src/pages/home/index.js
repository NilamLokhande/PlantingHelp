import React from 'react'
import NgoCarousel from '../../components/caraousel'
import About from '../../components/midcontent'
import './home.css'


const Home = () => {
    return (
        <div className='home-main'>
            <NgoCarousel/>
            <About/>
        </div>
    )
}

export default Home