import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ngoDetails.css'

const NgoDetails = () => {
    const navigate = useNavigate()
    const handleRequest = ()=>{
        navigate('/ngo/details/trees')
    }
    return (
        <div className='ngo_details_page'>
            <div className='ngo_picture'>
                <img src='https://1.bp.blogspot.com/-lkzhp-AtsTQ/YLp7p4Ub-sI/AAAAAAAADkM/85WvbtjSEKUIUB3ZucLAPAKkrdUDMZH6ACLcBGAsYHQ/s1080/ENVDAYPOST.jpg'
                    width='550px'
                    height='530px' 
                    />
            </div>
            <div className='ngo_details'>
                <p className='ngo_title'>Green Yatra</p>
                <span className='ngo_info'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </span>
                <div className='operation_main'>
                    <div className='operations'>
                        <label className='sub_title'>Area of Operation</label>
                        <hr />
                        <label className='operation_info'>Income Generating | Women</label>
                    </div>
                    <div className='operations'>
                        <label className='sub_title'>Location of Work</label>
                        <hr />
                        <label className='operation_info'>Maharashtra</label>
                    </div>
                    <div className='operations'>
                        <label className='sub_title'>Awards and Recognition</label>
                        <hr />
                        <label className='operation_info'>Maharashtra</label>
                    </div>
                </div>
                <div className='request_btn_div'>
                    <button className='request_btn' onClick={handleRequest}>Request Ngo</button>
                </div>
            </div>
        </div>
    )
}

export default NgoDetails