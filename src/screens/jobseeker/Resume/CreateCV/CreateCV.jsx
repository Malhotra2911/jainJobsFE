import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import "./CreateCV.css";
import "../../../../css/jobseeker/CreateCV.css";
import Button from "@mui/material/Button";
import PersonalDetail from "../../ResumeBuildByOwn/PersonalDetail";
import Educations from "../../ResumeBuildByOwn/Educations";
import Employment from "../../ResumeBuildByOwn/Employment";
import Skills from "../../ResumeBuildByOwn/Skills";
import Industry from "../../ResumeBuildByOwn/Industry";
import Template1 from "../Templates/Template1/Template1";
import axiosInstance from "../../../../utils/axiosInstance";
import html2PDF from "jspdf-html2canvas";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function CreateCV() {
  const [personalDetails, setPersonalDetails] = useState(false);
  const [education, setEducation] = useState(false);
  const [employment, setEmployment] = useState(false);
  const [industry, setIndustry] = useState(false);
  const [skills, setSkills] = useState(false);

  const [isFrom, setForm] = React.useState({
    F_NAME: "",
    M_NAME: "",
    L_NAME: "",
    EMAIL: "",
    PHONE: "",
    FACEBOOK: "",
    LINKEDIN: "",
    COBJECTIVE: "",
    ADDRESS: "",
    DOB: "",
    //-------------- education-------------------
    ed_clg1: "",
    ed_yearofpassing1: "",
    ed_yeartypepfed1: "",
    ed_country1: "",
    ed_clg2: "",
    ed_yearofpassing2: "",
    ed_yeartypepfed2: "",
    ed_country2: "",
    // -----------------employementdetails -----------
    emp_company1: "",
    emp_typeofjob1: "",
    emp_jobposi1: "",
    emp_dept1: "",
    emp_company2: "",
    emp_typeofjob2: "",
    emp_jobposi2: "",
    emp_dept2: "",
    // -----------------project and responsibelites----------
    proect_name1: "",
    project_desi1: "",
    project_respo1: "",
    proect_name2: "",
    project_desi2: "",
    project_respo2: "",
    // ----------------other--------------
    skill: [],
    language: ["english"],
  });

  const onChangeText = (e) => {
    const { name, value } = e.target;
    setForm({ ...isFrom, [name]: value });
  };

  React.useEffect(() => {
    getcv();
  }, []);

  const getcv = () => {
    axiosInstance
      .get("user/createcv")
      .then((res) => {
        try {
          if (res.data.succes) {
            const response = res.data.data;
            const PERSONALINFO = JSON.parse(response.PERSONALINFO);
            const EDUCATION = JSON.parse(response.EDUCATION);
            const EMPLOYMENT = JSON.parse(response.EMPLOYMENT);
            const PROJECT = JSON.parse(response.PROJECT);
            const SKILL = JSON.parse(response.SKILL);

            setForm({
              F_NAME: PERSONALINFO.F_NAME,
              M_NAME: PERSONALINFO.M_NAME,
              L_NAME: PERSONALINFO.L_NAME,
              EMAIL: PERSONALINFO.EMAIL,
              PHONE: PERSONALINFO.PHONE,
              FACEBOOK: PERSONALINFO.FACEBOOK,
              LINKEDIN: PERSONALINFO.LINKEDIN,
              COBJECTIVE: PERSONALINFO.COBJECTIVE,
              ADDRESS: PERSONALINFO.ADDRESS,
              DOB: PERSONALINFO.DOB,
              //-------------- education-------------------
              ed_clg1: EDUCATION.ed_clg1,
              ed_yearofpassing1: EDUCATION.ed_yearofpassing1,
              ed_yeartypepfed1: EDUCATION.ed_yeartypepfed1,
              ed_country1: EDUCATION.ed_country1,
              ed_clg2: EDUCATION.ed_clg2,
              ed_yearofpassing2: EDUCATION.ed_yearofpassing2,
              ed_yeartypepfed2: EDUCATION.ed_yeartypepfed2,
              ed_country2: EDUCATION.ed_country2,
              // -----------------employementdetails -----------
              emp_company1: EMPLOYMENT.emp_company1,
              emp_typeofjob1: EMPLOYMENT.emp_typeofjob1,
              emp_jobposi1: EMPLOYMENT.emp_jobposi1,
              emp_dept1: EMPLOYMENT.emp_dept1,
              emp_company2: EMPLOYMENT.emp_company2,
              emp_typeofjob2: EMPLOYMENT.emp_typeofjob2,
              emp_jobposi2: EMPLOYMENT.emp_jobposi2,
              emp_dept2: EMPLOYMENT.emp_dept2,
              // -----------------project and responsibelites----------
              proect_name1: PROJECT.proect_name1,
              project_desi1: PROJECT.project_desi1,
              project_respo1: PROJECT.project_respo1,
              proect_name2: PROJECT.proect_name2,
              project_desi2: PROJECT.project_desi2,
              project_respo2: PROJECT.project_respo2,
              // ----------------other--------------
              skill: SKILL.skill,
              language: SKILL.language,
            });
          }
        } catch (error) {
          console.log(error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onsubmit = () => {
    const userdata = {
      PERSONALINFO: JSON.stringify({
        F_NAME: isFrom.F_NAME,
        M_NAME: isFrom.M_NAME,
        L_NAME: isFrom.L_NAME,
        EMAIL: isFrom.EMAIL,
        PHONE: isFrom.PHONE,
        FACEBOOK: isFrom.FACEBOOK,
        LINKEDIN: isFrom.LINKEDIN,
        COBJECTIVE: isFrom.COBJECTIVE,
        ADDRESS: isFrom.ADDRESS,
        DOB: isFrom.DOB,
      }),
      EDUCATION: JSON.stringify({
        ed_clg1: isFrom.ed_clg1,
        ed_yearofpassing1: isFrom.ed_yearofpassing1,
        ed_yeartypepfed1: isFrom.ed_yeartypepfed1,
        ed_country1: isFrom.ed_country1,
        ed_clg2: isFrom.ed_clg2,
        ed_yearofpassing2: isFrom.ed_yearofpassing2,
        ed_yeartypepfed2: isFrom.ed_yeartypepfed2,
        ed_country2: isFrom.ed_country2,
      }),
      EMPLOYMENT: JSON.stringify({
        emp_company1: isFrom.emp_company1,
        emp_typeofjob1: isFrom.emp_typeofjob1,
        emp_jobposi1: isFrom.emp_jobposi1,
        emp_dept1: isFrom.emp_dept1,
        emp_company2: isFrom.emp_company2,
        emp_typeofjob2: isFrom.emp_typeofjob2,
        emp_jobposi2: isFrom.emp_jobposi2,
        emp_dept2: isFrom.emp_dept2,
      }),
      PROJECT: JSON.stringify({
        proect_name1: isFrom.proect_name1,
        project_desi1: isFrom.project_desi1,
        project_respo1: isFrom.project_respo1,
        proect_name2: isFrom.proect_name2,
        project_desi2: isFrom.project_desi2,
        project_respo2: isFrom.project_respo2,
      }),
      SKILL: JSON.stringify({
        skill: isFrom.skill,
        language: isFrom.language,
      }),
    };
    axiosInstance
      .post("user/createcv", userdata)
      .then((res) => {
        try {
          toast.success(res.data.message);
        } catch (error) {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const downloadresume = () => {
    let page = document.getElementById("printresume");
    var opt = {
      margin: 1,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 10 },     
    };

    html2PDF(page, {
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
            html2canvas: { scale: 10 },
      imageType: "image/jpeg",
      output: "./pdf/generate.pdf",
    });
  };

  return (
    <div className="createcv_container">
      <div className="sidebarcreatecv">
        <div className="createCV-SideBar">
          <Link to="/" style={{ listStyle: "none" }}>
            <img src="jobseeker/fmnlogo.svg" alt="_" />
          </Link>
          <div className="DropDown-CategoryCV">
            <button className="DropDown-CategoryCV-BTN">
              Fill the Details
            </button>
          </div>

          <div className="DropDown-CategoryCV">
            <button
              className="DropDown-CategoryCV-BTN"
              onClick={() => setPersonalDetails(true)}
            >
              Personal Details
              <AddCircleIcon />
            </button>
          </div>
          {personalDetails && (
            <PersonalDetail
              isFrom={isFrom}
              onChangeText={onChangeText}
              PersonalDetail={setPersonalDetails}
            />
          )}
          <div className="DropDown-CategoryCV">
            <button
              className="DropDown-CategoryCV-BTN"
              onClick={() => setEducation(true)}
            >
              Education
              <AddCircleIcon />
            </button>
            {education && (
              <Educations
                isFrom={isFrom}
                onChangeText={onChangeText}
                educations={setEducation}
              />
            )}
          </div>
          <div className="DropDown-CategoryCV">
            <button
              className="DropDown-CategoryCV-BTN"
              onClick={() => setEmployment(true)}
            >
              Employement
              <AddCircleIcon />
            </button>
            {employment && (
              <Employment
                isFrom={isFrom}
                onChangeText={onChangeText}
                employments={setEmployment}
              />
            )}
          </div>
          <div className="DropDown-CategoryCV">
            <button
              className="DropDown-CategoryCV-BTN"
              onClick={() => setIndustry(true)}
            >
              Projects
              <AddCircleIcon />
            </button>
            {industry && (
              <Industry
                isFrom={isFrom}
                onChangeText={onChangeText}
                industries={setIndustry}
              />
            )}
          </div>
          <div className="DropDown-CategoryCV">
            <button
              className="DropDown-CategoryCV-BTN"
              onClick={() => setSkills(true)}
            >
              Other Details
              <AddCircleIcon />
            </button>
            {skills && (
              <Skills
                isFrom={isFrom}
                onChangeText={onChangeText}
                skill={setSkills}
              />
            )}
          </div>
        </div>
        <div className="createcv_btn_grp">
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#F7701D",
              color: "#FFFFF",
              "&:hover": { backgroundColor: "#F7701D" },
            }}
            onClick={onsubmit}
          >
            Save My CV
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#F7701D",
              color: "#FFFFF",
              "&:hover": { backgroundColor: "#F7701D" },
            }}
            onClick={downloadresume}
          >
            Download CV
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#F7701D",
              color: "#FFFFF",
              "&:hover": { backgroundColor: "#F7701D" },
            }}
            onClick={() => alert("comming soon!!")}
          >
            Save to Drive
          </Button>
        </div>
      </div>

      <div className="printresume" id="printresume">
        <Template1 isFrom={isFrom} />
      </div>
    </div>
  );
}
