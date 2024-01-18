import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";

export default function Notify({ NotifyPopup }) {
  const isMobile = window.innerWidth <530;
  const handleClose = () => {
    NotifyPopup(false);
  };

  
  return (
    <div>
      <Dialog
        sx={{ background: "#ffffff" }}
        open={NotifyPopup}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{display:"flex",flexDirection:isMobile? "column-reverse" :"row",gap:"1.5rem"}}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "#000000" }}
          >
            We will notify you as soon as the post is active. For any concern
            you may write us on
            <a href="http://support@findmynext.org">
              {" "}
              http://support@findmynext.org
            </a>{" "}
            or get us in touch on whatapp.{" "}
          </DialogContentText>
          <div className="notifyimg" style= {{width:"100%",display:"flex",alignItems:'center',justifyContent:"center"}}>
          <img  style={{width:"100%",height:"100%"}} src="employer/notificationsP.png" alt="" />

          </div>

        </DialogContent>
        <DialogActions sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Link
            to="/jobPosted"
            style={{
              textDecoration: "none",
              // width: "100%",
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
                mb:2,
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#F7701D",
                },
              }}
              autoFocus
            >
              Submit
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
