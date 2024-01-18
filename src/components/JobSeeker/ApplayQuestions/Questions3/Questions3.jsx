import React, { useState } from 'react'
// import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
// import "../../../../css/jobseeker/Question3.css"
import { Questions4 } from '../Questions4/Questions4';
import { CssTextField } from '../../../../css/Employer/MaterialUicss/OwnCompany';

export const Questions3 = ({questions3}) => {

  const [popupFour, setPopupFour] = useState(false)
  return (
    <div>
      <div className="main_contentq3">
        <div className="container1">
          {/* <h1>Hi Kaltsa</h1>
          <div className="box1">
            <div className="items">

            </div>
            <div className="items">

            </div>
            <div className="items">

            </div>
            <div className="items">

            </div>
            <div className="items">

            </div>
          </div> */}
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
          <div className="box4">

          </div>
        </div>
      </div>
    </div>

  )
}
