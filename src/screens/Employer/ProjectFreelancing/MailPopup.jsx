import * as React from 'react';
import Modal from '@mui/material/Modal';
import { CssTextField } from '../../../css/Employer/MaterialUicss/OwnCompany';
import "../../../css/jobseeker/FreelancingApplay.css"
import { Button } from '@mui/material';


export default function MailPopup({ popup }) {
    const handleClose = () => popup(false);

    return (
        <div style={{ outline: "none", border: "none" }}>
            <Modal
                open={popup}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                // sx={{border:"5px solid red",background:"transparent"}}
            >
                <div className="freelancing_applay_contents">
                    <h3>Conformation Mail to Bidder</h3>

                    
                    <CssTextField
                        sx={{ color: " #F7701D", width: "70%" }}
                        required
                        id="outlined-required"
                        color="warning"
                        multiline
                        rows={4}
                        label="Details About Your Previous work"

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
                  >
                    Submit
                  </Button>
                    
                </div>
            </Modal>
        </div>
    );
}
