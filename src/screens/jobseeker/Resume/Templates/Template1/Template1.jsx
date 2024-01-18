import React from "react";
import "./Template1.css";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import { Chip } from "@mui/material";
import { useSelector } from "react-redux";

export default function Template1({ isFrom }) {
  const [isprofilepic, setisprofilepic] = React.useState("");
  const { user } = useSelector((state) => state.AuthReducer);

  React.useEffect(() => {
    if (user && user.length !== 0) {
      setisprofilepic(user[0].PROFILEPIC);
    }
  }, [user]);

  return (
    <div className="printresume">
      <div className="resume-main">
        <div className="left-box">
          <br></br>
          <div className="profile-Cv">
            <img className="cv-pic" src={isprofilepic} alt="img" />
          </div>
          <div className="content-box">
            <h2>Profile Info</h2>
            <hr className="hr1" />
            <p className="p1">
              <span style={{ display: "flex" }}>
                <PersonIcon fontSize="small" style={{ marginRight: "5px" }} />{" "}
                {` ${isFrom.F_NAME} ${isFrom.M_NAME} ${isFrom.L_NAME} `}
              </span>
              <br />
              <span style={{ display: "flex" }}>
                <PhoneIcon fontSize="small" style={{ marginRight: "5px" }} />{" "}
                {isFrom.PHONE}
              </span>
              <br />
              <span style={{ display: "flex" }}>
                <EmailIcon fontSize="small" style={{ marginRight: "5px" }} />{" "}
                {isFrom.EMAIL}
              </span>
              <br />
              <span style={{ display: "flex" }}>
                <CalendarTodayIcon
                  fontSize="small"
                  style={{ marginRight: "5px" }}
                />
                {isFrom.DOB}
              </span>
              <br />
              <span style={{ display: "flex" }}>
                <HomeIcon fontSize="small" style={{ marginRight: "5px" }} />
                {isFrom.ADDRESS}
              </span>
            </p>

            <h3>Language:</h3>

            {isFrom.language &&
              isFrom.language.length > 0 &&
              isFrom.language.map((data) => (
                <>
                  <Chip label={data} color="info" variant="outlined" />
                </>
              ))}

            <br></br>
            <br></br>
            <h2>My Skills</h2>
            <hr className="hr1" />
            <br />
            <div className="col-div-6">
              {isFrom.skill &&
                isFrom.skill.length > 0 &&
                isFrom.skill.map((data) => (
                  <div>
                    <div className="col-div-6">
                      <i className="fa fa-circle circle"></i>
                      <i className="fa fa-circle circle"></i>
                      <i className="fa fa-circle circle"></i>
                      <i className="fa fa-circle circle"></i>
                      <i className="fa fa-circle circle1"></i>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-div-6">
                      <p className="p2">{data}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col-div-6">
              <i className="fa fa-circle circle"></i>
              <i className="fa fa-circle circle"></i>
              <i className="fa fa-circle circle1"></i>
              <i className="fa fa-circle circle1"></i>
              <i className="fa fa-circle circle1"></i>
            </div>

            <div className="clearfix"></div>
            <br />
            {/* <h2>interests</h2>
            <hr className="hr1" />
            <br />
            <div className="col-div-3 col3">
              <i className="fa fa-futbol-o in"></i>
              <span className="inp">Sports</span>
            </div>
            <div className="col-div-3 col3">
              <i className="fa fa-futbol-o in"></i>
              <span className="inp">Drive</span>
            </div>
            <div className="col-div-3 col3">
              <i className="fa fa-futbol-o in"></i>
              <span className="inp">Sports</span>
            </div>
            <div className="col-div-3 col3">
              <i className="fa fa-futbol-o in"></i>
              <span className="inp">Sports</span>
            </div> */}
          </div>
        </div>

        <div className="right-box">
          <br />
          <h2 className="heading">Career Objective</h2>
          <hr className="hr2" />
          <br />

          <div className="col-div-8">
            <span className="span11">{isFrom.COBJECTIVE}</span>
          </div>

          <br />
          <h2 className="heading">My Education</h2>
          <hr className="hr2" />
          <br />
          <div className="col-div-4">
            <p className="p5">{isFrom.ed_yearofpassing1}</p>
            <span className="span1">{isFrom.ed_country1}</span>
          </div>
          <div className="col-div-8">
            <p className="p5">{isFrom.ed_yeartypepfed1}</p>
            <span className="span1">{isFrom.ed_clg1}</span>
          </div>

          <div className="clearfix"></div>
          <br />
          <div className="col-div-4">
            <p className="p5">{isFrom.ed_yearofpassing2}</p>
            <span className="span1">{isFrom.ed_country2}</span>
          </div>
          <div className="col-div-8">
            <p className="p5">{isFrom.ed_yeartypepfed2}</p>
            <span className="span1">{isFrom.ed_clg2}</span>
          </div>
          <div className="clearfix"></div>
          <br />
          {/* <div className="clearfix"></div> */}

          <br />
          <h2 className="heading">Work Experience</h2>
          <hr className="hr2" />
          <br />
          <div className="col-div-4">
            <p className="p5">{isFrom.emp_typeofjob1}</p>
            <span className="span1">{isFrom.emp_dept1}</span>
          </div>
          <div className="col-div-8">
            <p className="p5">{isFrom.emp_company1}</p>
            <span className="span1">{isFrom.emp_jobposi1}</span>
          </div>
          <div className="clearfix"></div>
          <br />

          <div className="col-div-4">
            <p className="p5">{isFrom.emp_typeofjob2}</p>
            <span className="span1">{isFrom.emp_dept2}</span>
          </div>
          <div className="col-div-8">
            <p className="p5">{isFrom.emp_company2}</p>
            <span className="span1">{isFrom.emp_jobposi2}</span>
          </div>

          <div className="clearfix"></div>
          <br />
          <h2 classNameName="heading">Personal Projects</h2>
          <hr className="hr2" />
          <br />

          <div className="col-div-8">
            <div>
              <h2>{isFrom.proect_name1}</h2>
              <h4>{isFrom.project_respo1}</h4>
              <p style={{ width: "100%" }}>{isFrom.project_desi1}</p>
            </div>
            <div>
              <h2>{isFrom.proect_name2}</h2>
              <h4>{isFrom.project_respo2}</h4>
              <p style={{ width: "100%" }}>{isFrom.project_desi2}</p>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
