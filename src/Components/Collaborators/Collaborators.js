import React from 'react'
import './Collaborators.css'

function Collaborators() {
  return (
    <div style={{margin:60}} className='pb-5'>
        <div className='row'>
            <div className='col-12 pb-3'>
                <h2 className='fw-bold'>Our Collaborators</h2>
            </div>
            <div className='row justify-content-between text-center'>
                <div className='col-3 collab-name ms-3'>
                    NCC
                </div>
                <div className='col-3 collab-name'>
                    NSS
                </div>
                <div className='col-3 collab-name'>
                    YMCA
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collaborators