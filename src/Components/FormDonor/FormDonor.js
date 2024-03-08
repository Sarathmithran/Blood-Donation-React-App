import React from 'react'
import './FormDonor.css'
import SubmitIcon from '../../assest/Svg/SubmitIcon'

function FormDonor() {
  return (
    <>
        <div className='row donor-main'>
            <div className='row mt-4'>
                <div class='col-2 d-flex justify-content-end pt-1'>
                    <label for="inputName">Full Name</label>
                </div>
                <div class='col-5'>
                    <input type="text" class="form-control" id="inputName" placeholder="First"/>
                </div>
                <div class='col-5'>
                    <input type="text" class="form-control" id="inputName" placeholder="Last Name"/>
                </div>
            </div>

            <div className='row mt-4'>
                <div class='col-2 d-flex justify-content-end pt-1'>
                    <label for="inputName">Phone Number</label>
                </div>
                <div class='col-10'>
                    <input type="text" class="form-control" id="inputName" placeholder="Number"/>
                </div>
            </div>

            <div className='row mt-4'>
                <div class='col-2 d-flex justify-content-end pt-1'>
                    <label for="inputName">E mail</label>
                </div>
                <div class='col-10'>
                    <input type="text" class="form-control" id="inputName" placeholder="Mail Id"/>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-2 d-flex justify-content-end pt-1'>
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                </div>
                <div className='col-5'>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Type Here'></textarea>
                </div>
                <div className='col-5'>
                    <div className='row'>
                        <div className='col-6 d-flex justify-content-end pt-1'>
                            <label for="inputName">Age</label>
                        </div>
                        <div className='col-6'>
                            <input type="text" class="form-control" id="inputName" placeholder="Age"/>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-6 d-flex justify-content-end pt-1'>
                            <label for="inputName">Blood Group</label>
                        </div>
                        <div className='col-6'>
                            <select id="inputState" class="form-select">
                                <option>A+</option>
                                <option>B+</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-2 d-flex justify-content-end pt-1'>
                    <label for="inputName">District</label>
                </div>
                <div className='col-5'>
                    <select id="inputState" class="form-select">
                        <option>Kannur</option>
                        <option>Kozhikode</option>
                    </select>
                </div>

                <div className='col-5'>
                    <div className='row'>
                        <div className='col-6 d-flex justify-content-end pt-1'>
                            <label for="inputName">State</label>
                        </div>
                        <div className='col-6'>
                            <select id="inputState" class="form-select">
                                <option>Kerala</option>
                                <option>Goa</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-2 d-flex justify-content-end pt-1'>
                    <label for="inputName">Pincode</label>
                </div>
                <div className='col-5'>
                    <input type="text" class="form-control" id="inputPincode" />
                </div>
            </div>

            <div className='row mt-4'>
                <div class='col-2 d-flex justify-content-end pt-1'>
                    <label for="inputName">Last Donation</label>
                </div>
                <div class='col-5'>
                    <input type="text" class="form-control" id="inputMonth" placeholder="Month"/>
                </div>
                <div class='col-5'>
                    <input type="text" class="form-control" id="inputYear" placeholder="Year"/>
                </div>
            </div>

            <div className='row mt-5'>
                <div class="form-check col-12 d-flex justify-content-center">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label ps-2 agree-text" for="flexCheckDefault">
                        I consent to my personal information being used for blood donation purposes.
                    </label>
                </div>
            </div>

            <div className='row pt-5 pb-5'>
                <div className='col-12 d-flex justify-content-end'>
                    <button className='btn btn-outline-dark fw-semibold'>
                        Submit
                        <SubmitIcon/>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormDonor