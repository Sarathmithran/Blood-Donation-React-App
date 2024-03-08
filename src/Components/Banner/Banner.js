import React from 'react'
import './Banner.css'
import { useNavigate } from 'react-router-dom'
import BannerImg from '../../assest/Svg/BannerImg';

function Banner() {

    const navigate = useNavigate();

  return (
    <div>
        <div className='row'>
            <div className='col'>
                <BannerImg/> 
            </div>
            <div className='col d-flex flex-column justify-content-center' style={{marginRight:35}}>
                    <div className='mb-5 d-flex justify-content-end'>
                        <h2 className='fw-bold text-end'>Save Life Donate <br></br> Blood</h2>
                    </div>
                    <div className='mb-5 d-flex justify-content-end'>
                        <span className='banner-text'>Every drop of blood donated has the potential to save a life. Blood donation is an act of compassion and generosity that can make a profound difference in someone's life. From emergencies to chronic illnesses, many rely on donated blood for survival. Your willingness to donate not only provides a lifeline to those in need but also fosters a sense of community and solidarity. So, let's come together and contribute to this noble cause, because each donation is a gift of life.</span>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='bg-black text-white p-2 rounded-3 fw-bold' style={{width:150}} onClick={()=>navigate('/findBlood')}>Get Blood Now</button>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Banner