import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DashBoardTour from './DashBoardTour';

export default function DashboardEntry({Tour1}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    Tour1(false);
  };

  return (
    <div style ={{display: open ? "none":"block"}}>
      <Dialog
      sx={{display: open ? "none":"block"}}
        open={Tour1}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {/* {"Use Google's location service?"} */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you like to take a dashboard tour ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
          sx={{
            width: "auto",
            textTransform: "none",
            color: "#000000",
            backgroundColor: "rgba(247, 112, 29, 0.39)",
            "&:hover": { backgroundColor: "rgba(247, 112, 29, 0.39)" },
          }}
           onClick={handleClose}>Disagree</Button>
          <Button 
          sx={{
            width: "auto",
            textTransform: "none",
            color: "#000000",
            backgroundColor: "rgba(247, 112, 29, 0.39)",
            "&:hover": { backgroundColor: "rgba(247, 112, 29, 0.39)" },
          }}
           onClick={()=>setOpen(true)} autoFocus>
            Agree
          </Button>
          {open && <DashBoardTour Open={setOpen}/>}
        </DialogActions>
      </Dialog>
    </div>
  );
}




