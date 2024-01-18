import React, { useState } from 'react'
// import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
// import "../../../../css/jobseeker/Questions2.css"
import { Questions3 } from '../Questions3/Questions3';
import { CssTextField } from '../../../../css/Employer/MaterialUicss/OwnCompany';

export const Questions2 = ({questions2}) => {
  const [popupThird, setPopupThird] = useState(false)
  return (
    <div>
      <div className="main_container">
        <div className="container1">
          <div className="box2">
            <form action="" style={{width:"100%",display:'flex',alignItems:"center",justifyContent:"center"}}>
              <CssTextField
                        sx={{ color: " #F7701D", width: "100%" }}
                        id="outlined-multiline-static"
                        label="Job Description"
                        multiline
                        color="warning"
                        rows={3}
                      defaultValue="Default Value"
                      />
            </form>
            


          </div>
          {/* <div className="box3">
            <Button variant="contained" style={{ backgroundColor: "rgba(247, 112, 29, 0.39)", color: "#000000", textTransform: "none", width: "170px", fontSize: "20px", fontStyle: "none", borderRadius: "15px" }} onClick={() => {
              setPopupThird(true)
            }}  >Next</Button>
            <Button variant="contained" style={{ backgroundColor: "rgba(247, 112, 29, 0.39)", color: "#000000", textTransform: "none", width: "170px", fontSize: "20px", fontStyle: "none", borderRadius: "15px" }} onClick={() => {
              setPopupThird(true)
            }} >Skip</Button>

            {popupThird && <Questions3 questions3={setPopupThird} />}

          </div> */}
          <div className="box4">

          </div>
        </div>
      </div>
    </div>
  )
}
