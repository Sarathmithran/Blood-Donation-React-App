import React from 'react'
import './RegisterAsOrganization.css'
import SubmitIcon from '../../assest/Svg/SubmitIcon'

function RegisterAsOrganization() {
  return (
    <div>
        <div className='container mt-5' style={{minHeight:630}}>
            <div className='col-12'>
                <h4 className='organization-head p-4 fw-semibold'>Register As Organization</h4>
            </div>
            <div className='row organization-main' style={{height:450}}>
                <div className='col-6 mt-4'>
                    <div className='row'>
                        <div className='col-4 d-flex justify-content-end pt-1'>
                            <label for="inputOrganization">Organization Name</label>
                        </div>
                        <div className='col-8'>
                            <input type="text" class="form-control" id="inputName" placeholder="Name"/>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-4 d-flex justify-content-end pt-1'>
                            <label for="inputAddress">Address</label>
                        </div>
                        <div className='col-8'>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Type Here'></textarea>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-4 d-flex justify-content-end pt-1'>
                            <label for="inputHeadOrganization">Head of Organization</label>
                        </div>
                        <div className='col-8'>
                            <input type="text" class="form-control" id="inputName" placeholder="Name"/>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-4 d-flex justify-content-end pt-1'>
                            <label for="inputNumber">Phone Number</label>
                        </div>
                        <div className='col-8'>
                            <input type="text" class="form-control" id="inputName" placeholder="Number"/>
                        </div>
                    </div>

                </div>

            <div className='row'>
                <div className='col-12 d-flex justify-content-end'>
                        <button className='btn btn-outline-dark submit-btn fw-semibold'>
                            Submit
                            <SubmitIcon/>
                        </button>
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default RegisterAsOrganization