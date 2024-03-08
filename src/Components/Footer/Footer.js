import React from 'react'
import './Footer.css'
import FooterBlood from '../../assest/Svg/FooterBlood'
import FooterMail from '../../assest/Svg/FooterMail'
import Fb from '../../assest/Svg/Fb'
import X from '../../assest/Svg/X'
import Insta from '../../assest/Svg/Insta'

function Footer() {
  return (
    <div style={{backgroundColor:'#D40C0C',height:450}}>
        <div className='container'>
            <div className='row pt-5 get-start-div pb-5'> 
                <div className='col-6'>
                    <FooterBlood/>
                </div>
                <div className='col-6 d-flex justify-content-end'>
                    <span className='get-start me-5 pt-1'>Ready to get started?</span>
                    <button className='btn bg-white fw-bold rounded-2 donate-btn'>Donate</button>
                </div>
            </div>

            <div className='row pt-5'>
                <div className='col-3'>
                    <span className='subs'>Subscribe to our<br></br> newsletter</span><br></br>
                    <input type='text' placeholder='Email address' className='subs-input mt-5'/>
                    <span className='rounded-top mail-btn'>
                        <FooterMail/>
                    </span>
                </div>
                <div className='col-3'>
                    <ul>
                        <li className='li-header'>Services</li>
                        <li>Email Marketing</li>
                        <li>Campaigns</li>
                        <li>Branding</li>
                        <li>Offline</li>
                    </ul>
                </div>
                <div className='col-3'>
                    <ul>
                        <li className='li-header'>About</li>
                        <li>Our Story</li>
                        <li>Benefits</li>
                        <li>Team</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='col-3'>
                    <ul>
                        <li className='li-header'>Help</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            <div className='row pt-5'>
                <div className='col-6'>
                    <span className='pe-5 text-white'>Terms & Conditions</span>
                    <span className='text-white'>Privacy Policy</span>
                </div>
                <div className='col-6 d-flex justify-content-end gap-5'>
                    <div>
                        <Fb/>
                    </div>
                    <div>
                        <X/>
                    </div>
                    <div>
                        <Insta/>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer