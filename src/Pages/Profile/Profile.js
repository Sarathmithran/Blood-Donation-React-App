import React from 'react'
import './Profile.css'
import CalendarComp from '../../Components/Calendar/Calendar'
import { useNavigate } from 'react-router-dom'
import Notification from '../../assest/Svg/Notification';

function Profile() {

    const navigate = useNavigate();

  return (
    <div className='container'>
        <div className='row profile-main mt-5 mb-5'>
            <div className='col-8'>
                <div className='row'>
                    <div className='col-12 name-div d-flex'>
                            <div className='col-3 p-3'>
                                <div className='dp'>

                                </div>
                            </div>
                            <div className='col-3 d-flex flex-column justify-content-end p-3'>
                                <span className='fw-bold fs-3'>Dinoy Raj K</span>
                            </div>
                            <div className='col-6 d-flex justify-content-end p-3'>
                                <div className='d-flex flex-column justify-content-end me-3'>
                                    <Notification/>
                                </div>
                                <div className='edit-p d-flex flex-column justify-content-end'>
                                    <button className='btn bg-dark text-white fw-semibold' onClick={()=>navigate('/editProfile')}>Edit Profile</button>
                                </div>
                            </div>
                    </div>
                </div>

                <div className='row mt-4 about'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-12 text-center pt-3'>
                                <span className='fw-semibold about-head'>About</span>
                            </div>

                            <div className='col-3 text-end border-bottom pt-2 pb-2'>
                                <span>Full Name</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>
                            <div className='col-5 text-start border-bottom pt-2 pb-2'>
                                <span>Dinoy Raj</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>

                            <div className='col-3 text-end border-bottom pt-2 pb-2'>
                                <span>Email</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>
                            <div className='col-5 text-start border-bottom pt-2 pb-2'>
                                <span>dinoy123@gmail.com</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>

                            <div className='col-3 text-end border-bottom pt-2 pb-2'>
                                <span>District</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>
                            <div className='col-5 text-start border-bottom pt-2 pb-2'>
                                <span>Kozhikode</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>

                            <div className='col-3 text-end border-bottom pt-2 pb-2'>
                                <span>Phone Number</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>
                            <div className='col-5 text-start border-bottom pt-2 pb-2'>
                                <span>7761569873</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>

                            <div className='col-3 text-end border-bottom pt-2 pb-2'>
                                <span>Pincode</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>
                            <div className='col-5 text-start border-bottom pt-2 pb-2'>
                                <span>670141</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>

                            <div className='col-3 text-end border-bottom pt-2 pb-2'>
                                <span>Age</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>
                            <div className='col-5 text-start border-bottom pt-2 pb-2'>
                                <span>22</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>

                            <div className='col-3 text-end border-bottom pt-2 pb-2'>
                                <span>Blood Group</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>
                            <div className='col-5 text-start border-bottom pt-2 pb-2'>
                                <span>o +ve</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>

                            <div className='col-3 text-end border-bottom pt-2 pb-2'>
                                <span>Address</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>
                            <div className='col-5 text-start border-bottom pt-2 pb-2'>
                                <span>Karuvally Reenugeetham House...</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>
                            <div className='col-3 text-end border-bottom pt-2 pb-2'>
                                <span>Last Donation Date</span>
                            </div>
                            <div className='col-2 border-bottom'>

                            </div>
                            <div className='col-5 text-start border-bottom pt-2 pb-2'>
                                <span>11-10-2021</span>
                            </div>
                            <div className='col-2 border-bottom'>
                            </div>   
                        </div>  
                    </div>
                </div>
            </div> 

            <div className='col-4 ps-5'>
                <div className='row'>     
                    <div className='col-12 d-history'>
                        <div className='row'>
                            <div className='col-12 text-center pt-3 pb-3'>
                                <span className='fw-semibold'>Donation History</span>
                            </div>
                            <div className='col-6 text-center pt-3 pb-3'>
                                <span className='text-secondary'>Date</span>
                            </div>
                            <div className='col-6 text-center pt-3 pb-3'>
                                <span className='text-secondary'>Blood Unit</span>
                            </div>
                            <div className='col-6 text-center border-bottom pt-2 pb-2'>
                                <span>13 Dec 2020</span>
                            </div>
                            <div className='col-6 text-center border-bottom pt-2 pb-2'>
                                <span>120</span>
                            </div>
                            <div className='col-6 text-center border-bottom pt-2 pb-2'>
                                <span>13 Aug 2020</span>
                            </div>
                            <div className='col-6 text-center border-bottom pt-2 pb-2'>
                                <span>20</span>
                            </div>
                            <div className='col-6 text-center border-bottom pt-2 pb-2'>
                                <span>1 May 2020</span>
                            </div>
                            <div className='col-6 text-center border-bottom pt-2 pb-2'>
                                <span>30</span>
                            </div>
                            <div className='col-6 text-center border-bottom pt-2 pb-2'>
                                <span>11 Oct 2020</span>
                            </div>
                            <div className='col-6 text-center border-bottom pt-2 pb-2'>
                                <span>310</span>
                            </div>
                        </div>
                    </div>

                    <div className='col-12'>
                        <CalendarComp/>
                    </div>

                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Profile