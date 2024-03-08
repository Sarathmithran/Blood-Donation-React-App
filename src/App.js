import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Header from './Components/Header/Header';
import RegisterAsDonor from './Pages/RegisterAsDonor/RegisterAsDonor';
import RegisterAsOrganization from './Pages/RegisterAsOrganization/RegisterAsOrganization';
import FindBlood from './Pages/FindBlood/FindBlood';
import OtpVerification from './Pages/OtpVerification/OtpVerification';
import VerificationSuccess from './Pages/VerificationSuccess/VerificationSuccess';
import BloodTab from './Pages/BloodTab/BloodTab';
import Profile from './Pages/Profile/Profile';
import EditProfile from './Pages/EditProfile/EditProfile';
import NotFound from './Pages/NotFound/NotFound';
import RegisterAsHospital from './Pages/RegisterAsHospital/RegisterAsHospital';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/registerAsDonor' element={<RegisterAsDonor/>}/>
        <Route path='/registerAsOrganization' element={<RegisterAsOrganization/>}/>
        <Route path='/registerAsHospital' element={<RegisterAsHospital/>}/>
        <Route path='/findBlood' element={<FindBlood/>}/>
        <Route path='/otpVerification' element={<OtpVerification/>}/>
        <Route path='/verificationSuccess' element={<VerificationSuccess/>}/>
        <Route path='bloodtab'element={<BloodTab/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/editProfile' element={<EditProfile/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
