import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import '../../css/jobseeker/ResponsiveDialog.css'


function ResponsiveDialog({ open, setOpen, handleClickOpen, textfile }) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <div className="dialog_desc">


                    <DialogTitle id="responsive-dialog-title">
                        {textfile}
                    </DialogTitle>
                    <DialogActions sx={{width:"100%"}}>

                        <Button autoFocus
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                color: "#000000",
                                // backgroundColor: "rgba(247, 112, 29, 0.39)",
                                backgroundColor:"#F7701D",
                                "&:hover": {
                                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                                },
                            }}
                            onClick={() => setOpen(false)}>
                            Disagree
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                color: "#000000",
                                // backgroundColor: "rgba(247, 112, 29, 0.39)",
                                backgroundColor:"#F7701D",
                                "&:hover": {
                                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                                },
                            }}
                            onClick={handleClickOpen} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}

export default ResponsiveDialog