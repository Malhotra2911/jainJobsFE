import React from "react";
import Modal from "@mui/material/Modal";

import "../../../css/Employer/ApplicantMore.css";

export default function ApplicantcardMore({ userdata, applicantmorepopup }) {
  const handleClose = () => applicantmorepopup(false);

  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ border: "none", boxShadow: "none" }}
      >
        <div className="applicantmore_main_container">
          <div className="applicant_more_container">
            <div className="create_own_close_btn">
              <button onClick={() => applicantmorepopup(false)}>X</button>
            </div>

            <div className="applicantcard_content">
              <div className="address_desc">
                <div className="desc">
                  <div className="details1">
                    <h5>DOB:</h5>
                  </div>
                  <div className="details2">
                    <p>{userdata.DOB}</p>
                  </div>
                </div>
                <hr className="break_line_profile" />
                <div className="desc">
                  <div className="details1">
                    <h5>Experience:</h5>
                  </div>
                  <div className="details2">
                    <p>{userdata.EXPERIANCE} Year</p>
                  </div>
                </div>
                <hr className="break_line_profile" />
                <div className="desc">
                  <div className="details1">
                    <h5>Last Drawn Salary:</h5>
                  </div>
                  <div className="details2">
                    <p>{userdata.PREV_COMPANY_SALARY} </p>
                  </div>
                </div>
                <hr className="break_line_profile" />
                <div className="desc">
                  <div className="details1">
                    <h5>Expected Salary:</h5>
                  </div>
                  <div className="details2">
                    <p>{userdata.EXPECTED_SALARY}</p>
                   
                  </div>
                </div>
                <hr className="break_line_profile" />
                <div className="desc">
                  <div className="details1">
                    <h5>Ready To Relocate:</h5>
                  </div>
                  <div className="details2">
                  <p>{userdata.RELOCATE === 0 ? 'no' : 'Yes' }</p>
                  </div>
                </div>
                <hr className="break_line_profile" />
                <div className="desc">
                  <div className="details1">
                    <h5>Notice Period:</h5>
                  </div>
                  <div className="details2">
                    <p>{userdata.NOTICE_PERIOD} Days</p>
                  </div>
                </div>
                <hr className="break_line_profile" />

                <div className="desc">
                  <div className="details1">
                    <h5>Degree:</h5>
                  </div>
                  <div className="details2">
                    <p>{userdata.ACADEMIC_PERFORMANCE && JSON.parse(userdata.ACADEMIC_PERFORMANCE).TYPE_OF_EDUCATION} </p>
                  </div>
                </div>
                <hr className="break_line_profile" />

                <div className="desc">
                  <div className="details1">
                    <h5> Location:</h5>
                  </div>
                  <div className="details2">
                    <p>Bhopal</p>
                  </div>
                </div>
                <hr className="break_line_profile" />

                <div className="desc">
                  <div className="details1">
                    <h5>Language Preference:</h5>
                  </div>
                  <div className="details2">
                    <p>Engish,Hindi</p>
                  </div>
                </div>
                <hr className="break_line_profile" />

                <div className="desc">
                  <div className="details1">
                    <h5>Are You Rotational Shift:</h5>
                  </div>
                  <div className="details2">
                    <p>{userdata.SHIFT_TYPE == 0 ? 'no' : 'yes' }</p>
                  </div>
                </div>
                <hr className="break_line_profile" />

                <div className="desc">
                  <div className="details1">
                    <h5>Prefer Shift:</h5>
                  </div>
                  <div className="details2">
                    <p>{userdata.PREFER_SHIFT === 0 ? 'day' : 'night' }</p>
                  </div>
                </div>
                <hr className="break_line_profile" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
