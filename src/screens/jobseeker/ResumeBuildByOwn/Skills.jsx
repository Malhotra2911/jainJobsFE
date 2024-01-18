import * as React from "react";
import { Add } from "@mui/icons-material";
// import "./Skills.css"
import "../../../css/jobseeker/Skills.css";
import {
  Modal,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import { CssTextField, CustomSelect } from "../../../css/Employer/MaterialUicss/OwnCompany";
import { useSelector } from "react-redux";

export default function Skills({ isFrom, onChangeText, skill }) {
  const handleClose = () => skill(false);
  const { scope } = useSelector((state) => state.AuthReducer);

  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="skill_cont">
          {/* <div className="create_own_close_btn">
            <button onClick={() => skill(false)}>X</button>
          </div> */}

          <div className="skills_container">
            <div className="skillsss" >
              <h2>Skills</h2>
              <div className="skills_input">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Skill's</InputLabel>
                  <CustomSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="skill"
                    value={isFrom.skill}
                    onChange={onChangeText}
                    label="skills"
                    multiple
                  >
                    {scope &&
                      scope.length !== 0 &&
                      scope.map((data, index) => (
                        <MenuItem value={data.FIELD_NAME}>
                          {data.FIELD_NAME}
                        </MenuItem>
                      ))}
                  </CustomSelect>
                </FormControl>
                <br />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <CustomSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="language"
                    value={isFrom.language}
                    onChange={onChangeText}
                    label="Language"
                    multiple
                  >
                    <MenuItem value="hindi">Hindi</MenuItem>
                    <MenuItem value="english">english</MenuItem>
                    <MenuItem value="franch">franch</MenuItem>
                    <MenuItem value="Spanish">Spanish</MenuItem>
                    <MenuItem value="French">French</MenuItem>
                    <MenuItem value="Russian">Russian</MenuItem>
                    <MenuItem value="Portuguese">Portuguese</MenuItem>
                    <MenuItem value=" Indonesian"> Indonesian</MenuItem>
                  </CustomSelect>
                </FormControl>
              </div>

              <div className="button_e">
                <Button
                  sx={{
                    width: "25%",
                    textTransform: "none",
                    color: "#000000",
                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                    "&:hover": {
                      backgroundColor: "#F7701D",
                    },
                  }}
                  onClick={handleClose}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
