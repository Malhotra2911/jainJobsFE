import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Great({ Greatpopup, isRedirectId }) {
  const { user, scope } = useSelector((state) => state.AuthReducer);
  const handleClose = () => Greatpopup(false);

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
            Great ! You have initilize job creation process please complete your
            details to make a proper reach 
          </DialogContentText>
          <div className="greatimg" style={{ width: "50%" }}>
            <img
              style={{ width: "90%", height: "100%" }}
              src="employer/jobs.png"
              alt=""
            />
          </div>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pb: "1rem",
          }}
        >
          <Link
            to={`/jobdescription?postId=${isRedirectId}`}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20px",
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
              Continue
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
