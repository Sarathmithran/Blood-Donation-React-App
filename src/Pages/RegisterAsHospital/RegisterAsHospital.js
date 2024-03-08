import React from 'react'
import './RegisterAsHospital.css'
import SubmitIcon from '../../assest/Svg/SubmitIcon'

function RegisterAsHospital() {
  return (
    <div>
        <div className='container mt-5' style={{minHeight:630}}>
            <div className='col-12'>
                <h4 className='organization-head p-4 fw-semibold'>Register As Hospital</h4>
            </div>
            <div className='row organization-main mb-5' style={{height:550}}>
                <div className='col-6 mt-4'>
                    <div className='row'>
                        <div className='col-4 d-flex justify-content-end pt-1'>
                            <label for="inputOrganization">Hospital Name</label>
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
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Type Here'></textarea>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-4 d-flex justify-content-end pt-1'>
                            <label for="inputAddress">Phone Number</label>
                        </div>
                        <div className='col-8'>
                            <input type='text' class="form-control" id="inputNumber"  placeholder='Number'></input>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-4 d-flex justify-content-end pt-1'>
                            <label for="inputName">State</label>
                        </div>
                        <div className='col-8'>
                            <select id="inputState" class="form-select">
                                <option>Kerala</option>
                                <option>Tamilnadu</option>
                            </select>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-4 d-flex justify-content-end pt-1'>
                            <label for="inputName">District</label>
                        </div>
                        <div className='col-8'>
                            <select id="inputState" class="form-select">
                                <option>Kannur</option>
                                <option>Kozhikode</option>
                            </select>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-4 d-flex justify-content-end pt-1'>
                            <label for="inputHeadOrganization">Pincode</label>
                        </div>
                        <div className='col-8'>
                            <input type="text" class="form-control" id="inputName" placeholder="Pincode"/>
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

export default RegisterAsHospital