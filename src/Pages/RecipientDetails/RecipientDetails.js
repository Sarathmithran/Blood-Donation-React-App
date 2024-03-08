import React from 'react'
import gradient from '../../assest/Images/gradient.jpeg'
import './RecipientDetails.css'
import { useNavigate } from 'react-router-dom'
import Arrow from '../../assest/Svg/Arrow';


function RecipientDetails() {

    const navigate = useNavigate();

  return (
    <div style={{minHeight:700}}>
        <div className='container mt-5 recipient-main'>
            <div className='row p-2'>
                <div className='col-5'>
                    <img src={gradient} className='gradient'/>
                </div>
                <div className='col-7 d-flex justify-content-between'>
                    <div className='row'>
                        <div className='col-12 text-end pt-3'>
                            <div className='row'>
                                <div className='col-5'>

                                </div>
                                <div className='col-7 text-center'>
                                    <span className='fw-bold fs-5'>Recipient Details</span>
                                </div>
                            </div>
                        </div>

                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-5 text-center pt-1'>
                                    <label for="inputHeadOrganization">Blood Group</label>
                                </div>
                                <div className='col-7'>
                                    <select id="inputState" class="form-select">
                                        <option>A+</option>
                                        <option>B+</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-5'>
                                    
                                </div>
                                <div className='col-7 text-center'>
                                    <button className='btn bg-dark text-white fw-semibold'>Current Location</button>
                                </div>
                            </div>
                        </div>

                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-5'>
                                    
                                </div>
                                <div className='col-7 text-center'>
                                    <span className='fw-semibold'>OR</span>
                                </div>
                            </div>
                        </div>

                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-5 text-center pt-1'>
                                    <label for="inputHeadOrganization">State</label>
                                </div>
                                <div className='col-7'>
                                    <select id="inputState" class="form-select">
                                        <option>Kerala</option>
                                        <option>Goa</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-5 text-center pt-1'>
                                    <label for="inputHeadOrganization">District</label>
                                </div>
                                <div className='col-7'>
                                    <select id="inputState" class="form-select">
                                        <option>Kannur</option>
                                        <option>Wayanad</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 text-end'>
                            <button className='btn btn-outline-dark fw-semibold m-1 proceed-btn' onClick={()=>navigate('/bloodTab')}>
                                Proceed 
                                <Arrow/>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecipientDetails