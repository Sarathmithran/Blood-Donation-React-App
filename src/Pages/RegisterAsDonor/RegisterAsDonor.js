import React from 'react'
import './RegisterAsDonor.css'
import FormDonor from '../../Components/FormDonor/FormDonor';

function RegisterAsDonor() {
  return (
    <div>
        <div className='container mt-5' style={{minHeight:830}}>
            <div className='col-12'>
                <h4 className='donor-head p-4 fw-semibold'>Register As Donor</h4>
            </div>
            <FormDonor/>
        </div>
    </div>
  )
}

export default RegisterAsDonor