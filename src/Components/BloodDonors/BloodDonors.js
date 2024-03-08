import React, { useState } from 'react'
import waring from '../../assest/Images/warning.png'
import './BloodDonors.css'
import Call from '../../assest/Svg/Call';
import CallRefresh from '../../assest/Svg/CallRefresh';
import Refresh from '../../assest/Svg/Refresh';
import Warning from '../../assest/Svg/Warning';
import ModalBloodIcon from '../../assest/Svg/ModalBloodIcon';

function BloodDonors() {

    const [data,setData] = useState(true);
    const [modal,setModal] = useState(true);

  return (
    <div className='container mt-5' style={{minHeight:600}}>
        <div className='row call-div p-3'>
            <div className='col-9'>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><br></br>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            </div>
            <div className='col-3'>
                <div className='row'>
                    <div className='col-12 pb-3 text-end'>
                        {
                            data ?
                            <button className='btn bg-success text-white fw-semibold' data-bs-toggle="modal" data-bs-target="#autocall" onClick={()=>setData(false)}>
                                Auto-Call 
                                <Call/>
                            </button>
                            : 
                            <button className='btn bg-success text-white fw-semibold call-btn' data-bs-toggle="modal" data-bs-target="#autocall"> 
                                <CallRefresh/>
                            </button>
                        }
                    </div>
                    <div className='col-12 text-end'>
                        <img src={waring} style={{width:14,height:14}}/>
                        <span className='ps-2'>Use in case of emergency</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='row name-div p-3 mt-4'>
            <div className='col-6'>
                <ul>
                    <li>ABC</li>
                    <li className='number'>xxxxxxxxxx</li>
                </ul>
            </div>
            <div className='col-6 text-end'>
                <button className='btn text-dark refresh-btn fw-semibold'>
                    Refresh
                    <Refresh/>
                </button>
            </div>

            <div className='col-12'>
                <ul>
                    <li>DEF</li>
                    <li className='number'>xxxxxxxxxx</li>
                </ul>
            </div>

            <div className='col-12'>
                <ul>
                    <li>GHI</li>
                    <li className='number'>xxxxxxxxxx</li>
                </ul>
            </div>

            <div className='col-12'>
                <ul>
                    <li>XYZ</li>
                    <li className='number'>xxxxxxxxxx</li>
                </ul>
            </div>
            
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <Warning/>
                        Call Main Coordinator If The Above Contacts Are Not Available
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <div className='row'>
                            <div className='col-12'>
                                <span className='fw-bold fs-4'>NAME</span>
                            </div>
                            <div className='col-12'>
                                <span className='text-secondary'>Place</span><br></br>
                                <span className='text-secondary'>Contact Number : XXXXXXXXXX</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>

        {
            modal ? <div className="modal fade" id="autocall" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content">    
                    <div className="modal-body">
                        <span>By clicking this, you are going to use the Auto-call feature.Click ‘Continue’ to proceed</span>
                    </div>
                    <div class="modal-footer d-flex justify-content-start">
                        <button type="button" className="btn btn-outline-dark fw-semibold" data-bs-target="#autocall" onClick={()=>setModal(false)}>Continue</button>
                        <button type="button" className="btn bg-dark text-white" data-bs-dismiss="modal" onClick={()=>setData(true)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div> 
        : 
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-success">
                    <div class="modal-body">
                            <div className='row'>
                                <div className='col-12'>
                                    <span className='fw-bold fs-4 text-white'>NAME</span>
                                </div>
                                <div className='col-12'>
                                    <span className='text-white'>Place</span><br></br>
                                    <span className='text-white'>Contact Number : XXXXXXXXXX</span>
                                </div>
                                <div className='col-12 text-center mt-3'>
                                    <span>
                                        Is Ready To Donate Blood
                                        <ModalBloodIcon/>
                                    </span>
                                </div>
                            </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-dark fw-semibold" data-bs-dismiss="modal" onClick={()=>{setData(true);setModal(true)}} >OK</button>
                    </div>
                </div>
            </div>
        </div>
        

        }

    </div>
  )
}

export default BloodDonors