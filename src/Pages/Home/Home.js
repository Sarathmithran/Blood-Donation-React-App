import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Mission from '../../Components/Mission/Mission'
import Collaborators from '../../Components/Collaborators/Collaborators'
import GetBlood from '../../Components/GetBlood/GetBlood'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div>
        <Banner/>
        <Mission/>
        <Collaborators/>
        <GetBlood/>
        <Footer/>
    </div>
  )
}

export default Home