import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  display:'flex',
  flexDirection:"column",
  gap:'2rem',
  borderRadius:"2rem",
  alignItems:"center",
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function OwnPlanSucess({Popup}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => Popup(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={Popup}
        sx={{background:"transparent"}}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <VerifiedOutlinedIcon sx={{transform:"scale(2)",color:"green"}} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your will get the confirmation mail very soon.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
