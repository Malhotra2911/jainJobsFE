import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { CircularLoding } from "../../../redux/action/AuthAction";
import { useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { Alert } from "@mui/material";
import { toast } from "react-toastify";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#F7701D",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#F7701D",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#F7701D",
    },
    "&:hover fieldset": {
      borderColor: " #F7701D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F7701D",
    },
  },
});

export default function AssignAssignment({ AssignAss, userdata }) {
  const [isDate, setisDate] = useState(null)
  const [isLink, setisLink] = useState(null);
  const [isRemark, setisRemark] = useState(null)

  const handleClose = () => {
    AssignAss(false);
  };


  const dispatch = useDispatch();

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  }

  const handlesubmit = () => {
    axiosInstance.post('employer/AssiginAssignment', {
      USER_ID: userdata.USER_ID,
      JOB_ID: userdata.JOB_ID,
      ASSIGNASSGNMENT: JSON.stringify({
        "time": isDate,
        "link": isLink,
        "remark": isRemark
      })

    }).then((res) => {
      toast.info("You Have Assign Assignment Succesfully!!");
      handleClose();
    })
  }

  return (
    <div>
      <Dialog open={AssignAss} onClose={handleClose}>
        <DialogTitle>Assign Assessment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            if you have Assessment link Put here or you can choose FNM
            Assessment.
          </DialogContentText>
          <CssTextField
            placeholder="please enter any remamark message for user"
            autoFocus
            margin="dense"
            size="small"
            id="name"
            label="Assessment Remark or Message"
            focused
            type="datetime-local"
            fullWidth
            variant="standard"
            onChange={e => setisDate(e.target.value)}
          />

          <CssTextField
            autoFocus
            margin="dense"
            id="name"
            size="small"
            focused
            label="Assessment Link"
            type="text"
            fullWidth
            variant="standard"
            onChange={e => setisLink(e.target.value)}

          />

          <CssTextField
            placeholder="please enter any remamark message for user"
            autoFocus
            margin="dense"
            size="small"
            focused
            id="name"
            label="Assessment Remark or Message"
            type="text"
            fullWidth
            variant="standard"
            onChange={e => setisRemark(e.target.value)}

          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              width: "auto%",
              textTransform: "none",
              color: "#000000",
              backgroundColor: "rgba(247, 112, 29, 0.39)",
              "&:hover": {
                backgroundColor: "rgba(247, 112, 29, 0.39)",
              },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              width: "auto%",
              textTransform: "none",
              color: "#000000",
              backgroundColor: "rgba(247, 112, 29, 0.39)",
              "&:hover": {
                backgroundColor: "rgba(247, 112, 29, 0.39)",
              },
            }}
          // onClick={handleClose}
          >
            FMN Assessment
          </Button>
          <Button
            sx={{
              width: "auto%",
              textTransform: "none",
              color: "#000000",
              backgroundColor: "rgba(247, 112, 29, 0.39)",
              "&:hover": {
                backgroundColor: "rgba(247, 112, 29, 0.39)",
              },
            }}
            onClick={handlesubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
