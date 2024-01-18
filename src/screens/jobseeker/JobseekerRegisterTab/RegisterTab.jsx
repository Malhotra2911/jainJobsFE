import React, { useEffect, useState } from 'react'
import "../../../css/jobseeker/RegisterTab.css"
import { useLocation, useNavigate } from 'react-router-dom'
import { EncryptionKey } from '../../../config/Config';
import CryptoJS from 'crypto-js';
import { useDispatch } from 'react-redux';
import { SelectuserAction } from '../../../redux/action/AuthAction';

export default function RegisterTab() {
  const [register, setRegister] = useState(false);
  const [registerEmployer, setRegisterEmployer] = useState(false)
  const [submit, setSubmit] = useState(false);
  const [isUserid, setisUserid] = useState(null);
  const [isUsertype, setisUsertype] = useState(null);
  const [isToken, setisToken] = useState(null)
  let navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    let type = new URLSearchParams(location.search).get("type");
    type = type.split(" ").join('+')
    setisToken(type);


    var bytes = CryptoJS.AES.decrypt(type.toString(), EncryptionKey);
    var decryptedData = bytes.toString(CryptoJS.enc.Utf8);    
    console.log(decryptedData);
    var userid = decryptedData.split("@");
    setisUserid(userid[1]);

  }, [])

  const _login = () => {
    const userdata = {
      userid: isUserid,
      usertype: isUsertype,
      token: isToken,
    }
    dispatch(SelectuserAction(userdata, navigate));

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
    // style={{ backgroundImage: `url(${Background})` }}
    >
      <div className='registertab_card'>
        <h1>I would like to Register</h1>
        <div className='registertab_body'>
          <div className='registertabbody1' onClick={handleOnClickjobseeker}>
            <img src="jobseeker/jobseekertab.png" alt='' className={register ? 'jobseekerimg' : 'jobseeker'} />
            <button className='jobseeker_employer' style={{ "cursor": "pointer" }}>As a Job Seeker</button>
          </div>
          <div className='registertabbody2' onClick={handleOnClickemployer}>
            <img src="jobseeker/employertab.png" alt='' className={registerEmployer ? 'employerimg' : 'employer'} />
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
