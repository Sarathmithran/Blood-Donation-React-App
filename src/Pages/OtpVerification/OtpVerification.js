import React from 'react'
import './OtpVerification.css'
import { useNavigate } from 'react-router-dom'

function OtpVerification() {
    const navigate = useNavigate();

  return (
    <div className='container d-flex justify-content-center'>
        <div className='OtpVerification-div p-5'>
            <div className='row'>
                <div className='col-12 text-center pb-4'>
                    <span className='fw-bold fs-3'>OTP Verification</span>
                </div>
                <div className='col-12 text-center'>
                    <p>An OTP has been sent to <br></br> xxxxxxxxxx</p>
                </div>
                <div className='col-12 d-flex gap-3 justify-content-center pb-3'>
                    <input type='text' className='otp-div'/>
                    <input type='text' className='otp-div'/>
                    <input type='text' className='otp-div'/>
                    <input type='text' className='otp-div'/>
                </div>
                <div className='col-12 text-center pb-3'>
                    <span className='fw-semibold'>Resend OTP</span>
                </div>
                <div className='col-12 text-center'>
                    <button className='btn bg-dark text-white fw-semibold verify-btn' onClick={()=>navigate('/verificationSuccess')}>Verify & Proceed</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OtpVerification