import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Close, Edit } from '@mui/icons-material';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';
import { toast } from 'react-toastify';
import axiosInstance from '../../../utils/axiosInstance';
import { useDispatch } from 'react-redux';
import { CircularLoding } from '../../../redux/action/AuthAction';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "30%",
    height:"35%",
    bgcolor: 'background.paper',
    //   border: '2px solid #000',
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-between",
    boxShadow: 24,
    borderRadius:3,
    p: 2,
};

export default function EditCardDialog({type,data}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isremark, setisremark] = React.useState(null)

    const dispatch = useDispatch();
    const Loading = (lyd) => {
      dispatch(CircularLoding(lyd));
    }


    const submitdata = () => {
        if(!isremark){
            toast.error("please enter remark")
        }
        else{
            Loading(true)
            axiosInstance.post('employer//Remark-AssiginAssignment',{
                type:type,
                JOB_ID:data[0].JOB_ID,
                USER_ID:data[0].USER_ID,
                REMARK:isremark,
            }).then((res)=>{

                if(res.data.status === 1 ){
                    toast.success("remark added successfully")
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                }
                 
                if(res.data.status === 0 ){
                    toast.error("Somthing Went Wrong!")
                    handleClose()
                    Loading(false)

                }
            })
            
        }

    }


    return (
        <div>
            <Tooltip title="Add remarks here">
            <Edit color='warning' onClick={handleOpen} sx={{cursor:"pointer"}} />
            </Tooltip>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2" sx={{textAlign:'center'}}>
                        Remarks
                    </Typography>
                    <br />
                    <TextField
                        focused
                        margin="dense"
                        color='warning'
                        id="name"
                        label="Add Remarks here"
                        type="email"
                        fullWidth
                       onChange={e=>setisremark(e.target.value)}
                        variant="standard"
                    />
                    <Button
                      variant="contained"
                      className="profile_btn"
                      onClick={submitdata}
                      sx={{
                        width: "35%",
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
                </Box>
            </Modal>
        </div>
    );
}
