import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import "../../../css/Employer/ViewFreelancing.css"
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';

export function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

export default function ViewDetailFreelancing({ closeview, jobdetails }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => closeview(true);
    const handleClose = () => closeview(false);
    const skills = JSON.parse(jobdetails.REQTYPE);


    return (
        <div>
            <Modal
                open={closeview}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="view_freelancing">
                    <div className="view_freelance_content">
                        <div className="project_heading">
                            <h3>Project Details</h3>
                            <p>Biding Amount: <span style={{ color: "rgb(158, 157, 157)" }}>
                                ₹{jobdetails.MIN_BATAMT} INR
                            </span>
                            </p>
                        </div>
                        <Divider sx={{ border: "0.3px solid #e7e6e6", width: "100%" }} />
                        <div className="project_details">
                            <p>{jobdetails.TEXT_DESCRIPTION.charAt(0).toUpperCase() + jobdetails.TEXT_DESCRIPTION.slice(1)}</p>
                        </div>
                        <Divider sx={{ border: "0.3px solid #e7e6e6", width: "100%" }} />
                        <div className="project_skills">
                            {
                                skills.map((skill) => (
                                    <Chip label={skill} variant="outlined" />
                                ))

                            }
                        </div>
                        <Divider sx={{ border: "0.3px solid #e7e6e6", width: "100%" }} />
                        <div className="project_owner">

                            <p className='freelance_para' style={{ margin: "0px" }}>
                                Creater Name: &nbsp;
                                <span style={{ color: "rgb(158, 157, 157)" }}>
                                    {titleCase(jobdetails.CREATER_NAME)}
                                </span>
                            </p>
                            <p className='freelance_para'>
                                Company Name:&nbsp;
                                <span style={{ color: "rgb(158, 157, 157)" }}>
                                    {titleCase(jobdetails.COMPANY_NAME)}
                                </span>
                            </p>
                            <Link to={jobdetails.COMPANY_WEBSITE} target="_blank" style={{ listStyle: "none",color:"black", textDecoration: "none", margin: "0px" }}>
                                Company Website:&nbsp;
                                <span style={{ color: "rgb(158, 157, 157)" }}>
                                    {jobdetails.COMPANY_WEBSITE}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
