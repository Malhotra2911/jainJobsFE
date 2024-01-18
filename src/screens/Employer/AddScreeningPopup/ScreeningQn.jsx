import React from "react";
import "../../../css/Employer/ScreeningQn.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
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

export default function ScreeningQn({ addSQpopup, setUserSelectedque, isUserSelectedque }) {
  const handleClose = () => addSQpopup(false);
  const [isquesition, setisquesition] = React.useState(null)

  const onsubmitque = () => {
    setUserSelectedque(oldArray => [...oldArray, { QUESITION_TITLE: isquesition, QUESITION_ID: '*' }])
    handleClose();
    // setArray(oldArray => [...oldArray,newValue] );
  }
  return (
    <div>
      <Modal
        open={addSQpopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="addscreeninqnmain_container">
          <div className="addscreeningqn_containerr">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  addSQpopup(false);
                }}
              >
                X
              </button>
            </div>


            <div className="screeningquestion_container">
              <div className="screeningqn_container">
                <h2>Add Screening Question</h2>
              </div>
              <form className="sq_main">
                <div className="sq_input">
                  <CssTextField
                    sx={{ color: " #F7701D", width: "100%" }}
                    required
                    id="outlined-required"
                    color="warning"
                    label="Screening Question"
                    onChange={e => setisquesition(e.target.value)}
                  />
                </div>
                <div className="screeningqn_btn">
                  <Button className="btn_sq"
                    sx={{
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      width: "35%",
                      color: "#000000",
                      textTransform: "none",
                      fontStyle: "none",
                    }}
                    type="button"
                    onClick={onsubmitque}
                  >
                    Submit
                  </Button>
                </div>


              </form>
            </div>
          </div>
        </div>

      </Modal>
    </div>
  );
}
