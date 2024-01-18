/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Profile1 from "../Profile1/Profile1";
import Profile2 from "../Profile2/Profile2";
import Profile3 from "../Profile3/Profile3";
import Profile4 from "../Profile4/Profile4";
import Profile5 from "../Profile5/Profile5";
import JobSeekerdashboard from "../../JOBSeekercontent/JobSeekerdashboard";
import DashboardProfile from "../../UserDashboardProfile/DashboardProfile";
import { useDispatch, useSelector } from "react-redux";
import "../../../../css/jobseeker/Profile.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import SideBar from "../../../Employer/employersidebar/JobSeekerdashboard";
import axiosInstance from "../../../../utils/axiosInstance";
import { CircularLoding } from "../../../../redux/action/AuthAction";
import { toast } from "react-toastify";



export default function Profile() {
  const [page, setPage] = useState(0);
  const [isFrom, setisFrom] = useState({
    PROFILEPIC: "",
    CV: "",
    F_NAME: "",
    M_NAME: "",
    L_NAME: "",
    PHONENO: "",
    DOB: "",
    ADDRESS: "",
    CURRENT_ADDRESS: "",
    PERMANENT_ADDRESS: "",
    AREA_OF_INTREST: "",
    LINKEDIN: "",
    TYPE_OF_EDUCATION: "",
    UNIVERSITY_NAME: "",
    PASSING_YEAR: "",
    SUBJECT_OF_PASSING: "",
    PERCENTAGE: "",
    EXPERIANCE: "",
    JOB_POSITON: "",
    NAME_OF_COMPANY: "",
    COMPANY_ADDRESS: "",
    PREV_COMPANY_SALARY: "",
    SHIFT_TYPE: "",
    WORKTYPE_TYPE: "",
    NOTICE_PERIOD: "",
    EXPECTED_SALARY: "",
    PREFER_SHIFT: "",
    RELOCATE: "",
  });


  const { user } = useSelector((state) => state.AuthReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };
  const userVerify = () => {
    if (user.USER_ROLE === 1) {
      return true;
    } else {
      return false;
    }
  };

  const formsubmitHandleClick = () => {
    if (page === FormTitles.length - 1) {
      submitdata();
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  React.useEffect(() => {
    if (user && user.length !== 0) {
      _userdatafunction();
    }
  }, [user]);

  const _userdatafunction = () => {
    setisFrom({
      PROFILEPIC: user[0].PROFILEPIC,
      CV: user[0].CV,
      F_NAME: user[0].F_NAME,
      M_NAME: user[0].M_NAME,
      L_NAME: user[0].L_NAME,
      PHONENO: user[0].PHONENO,
      DOB: user[0].DOB,
      ADDRESS: user[0].ADDRESS,
      CURRENT_ADDRESS: user[0].CURRENT_ADDRESS,
      PERMANENT_ADDRESS: user[0].PERMANENT_ADDRESS,
      AREA_OF_INTREST: user[0].AREA_OF_INTREST,
      LINKEDIN: user[0].LINKEDIN,
      EMAIL: user[0].EMAIL,
      TYPE_OF_EDUCATION:
        user[0].ACADEMIC_PERFORMANCE &&
        JSON.parse(user[0].ACADEMIC_PERFORMANCE).TYPE_OF_EDUCATION,
      UNIVERSITY_NAME:
        user[0].ACADEMIC_PERFORMANCE &&
        JSON.parse(user[0].ACADEMIC_PERFORMANCE).UNIVERSITY_NAME,
      PASSING_YEAR:
        user[0].ACADEMIC_PERFORMANCE &&
        JSON.parse(user[0].ACADEMIC_PERFORMANCE).PASSING_YEAR,
      SUBJECT_OF_PASSING:
        user[0].ACADEMIC_PERFORMANCE &&
        JSON.parse(user[0].ACADEMIC_PERFORMANCE).SUBJECT_OF_PASSING,
      PERCENTAGE:
        user[0].ACADEMIC_PERFORMANCE &&
        JSON.parse(user[0].ACADEMIC_PERFORMANCE).PERCENTAGE,
      EXPERIANCE: user[0].EXPERIANCE,
      JOB_POSITON: user[0].JOB_POSITON,
      NAME_OF_COMPANY: user[0].NAME_OF_COMPANY,
      COMPANY_ADDRESS: user[0].COMPANY_ADDRESS,
      PREV_COMPANY_SALARY: user[0].PREV_COMPANY_SALARY,
      SHIFT_TYPE: user[0].SHIFT_TYPE,
      WORKTYPE_TYPE: user[0].WORKTYPE_TYPE,
      NOTICE_PERIOD: user[0].NOTICE_PERIOD,
      EXPECTED_SALARY: JSON.parse(user[0].EXPECTED_SALARY),
      PREFER_SHIFT: user[0].PREFER_SHIFT,
      RELOCATE: user[0].RELOCATE,
    });
  };

  const submitdata = () => {
    Loading(true);
    const formdata = new FormData();
    formdata.append("PROFILEPIC", isFrom.PROFILEPIC);
    formdata.append("CV", isFrom.CV);
    formdata.append("F_NAME", isFrom.F_NAME);
    formdata.append("M_NAME", isFrom.M_NAME);
    formdata.append("L_NAME", isFrom.L_NAME);
    formdata.append("PHONENO", isFrom.PHONENO);
    formdata.append("DOB", isFrom.DOB);
    formdata.append("ADDRESS", isFrom.ADDRESS);
    formdata.append("CURRENT_ADDRESS", isFrom.CURRENT_ADDRESS);
    formdata.append("PERMANENT_ADDRESS", isFrom.PERMANENT_ADDRESS);
    formdata.append("AREA_OF_INTREST", isFrom.AREA_OF_INTREST);
    formdata.append("LINKEDIN", isFrom.LINKEDIN);
    formdata.append(
      "ACADEMIC_PERFORMANCE",
      JSON.stringify({
        TYPE_OF_EDUCATION: isFrom.TYPE_OF_EDUCATION,
        UNIVERSITY_NAME: isFrom.UNIVERSITY_NAME,
        PASSING_YEAR: isFrom.PASSING_YEAR,
        SUBJECT_OF_PASSING: isFrom.SUBJECT_OF_PASSING,
        PERCENTAGE: isFrom.PERCENTAGE,
      })
    );
    formdata.append("EXPERIANCE", isFrom.EXPERIANCE);
    formdata.append("JOB_POSITON", isFrom.JOB_POSITON);
    formdata.append("NAME_OF_COMPANY", isFrom.NAME_OF_COMPANY);
    formdata.append("COMPANY_ADDRESS", isFrom.COMPANY_ADDRESS);
    formdata.append("PREV_COMPANY_SALARY", isFrom.PREV_COMPANY_SALARY);
    formdata.append("SHIFT_TYPE", isFrom.SHIFT_TYPE);
    formdata.append("WORKTYPE_TYPE", isFrom.WORKTYPE_TYPE);
    formdata.append("NOTICE_PERIOD", isFrom.NOTICE_PERIOD);
    formdata.append("EXPECTED_SALARY", JSON.stringify(isFrom.EXPECTED_SALARY));
    formdata.append("PREFER_SHIFT", isFrom.PREFER_SHIFT);

    axiosInstance
      .post("user/update-jobseeker-profile", formdata)
      .then((res) => {
        if (res.data.status === 1) {
          toast.success("Profile Updated Successfully :) ");
          navigate("/availablejobs");
          setTimeout(() => {
            window.location.reload();
          }, 1800);
        }
        if (res.data.status === 1) {
          Loading(false);
        }
      });
  };

  const FormTitles = [
    "Personal Information",
    "Latest Academic Info",
    "Professional Info",
    "Looking for ",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Profile1 isFrom={isFrom} setisFrom={setisFrom} />;
    } else if (page === 1) {
      return <Profile2 isFrom={isFrom} setisFrom={setisFrom} />;
    } else if (page === 2) {
      return <Profile3 isFrom={isFrom} setisFrom={setisFrom} />;
    } else if (page === 3) {
      return <Profile4 isFrom={isFrom} setisFrom={setisFrom} />;
    }
  };

  const assign1 = () => {
    if (page > 0) {
      return true;
    } else {
      return false;
    }
  };
  const assign2 = () => {
    if (page > 1) {
      return true;
    } else {
      return false;
    }
  };
  const assign3 = () => {
    if (page > 2) {
      return true;
    } else {
      return false;
    }
  };
  const assign4 = () => {
    if (page > 3) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="background_img">
      <div className="useprofile_container">
        {userVerify() ? <SideBar /> : <JobSeekerdashboard />}
        <div className="Profile_Form_content">
          <DashboardProfile />

          <div className="background_img_manage_profile">
            <div className="form-containers_profile">
              <div className="progressbar">
                <div className={assign1() ? "proactive1" : "default"}></div>
                <div className={assign2() ? "proactive1" : "default"}></div>
                <div className={assign3() ? "proactive1" : "default"}></div>
                <div className={assign4() ? "proactive1" : "default"}></div>
              </div>
              <div className="header">
                <h3>
                  {" "}
                  <b>{FormTitles[page]}</b>
                </h3>
              </div>
              <div className="body">{PageDisplay()}</div>
              <div className="footer">
                <Button
                  sx={{
                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                    width: "30%",
                    color: "#000000",
                    textTransform: "none",
                    fontStyle: "none",
                    "&:hover": {
                      backgroundColor: "#F7701D",
                    },
                  }}
                  disabled={page === 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                  Prev
                </Button>
                <Button
                  sx={{
                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                    width: "30%",
                    color: "#000000",
                    textTransform: "none",
                    fontStyle: "none",
                    "&:hover": {
                      backgroundColor: "#F7701D",
                    },
                  }}
                  onClick={formsubmitHandleClick}
                >
                  {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
