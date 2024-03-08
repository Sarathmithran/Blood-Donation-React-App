import React from 'react'
import './FindBlood.css'
import { useNavigate } from 'react-router-dom'

function FindBlood() {
    const navigate = useNavigate()

  return (
    <div className='container d-flex justify-content-center findblood-main'>
        <div className='findblood-reg p-5  d-flex justify-content-center'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <span className='fw-semibold fs-2'>Registration</span>
                </div>
                <div className='col-12 text-center'>
                    <span>An OTP will be sent to your mobile for verification</span>
                </div>
                <div className='col-12'>
                    <input type="text" class="form-control" id="inputName" placeholder="Enter your mobile number"/>
                </div>
                <div className='col-12 text-center'>
                    <span className='note-text fst-italic'>*Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                </div>
                <div className='col-12 text-center'>
                    <button className='btn bg-dark text-white fw-semibold otp-btn' onClick={()=>navigate('/otpVerification')}>Get OTP</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FindBlood