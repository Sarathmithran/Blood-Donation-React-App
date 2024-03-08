import React, { useState } from 'react'
import BloodDonors from '../../Components/BloodDonors/BloodDonors';
import BloodBank from '../../Components/BloodBank/BloodBank';
import './BloodTab.css'

function BloodTab() {

  const [tab,setTab] = useState(true);

  return (
    <>
        <div className='d-flex justify-content-center mt-4'>
            <div className='tab d-flex'>
                    <a onClick={()=>setTab(true)}><div className={tab ? 'tab1 tab-dark fw-semibold' : 'tab1 tab-gray fw-semibold '}>
                        Blood Donors
                    </div></a>
                    <a onClick={()=>setTab(false)}><div className={tab === false ? 'tab2 tab-dark fw-semibold' : 'tab2 tab-gray fw-semibold '}>
                        Blood Banks
                    </div></a>
            </div>
        </div>
        {
            tab === true ? <BloodDonors/> : <BloodBank/>
        }

    </>
  )
}

export default BloodTab