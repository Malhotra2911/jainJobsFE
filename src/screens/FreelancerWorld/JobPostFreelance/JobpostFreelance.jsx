import React from 'react'
import "../../../css/Freelancer/JobpostFreelance.css"
import Button from "@mui/material/Button";

export default function JobpostFreelance() {
  return (
    <div>
        <div className="freelancejob_post_main_con">
            <div className="freelance_jobpost">
            <textarea  className='freelancetextarea' id="jobpost" name="jobpost" >
</textarea>
<span className='freelance_budget'>Budget- 25000 INR  </span>
<span className='freelance_budget'>Negotiable </span>
<Button
                      variant="contained"
                      className="profile_btn"
                      sx={{
                        width: "20%",
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
                      Post
                    </Button>

            </div>
        </div>
    </div>
  )
}
