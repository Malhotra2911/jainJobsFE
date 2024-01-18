import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../../css/jobseeker/SignupLoginNavbar.css"
import { FaBars } from "react-icons/fa";
export default function Navbar () {
  const [hambergers,setHambergers] = useState(false);
  const toggle = () => setHambergers(!hambergers);
  return (
    <div className='entire_Nav'>
    <div className={hambergers ? 'Navbar-ContainerReponsiveness' : 'Navbar-Container'}
    onClick={()=> setHambergers(false)}
    >
      <div className='Nav_logo'>
        <img src="jobseeker/image27.png" alt='' />
      </div> 
      <div className='Nav-links'>
        <Link to='/'>Jobs</Link>
        <Link to='/JobseekerSubscription'>Subscription</Link>
        <Link to='/'>FAQ</Link>
        <Link to='/'>Blogs</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>Companies</Link>
        <Link to='/'>Referral</Link>
        <Link to='/'>Candidate</Link>

        {/* <Link to='/'>Freelance World</Link> */}
      </div>
    </div>
    <button className="mobile_menu_icons" onClick={toggle}>
            {hambergers ? ("X") : (<FaBars />)}
          </button>
    </div>
  )
}
