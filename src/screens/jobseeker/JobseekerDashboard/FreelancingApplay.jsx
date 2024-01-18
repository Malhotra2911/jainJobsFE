import * as React from "react";
import Modal from "@mui/material/Modal";
import { CssTextField } from "../../../css/Employer/MaterialUicss/OwnCompany";
import "../../../css/jobseeker/FreelancingApplay.css";
import { Button } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { applyforfreelance } from "../../../redux/action/JobSeekerAction";
import { useDispatch } from "react-redux";

export default function FreelancingApplay({ Applied, jobdata }) {
  const handleClose = () => Applied(false);
  const [isbet, setisbet] = React.useState(null);
  const [isLinkedprofile, setisLinkedprofile] = useState(null);
  const [isgithubprofile, setisgithubprofile] = useState(null);
  const [isbrifdetails, setisbrifdetails] = useState(null);
  const dispatch = useDispatch();

  const onhandleapply = () => {
    if (!isbet) {
      toast.error("please enter bid ammount ");
      return false;
    }
    if (isbet < jobdata.MIN_BATAMT) {
      toast.error(
        "Bid Ammount Should Be Greater Then " + jobdata.MIN_BATAMT + "Rs."
      );
      return false;
    }
    if (!isLinkedprofile) {
      toast.error("please enter your linkedin profile");
      return false;
    }

    if (!isbrifdetails) {
      toast.error("please explain about your self");
      return false;
    }
    if (isbrifdetails.length > 100) {
      toast.error("please explain about your self greater then 100 words");
      return false;
    }
    const jsondata = {
      FREELANCE_JOB_ID: jobdata.FREELANCE_JOB_ID,
      FREELANCE_BETAMT: isbet,
      GITHUB: isgithubprofile,
      LINKEDIN: isLinkedprofile,
      PR_ESCRIPTION: isbrifdetails,
    };

    dispatch(applyforfreelance(jsondata));
  };

  return (
    <div style={{ outline: "none", border: "none" }}>
      <Modal
        open={Applied}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="freelancing_applay_content">
          <h3>Applay For Freelancing</h3>
          <CssTextField
            sx={{ color: " #F7701D", width: "70%" }}
            required
            id="outlined-required"
            color="warning"
            size="small"
            label="Bid Price"
            onChange={(e) => setisbet(e.target.value)}
            type="number"
          />
          <CssTextField
            sx={{ color: " #F7701D", width: "70%" }}
            required
            id="outlined-required"
            color="warning"
            size="small"
            label="Linkedin Profile"
            onChange={(e) => setisLinkedprofile(e.target.value)}
          />
          <CssTextField
            sx={{ color: " #F7701D", width: "70%" }}
            required
            id="outlined-required"
            color="warning"
            size="small"
            label="Github Profile"
            onChange={(e) => setisgithubprofile(e.target.value)}
          />
          <CssTextField
            sx={{ color: " #F7701D", width: "70%" }}
            required
            id="outlined-required"
            color="warning"
            multiline
            rows={4}
            label="Details About Your Previous work"
            onChange={(e) => setisbrifdetails(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              width: "70%",
              height: "7vh",
              mt: 2,
              //   mb: 2,
              textTransform: "none",
              color: "#000000",
              backgroundColor: "rgba(247, 112, 29, 0.39)",
              "&:hover": {
                backgroundColor: "rgba(247, 112, 29, 0.39)",
              },
            }}
            onClick={onhandleapply}
          >
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
}
