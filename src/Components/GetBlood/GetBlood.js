import React from 'react'
import love from '../../assest/Images/Love.png'
import './GetBlood.css'
import NumOne from '../../assest/Svg/NumOne'
import PenIcon from '../../assest/Svg/PenIcon'
import NumTwo from '../../assest/Svg/NumTwo'
import NumThree from '../../assest/Svg/NumThree'

function GetBlood() {
  return (
    <div>
        <div className='row' style={{margin:60,height:800}}>
            <div className='col-12' style={{height:150}}>
                <h2 className='fw-bold'>How to get Blood?</h2>
            </div>
            
            <div className='col-12 d-flex  justify-content-center'>
                <div className='border border-4 border-dark rounded-circle num-div'>
                    <NumOne/>
                </div>
                <div className='text-round rounded-circle d-flex flex-column justify-content-center p-4'>
                    <PenIcon/>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>
            </div>

            <div className='row'>

            <div className='col-3 '>
                    <div className='border border-4 border-dark rounded-circle num-div-two'>
                        <NumTwo/>
                    </div>

                    <div className='text-round-two rounded-circle d-flex flex-column justify-content-center p-4'>
                        <PenIcon/>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
            </div>

                <div className='col-6 d-flex justify-content-center'>
                    <img src={love} className='love'/>
                </div>

                <div className='col-3'>
                <div className='border border-4 border-dark rounded-circle num-div-three'>
                    <NumThree/>
                </div>

                <div className='text-round-three rounded-circle d-flex flex-column justify-content-center p-4'>
                    <PenIcon/>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default GetBlood