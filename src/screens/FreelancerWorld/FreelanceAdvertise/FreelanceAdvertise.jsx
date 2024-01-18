import React from 'react'
import "../../../css/Freelancer/FreelanceHome.css";
import { Link } from "react-router-dom";
// import StarRating from "./StarRating/StarRating";
import Button from "@mui/material/Button";
import { Audioanswer } from '../../../components/JobSeeker/ApplayQuestions/AudioAnswer/Audioanswer';

export default function FreelanceAdvertise() {
  return (
    <div>
                <div className="EmployeeHome_main">
      <div className="employeehomepage">
        <div className="employee_header">
          <div className="employee_header_left">
            <h2 className='headeremployee'>Advertise with us</h2>
            {/* <div className="employee_home_header_buttons">
              <Link to="/Hire" className="hire">
                I Want to hire
              </Link>
              <Link to="/Work" className="hire">
                I Want to Work
              </Link>
            </div> */}
          </div>
          <div className="employee_header_right">
                            <img src="freeLancepic.png" alt=''   className="employeehome_header_img"
 />{' '}

          </div>
        </div>
        <div className="employer_home_landing">
          <div className="employee_home_form" style={{marginTop:"2rem"}}>
            <form>
              <input type="text" placeholder="Akash Singh" />
              <input type="text" placeholder="Tech Jain It Solution" />

             <input type="text" placeholder="www.xyz.com" />
              <input type="text" placeholder="Jabalpur
" />
              <input type="text" placeholder="UI UX Designer
" />
              <input type="text" placeholder="aks.singh461@gmail.com"/>
<div className="audioplusmail">
<Audioanswer className="audio_ad" />

<input type="text" placeholder="behance.net/akashsingh39
" />

</div>



<div className="freelance_payment_btns">
<Button
                      variant="contained"
                      className="profile_btn"
                      sx={{
                        width: "30%",
                        mt: 4,
                        mb: 4,
                        textTransform: "none",
                        color: "#FFFFFF",
                        backgroundColor: "#3898E2",
                        "&:hover": {
                          backgroundColor: "#3898E2",
                        },
                      }}
                    >
1 month for 350 INR+ 
taxes                     </Button>
                    <Button
                      variant="contained"
                      className="profile_btn"
                      sx={{
                        width: "30%",
                        mt: 4,
                        mb: 4,
                        textTransform: "none",
                        color: "#FFFFFF",
                        backgroundColor: "#BC84CB",
                        "&:hover": {
                          backgroundColor: "#BC84CB",
                        }
                      }}
                    >
3 months for 960 INR+ taxes                    </Button>
                    <Button
                      variant="contained"
                      className="profile_btn"
                      sx={{
                        width: "30%",
                        mt: 4,
                        mb: 4,
                        textTransform: "none",
                        color: "#FFFFFF",
                        backgroundColor: "#56D9B1",
                        "&:hover": {
                          backgroundColor: "#56D9B1",
                        },
                      }}
                    >
                        9 month for 1710 INR+ taxes 

                    </Button>


</div>
<div className="freelance_btn">

<Button
                      variant="contained"
                      className="profile_btn"
                      sx={{
                        width: "25%",
                        alignItems:"center",
                        mt: 2,
                        mb: 2,
                        textTransform: "none",
                        color: "#000000",
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                        "&:hover": {
                          backgroundColor: "rgba(247, 112, 29, 0.39)",
                        },
                      }}
                    >
Make Payment                    </Button>
                    </div>

            </form>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}
