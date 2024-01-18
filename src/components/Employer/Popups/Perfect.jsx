import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Link } from "react-router-dom";

export default function Perfect({ perfectPopup }) {
  const handleClose = () => perfectPopup(false);

  return (
    <div>
      <Dialog
        sx={{ background: "#ffffff" }}
        open={perfectPopup}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <DialogContentText 
            id="alert-dialog-description"
            sx={{ color: "#000000" }}
          >
            Perfect ! Now let us gather the job post requirements”.{" "}
          </DialogContentText>
          <div className="perfectimg" style= {{width:"50%"}}>
          <img  style={{width:"100%",height:"100%"}} src="employer/plans.png" alt="" />

          </div>

        </DialogContent>
        <DialogActions sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Button
            sentenceCase
            variant="contained"
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#F7701D",
              textDecoration: "none",
              "&:hover": {
                backgroundColor: "#F7701D",
              },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Link
            to="/jobdescription"
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
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#F7701D",
                },
              }}
              autoFocus
            >
              Next
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
