import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "../../../css/Employer/Virtualinvitation.css"
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { CircularLoding } from "../../../redux/action/AuthAction";
import axiosInstance from "../../../utils/axiosInstance";
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

export default function TelephonicInterview({ Telepho, userdata }) {

    const [istiming, setistiming] = React.useState(null);

    const handleClose = () => {
        Telepho(false);
    };


    const dispatch = useDispatch();
    const Loading = (lyd) => {
        dispatch(CircularLoding(lyd));
    }

    const handlesubmit = () => {
        if (istiming) {
            Loading(true)
            axiosInstance.post('employer/AssiginAssignment', {
                USER_ID: userdata.USER_ID,
                JOB_ID: userdata.JOB_ID,
                TELEPHONICINTERVIEW: JSON.stringify({
                    "time": istiming,
                })
            }).then((res) => {
                toast.info("You Have Assign Assignment Succesfully!!");
                Loading(false)
                handleClose();
            })
        }
        else {
            toast.error("please ins`ert value")
        }



    }




    return (
        <div >
            <Dialog open={Telepho} onClose={handleClose}>
                <h2 className="virtual_heading">Telephonic Round Time</h2>
                <DialogContent>
                    <CssTextField
                        id="datetime-local"
                        focused
                        label="Choose Telephonic Time"
                        color="warning"
                        size="small"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        sx={{ mt: 2, width: 350 }}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setistiming(e.target.value)}
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
                        onClick={handlesubmit}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
