import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assest/Svg/Logo';
import MailIcon from '../../assest/Svg/MailIcon';
import BellIcon from '../../assest/Svg/BellIcon';

function Header() {

    const navigate = useNavigate();
    const [log,setLog] = useState(true);

  return (
    <div className='position-sticky top-0 start-0 bg-transparent header-main'>
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand rounded-circle logo" to={"/"}>
                    <Logo/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link fw-semibold" aria-current="page" to={'/'}>Home</NavLink>
                        <NavLink className="nav-link fw-semibold" to={'/aboutus'}>About Us</NavLink>
                        <NavLink className="nav-link fw-semibold" to={'/findBlood'}>Find Blood</NavLink>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Register Now
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to={'/registerAsDonor'}>Register as Donor</Link></li>
                                <li><Link class="dropdown-item" to={'/registerAsOrganization'}>Register as Organization</Link></li>
                                <li><Link class="dropdown-item" to={'/registerAsHospital'}>Register as Hospital</Link></li>
                            </ul>
                        </li>
                        {
                            log === false ? (
                                <>
                                    <a className='ms-5 mt-1 notification-icon'><MailIcon/></a> 
                                    <a className='ms-5 mt-1 notification-icon'><BellIcon/></a>
                                </>
                            )
                            : null
                        }
                        {
                            log ? <button type="button" className='btn btn-outline-dark fw-semibold login-Btn' onClick={()=>{navigate('/profile');setLog(false)}}>Log In</button>
                            : <button type="button" className='btn btn-outline-dark fw-semibold logout-Btn' data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover" onClick={()=>{setLog(true);navigate('/')}}>Log Out</button>
                        }
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header