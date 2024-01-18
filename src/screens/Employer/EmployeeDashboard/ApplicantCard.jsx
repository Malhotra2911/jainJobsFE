import React, { useState } from "react";
import "../../../css/Employer/ApplicantCard.css";
import ActionButton from "../../../components/Employer/ActionButton/ActionButton";
import ChatIcon from '@mui/icons-material/Chat';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import ApplicantcardMore from "./ApplicantcardMore";
import { ImageBackend } from "../../../config/Config";

const ApplicantCard = ({ userdata }) => {
  const [applicantmore, setApplicantmore] = useState(false);
  console.log(ImageBackend+ userdata.PROFILEPIC)

  return (
    <>
      <div className="All_Shortlistedpopup_content">
        <div className="all_shortpopup">
          <div className="allshort_content_container">
            <div className="profile_card_img">
              <div className="image_name">
                <img
                  src={userdata && ImageBackend+ userdata.PROFILEPIC}                  
                  alt=""
                  style={{"width":"50px","height":"50px"}}
                />
                <div className="btn_section1">

                  {/* <Tooltip title="Chat">
                    <Link to="/choosetemplate" >
                      <ChatIcon sx={{ color: "warning" }} />
                    </Link>

                  </Tooltip> */}
                  <ActionButton userdata={userdata} />
                </div>
                <button className="get_btn">
                  GET{" "}
                  <img
                    src="employer/ticksign.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="address_desc">
              <div className="desc">
                <div className="details1">
                  <h5>Current Employees:</h5>
                </div>
                <div className="details2">
                  <p>{userdata.NAME_OF_COMPANY}</p>
                </div>
              </div>
              <hr className="break_line_profile" />
              <div className="desc">
                <div className="details1">
                  <h5>Location:</h5>
                </div>
                <div className="details2">
                  <p>{userdata.CURRENT_ADDRESS}</p>
                </div>
              </div>
              <hr className="break_line_profile" />
              {/* <div className="desc">
                <div className="details1">
                  <h5>Skill Set:</h5>
                </div>
                <div className="details2">
                  <p>
                    Adobe XD,Figma,Illustrator,
                    <br />
                    Photoshop,Adobe,After Effects,
                  </p>
                </div>
              </div> */}

              {/* <hr className="break_line_profile" /> */}
              {/* <div className="desc">
                <div className="details1">
                  <h5>Certification:</h5>
                </div>
                <div className="details2">
                  <p>Adobe XD Certified</p>
                </div>
              </div> */}

              {/* <hr className="break_line_profile" /> */}
              <div className="desc">
                <div className="details1">
                  <h5>Salary:</h5>
                </div>
                <div className="details2">
                  <p> {userdata.PREV_COMPANY_SALARY} LPA </p>
                </div>
              </div>
              <hr className="break_line_profile" />
              <div className="desc">
                <div className="details1">
                  <h5>Relocations:</h5>
                </div>
                <div className="details2">
                  <p>{userdata.RELOCATE == 1 ? "yes" : 'no'}</p>
                </div>
              </div>
              <button onClick={() => setApplicantmore(true)} className="view_more">View More</button>

              {applicantmore && <ApplicantcardMore userdata={userdata} applicantmorepopup={setApplicantmore} />}

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ApplicantCard;
