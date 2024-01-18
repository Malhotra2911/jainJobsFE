import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function PostCreatedModal({ Greatpopup, postId }) {
  const { user, scope } = useSelector((state) => state.AuthReducer);
  const handleClose = () => Greatpopup(false);
  console.log(postId);
  return (
    <div>
      <Dialog
        open={Greatpopup}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{ display: "flex", flexDirection: "row" }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "#000000" }}
          >
            Great ! Job Created Successfully
            <br />
            Do You Want To Add Screen Quesition Now ?
          </DialogContentText>
          <div className="greatimg" style={{ width: "50%" }}>
            <img style={{ width: "90%", height: "100%" }} src="employer/jobs.png" alt="" />

          </div>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Link
            to={`/screeningquestion?postId=${postId}`}
            action="replace"
            style={{
              textDecoration: "none",
              // width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20px",
              // border:'3px solid green'
            }}
            className="consultancy_btn_link"
          >
            <Button
              sentenceCase
              variant="contained"
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#F7701D",
                // ml:"4",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#F7701D",
                },
              }}
              autoFocus
            >
              Yes
            </Button>
          </Link>

          <Link
            to='/AllJobs'
            action="replace"
            style={{
              textDecoration: "none",
              // width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20px",
              // border:'3px solid green'
            }}
            className="consultancy_btn_link"
          >
            <Button
              sentenceCase
              variant="contained"
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#F7701D",
                // ml:"4",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#F7701D",
                },
              }}
              autoFocus
            >
              No
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
