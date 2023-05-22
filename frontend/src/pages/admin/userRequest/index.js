import React from 'react'
import './userRequest.css'

const UserRequest = () => {
    return (
        <>
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
            </div>
        </div>
        <div className='user_request'>
            <div className='user_inner_div'>
                <div className='user_heading'>
                    <h3 style={{ textAlign: 'left' }}>User Requests</h3>
                </div>
                <div className='user_request_lsit'>
                    <div className='user_request_details'>
                        <div className='left'>
                            <h4 className='user_name'>Sayli Chorge</h4>
                            <p className='user_details'>Email:sayli.chorge@gmail.com</p>
                            <p className='user_details'>Contact No.:7738414752</p>
                        </div>
                        <div className='right'>
                            <button className='accept_btn'>Accept</button>
                            <button className='reject_btn'>Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserRequest