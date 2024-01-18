import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import "../../../css/jobseeker/SpecialServiceCard.css"
import { useNavigate } from 'react-router-dom';


export default function SpecialServiceCard({Popup}) {
  const navigate = useNavigate();
  const handleClose = () => Popup(false);

  const handleOnClick = () => {
    navigate("/specialservice",{replace:"true"});

  }
  const handleOnClick2 = () => {
    navigate("/specialservice2",{replace:"true"});

  }
  const handleOnClick3 = () => {
    navigate("/specialservice3",{replace:"true"});

  }
  const handleOnClick4 = () => {
    navigate("/specialservice4",{replace:"true"});

  }
  const handleOnClick5 = () => {
    navigate("/specialservice5",{replace:"true"});

  }

  return (
    <div style={{outline:"none"}} className="sscard">
      <Modal
        open={Popup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root":{
            background:"transparent"
          },
          backgroundColor: 'transparent',
        background:"transparent",
        // border:"3px solid green",
        boxShadow: 'none'}}
      >
        <Box  className="ssmain">
          <h3 className="card_head" onClick={handleOnClick}>CV building with expert</h3>
          <Divider sx={{width:"100%",border: "1px solid #F7701D"}} />
          <h3 className="card_head" onClick={handleOnClick2}>Personality Developement</h3>
          <Divider sx={{width:"100%",border: "1px solid #F7701D"}} />
          <h3 className="card_head" onClick={handleOnClick3}>Entrepreneurship</h3>
          <Divider sx={{width:"100%",border: "1px solid #F7701D"}} />
          <h3 className="card_head" onClick={handleOnClick4}>Marketing &amp; Ads</h3>
          <Divider sx={{width:"100%",border: "1px solid #F7701D"}} />
          <h3 className="card_head" onClick={handleOnClick5}>Motivation</h3>
        </Box>
      </Modal>
    </div>
  );
}
