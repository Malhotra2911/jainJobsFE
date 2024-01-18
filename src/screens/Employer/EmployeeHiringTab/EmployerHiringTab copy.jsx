import React from "react";
import "../../../css/Employer/HiringTab.css";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import ConsultancyFirm from "../ConsultancyFirm/ConsultancyFirm";
import OwnCompany from "../OwnCompany/OwnCompany";
import Freelancing from "../Freelancing/Freelancing";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";

export default function EmployerHiringTab() {
  const initialstate = { companyname: "", website: "", lprofile: "", email: "", designation: "", posttype: "" };
  const [isFrom, setForm] = useState(initialstate);
  const [isOwnCompany, setisOwnCompany] = useState(false);
  const [ClientCompany, setClientCompany] = useState(false);
  const [freelancing, setFreelancing] = useState(false);
  const handleOnClickjobseeker1 = () => { setisOwnCompany(true); setForm({ ...isFrom, posttype: "1" }); }
  const CloseisOwnCompany = () => { setisOwnCompany(false); setForm(initialstate) };
  const handleOnClickemployer1 = () => { setClientCompany(true); setForm({ ...isFrom, posttype: "2" }); }
  const CloseClientCompany = () => { setClientCompany(false); setForm(initialstate) }
  const handleOnClickFreelancing = () => { setFreelancing(true); setForm({ ...isFrom, posttype: "3" }); }
  const CloseFreelancing = () => { setFreelancing(false); setForm(initialstate); }
  const navigate = useNavigate();
  const [gotonext, setgotonext] = useState(false);

  const onChangeText = (e) => {
    const { name, value } = e.target;
    setForm({ ...isFrom, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var arraydesignation = [];
    isFrom.designation.map((data, index) => {
      arraydesignation.push(data.FIELD_NAME)
    });
    const bodydata = {
      companyname:isFrom.companyname,
      website:isFrom.website,
      lprofile:isFrom.lprofile,
      email:isFrom.email,
      designation:JSON.stringify(arraydesignation),
      posttype:isFrom.posttype     
    }
    axiosInstance.post('employer/createPost?creation=create', bodydata).then((result) => {

      if(result.data.status === 1){
        toast.success("Great!Your have initilize post creation please continue ")
        setForm(initialstate)
        navigate('');   
      }
      if(result.data.status === 0){
        toast.error("Error! somthing wen't wrong")
      }

    })
  }

  return (
    <>
      <div className="employer_background_img">
        <div className="employer_job_post">
          <JobSeekerdashboard />
          <div className="employer_job_content">
            <DashboardProfile />
            <div className="hiringtab_container">
              <div className="hiringtab_card">
                <h2>Whom are you hiring for?</h2>
                <div className="hiringtab_body">
                  <div
                    className="hiringtabbody1"
                    onClick={handleOnClickjobseeker1}
                  >
                    <img
                      src="employer/product.png"
                      alt=""
                      className={isOwnCompany ? "jobseekerimg1" : "forcompany"}
                    />
                    <button className="company_client">Own Company</button>
                  </div>
                  <div
                    className="hiringtabbody2"
                    onClick={handleOnClickemployer1}
                  >
                    <img
                      src="employer/interview.png"
                      alt=""
                      className={ClientCompany ? "employerimg1" : "forclient"}
                    />
                    <button className="company_client">Clients Company</button>
                  </div>

                  <div
                    className="hiringtabbody2"
                    onClick={handleOnClickFreelancing}
                  >
                    <img
                      src="employer/interview.png"
                      alt=""
                      className={freelancing ? "employerimg1" : "forclient"}
                    />
                    <button className="company_client">Freelancing</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOwnCompany && <OwnCompany CloseOwnCompany={CloseisOwnCompany} onChangeText={onChangeText} submitform={handleSubmit} setForm={setForm} isFrom={isFrom}  gotonext={gotonext}/>}
      {ClientCompany && <ConsultancyFirm CloseClientCompany={CloseClientCompany} onChangeText={onChangeText} submitform={handleSubmit} setForm={setForm} isFrom={isFrom}  gotonext={gotonext}/>}
      {freelancing && <Freelancing CloseFreelancing={CloseFreelancing} onChangeText={onChangeText} submitform={handleSubmit} setForm={setForm} isFrom={isFrom}  gotonext={gotonext}/>}
    </>
  );
}
