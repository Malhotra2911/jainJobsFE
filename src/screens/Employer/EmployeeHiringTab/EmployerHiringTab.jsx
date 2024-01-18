import React from "react";
import "../../../css/Employer/HiringTab.css";
// import { Link } from "react-router-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import ConsultancyFirm from "../ConsultancyFirm/ConsultancyFirm";
import OwnCompany from "../OwnCompany/OwnCompany";
import Freelancing from "../Freelancing/Freelancing";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";
import Great from "../../../components/Employer/Popups/Great";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function EmployerHiringTab() {
  const initialstate = {
    companyname: "",
    website: "",
    lprofile: "",
    email: "",
    designation: "",
    posttype: "",
  };
  
  const [isFrom, setForm] = useState({});
  const [isOwnCompany, setisOwnCompany] = useState(false);
  const [ClientCompany, setClientCompany] = useState(false);
  const [freelancing, setFreelancing] = useState(false);
  const [isRedirectId, setRedirectId] = useState(null);
  const location = useLocation();
  const [isupdateid, setisupdateid] = useState(0);
  const [iscreationtype, setiscreationtype] = useState(0);
  const navigate = useNavigate();
  const { mycreatedpost } = useSelector((state) => state.EmployerReducer);
  const { subscribation } = useSelector((state) => state.AuthReducer);

  const handleOnClickjobseeker1 = () => {
    setisOwnCompany(true);
    setForm({ ...isFrom, posttype: "1" });
  };
  const CloseisOwnCompany = () => {
    setisOwnCompany(false);
    setForm(initialstate);
  };
  const handleOnClickemployer1 = () => {
    setClientCompany(true);
    setForm({ ...isFrom, posttype: "2" });
  };
  const CloseClientCompany = () => {
    setClientCompany(false);
    setForm(initialstate);
  };
  const handleOnClickFreelancing = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "this part is under construction",
    });
  };
  const CloseFreelancing = () => {
    setFreelancing(false);
    setForm(initialstate);
  };


  React.useEffect(() => {
    if (subscribation && subscribation.length !== 0) {
      if (parseInt(subscribation.TYPE_OF_PLAN) !== 1 && parseInt(subscribation.TYPE_OF_PLAN) !== 2  && parseInt(subscribation.TYPE_OF_PLAN) !== 5  ) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        }).then(()=>{
          navigate("createjobpost",{replace:true})
        })      
      }
    }



  }, [subscribation]);



  React.useEffect(() => {
    let editpost = new URLSearchParams(location.search).get("editpost");
    let type = new URLSearchParams(location.search).get("type");
    let creationtype = new URLSearchParams(location.search).get("creationtype");
    if (editpost && type) {
      setisupdateid(JSON.parse(editpost));
      if (parseInt(type) === 1) {
        handleOnClickjobseeker1();
      }
      if (parseInt(type) === 2) {
        handleOnClickemployer1();
      }
      if (parseInt(type) === 3) {
        handleOnClickFreelancing();
      }
    }
    if (creationtype) {
      setiscreationtype(parseInt(creationtype));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      }).then(() => {
        window.location.reload();
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mycreatedpost]);

  const [gotonext, setgotonext] = useState(false);

  const onChangeText = (e) => {
    const { name, value } = e.target;
    setForm({ ...isFrom, [name]: value });
  };

  const handleSubmit = (event) => {
    if(iscreationtype === 3 && iscreationtype === 4  ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      }).then(()=>{
        navigate("createjobpost",{replace:true})
      })

      return false;
    }

    event.preventDefault();
    const bodydata = {
      companyname: isFrom.companyname,
      website: isFrom.website,
      lprofile: isFrom.lprofile,
      email: isFrom.email,
      designation: isFrom.designation,
      posttype: isFrom.posttype,
      updateid: isupdateid,
      CREATION_TYPE: iscreationtype,
    };
    axiosInstance
      .post("employer/createPost?creation=create", bodydata)
      .then((result) => {
        if (result.data.status === 1) {
          toast.success(
            "Great!Your have initilize post creation please continue"
          );
          setRedirectId(btoa(result.data.data.JOB_ID));
          setForm(initialstate);
          setgotonext(true);
        }
        if (result.data.status === 0) {
          toast.error("Error! somthing wen't wrong");
        }
      });
  };

  const updateprofile = (event) => {
    event.preventDefault();
    const bodydata = {
      companyname: isFrom.companyname,
      website: isFrom.website,
      lprofile: isFrom.lprofile,
      email: isFrom.email,
      designation: JSON.stringify(isFrom.designation),
      posttype: isFrom.posttype,
      updateid: isupdateid,
      CREATION_TYPE: iscreationtype,
    };
    axiosInstance
      .post("employer/createPost?creation=create", bodydata)
      .then((result) => {
        if (result.data.status === 1) {
          toast.success(
            "Great!Your have updated your post successfully please continue"
          );
          setRedirectId(btoa(isupdateid));
          setgotonext(true);
        }
        if (result.data.status === 0) {
          toast.error("Error! somthing wen't wrong");
        }
      });
  };

  return (
    <>
      <div className="employer_background_img">
        <div className="employer_job_post">
          <JobSeekerdashboard />
          <div className="employer_job_content">
            <DashboardProfile />
            <div className="hiringtab_container">
              <div className="hiringtab_card">
                {/* <h2>Whom are you hiring for?</h2> */}
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
                    <button className="company_client">Own Jobs</button>
                  </div>
                  {/* <div
                    className="hiringtabbody2"
                    onClick={handleOnClickemployer1}
                  >
                    <img
                      src="employer/interview.png"
                      alt=""
                      className={ClientCompany ? "employerimg1" : "forclient"}
                    />
                    <button className="company_client">Clients Company</button>
                  </div> */}

                  {/* <div
                    className="hiringtabbody2"
                    onClick={handleOnClickFreelancing}
                  >
                    <img
                      src="employer/interview.png"
                      alt=""
                      className={freelancing ? "employerimg1" : "forclient"}
                    />
                    <button className="company_client">Freelancing</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOwnCompany && (
        <OwnCompany
          CloseOwnCompany={CloseisOwnCompany}
          onChangeText={onChangeText}
          submitform={handleSubmit}
          updateprofile={updateprofile}
          setForm={setForm}
          isFrom={isFrom}
          gotonext={gotonext}
        />
      )}
      {/* {ClientCompany && (
        <ConsultancyFirm
          CloseClientCompany={CloseClientCompany}
          onChangeText={onChangeText}
          submitform={handleSubmit}
          updateprofile={updateprofile}
          setForm={setForm}
          isFrom={isFrom}
          gotonext={gotonext}
        />
      )}
      {freelancing && (
        <Freelancing
          CloseFreelancing={CloseFreelancing}
          onChangeText={onChangeText}
          submitform={handleSubmit}
          setForm={setForm}
          isFrom={isFrom}
          gotonext={gotonext}
        />
      )} */}
      {gotonext && (
        <Great Greatpopup={setgotonext} isRedirectId={isRedirectId} />
      )}
    </>
  );
}
