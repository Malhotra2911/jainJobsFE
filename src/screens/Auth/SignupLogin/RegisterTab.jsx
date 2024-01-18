import React, { useEffect, useState } from 'react'
import "../../../css/jobseeker/RegisterTab.css"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { EncryptionKey } from '../../../config/Config';
import CryptoJS from 'crypto-js';
import { useDispatch } from 'react-redux';
import { SelectuserAction } from '../../../redux/action/AuthAction';
import { toast } from 'react-toastify';

export default function RegisterTab() {
  const [register, setRegister] = useState(false);
  const [registerEmployer, setRegisterEmployer] = useState(false)
  const [isUserid, setisUserid] = useState(null);
  const [isUsertype, setisUsertype] = useState(null);
  let navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { ID } = useParams();

  useEffect(() => {
    setisUserid(ID);
  }, [])

  const _login = () => {
    if (!isUsertype) {
      toast.error("please select user type to continue");
    }
    else {
      const userdata = {
        userid: isUserid,
        usertype: isUsertype,
      }
      dispatch(SelectuserAction(userdata, navigate));
    }
  }
  const handleOnClickjobseeker = () => {
    setRegister(true);
    setRegisterEmployer(false);
    setisUsertype(2);
  }
  const handleOnClickemployer = () => {
    setRegister(false);
    setRegisterEmployer(true);
    setisUsertype(1);
  }
  return (
    <div
      className='registertab_container'
    >
      <div className='registertab_card'>
        <h1>I would like to Register</h1>
        <div className='registertab_body'>
          <div className='registertabbody1' onClick={handleOnClickjobseeker}>
            <img src={"/jobseeker/jobseekertab.png"} alt='' className={register ? 'jobseekerimg' : 'jobseeker'} />
            <button className='jobseeker_employer' style={{ "cursor": "pointer" }}>As a Job Seeker</button>
          </div>
          <div className='registertabbody2' onClick={handleOnClickemployer}>
            <img src={"/jobseeker/employertab.png"} alt='' className={registerEmployer ? 'employerimg' : 'employer'} />
            <button className='jobseeker_employer' style={{ "cursor": "pointer" }}>As an Employer</button>
          </div>
        </div>
        <button className='btn_nxt' onClick={_login} style={{ "cursor": "pointer" }}>
          Next
        </button>
      </div>
    </div>
  )
}
