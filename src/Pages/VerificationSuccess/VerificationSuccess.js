import React, { useState } from 'react'
import './VerificationSuccess.css'
import RecipientDetails from '../RecipientDetails/RecipientDetails';
import VerifyIcon from '../../assest/Svg/VerifyIcon';

function VerificationSuccess() {

    const [data,setData] = useState(true);

    setTimeout(() =>{
        setData(false)
    },1000);

  return (
    <>
    {
        data == true ?
        <div className='container d-flex justify-content-center'>
            <div className='VerificationSuccess-div'>
                <div className='text-center'>
                    <VerifyIcon/>
                </div>
                <div className='text-center pt-2'>
                    <span className='fw-semibold'>OTP Verification successful</span>
                </div>
            </div>
        </div>
        : <RecipientDetails/>
    }
    </>
  )
}

export default VerificationSuccess