import React from 'react'
import Modal from '@mui/material/Modal';
import { CircularProgress } from '@mui/material';
import './CircularLoading';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

const CircularLoading = () => {
    const Loading = useSelector(
        (state) => state.AuthReducer.loading
    );


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        padding: "10px",
        transform: 'translate(-50%, -50%)',
        width: 100,
        border: '2px solid #000',
        boxShadow: 24,
        p: 1,
        bgcolor: 'background.paper',
    };

    return (
        <>
            {Loading &&
                <Modal
                    open={true}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{padding : '20px'}}
                >
                    <Box sx={style}>
                        <CircularProgress size="small" style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "color": 'black' }} />
                    </Box>
                </Modal>

            }
        </>
    )
}

export default CircularLoading