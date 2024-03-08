import React from 'react'
import blood from '../../assest/Images/blood.jpg'

function AboutUs() {
  return (
    <div>
        <div className='container' style={{minHeight:700}}>
            <div className='row'>
                <div className='col-12 pt-5'>
                    <span className='fw-semibold'> Welcome, Our mission is to save lives through blood donation. Founded by passionate individuals, we connect donors with those in urgent need of blood transfusions. Through our platform, we ensure that no one suffers due to a shortage of blood. Join us in our life-saving mission by registering as a donor today and becoming part of our community dedicated to making a positive impact. Have questions or want to learn more? Contact our team. Together, let's save lives through blood donation.</span>
                </div>
                <div className='col-12 d-flex justify-content-center'>
                    <img  src={blood}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs