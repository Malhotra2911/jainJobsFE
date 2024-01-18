// import * as React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
// import Divider from "@mui/material/Divider";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import FormLabel from "@mui/material/FormLabel";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   borderRadius: "10px",
//   boxShadow: 24,
//   p: 1,
// };

// export default function KeepMountedModal() {
//   const [skillStatus, setSkillStatus] = React.useState(false);
//   const handleOpen = () => setSkillStatus(true);
//   const handleClose = () => setSkillStatus(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         keepMounted
//         open={skillStatus}
//         onClose={handleClose}
//         aria-labelledby="keep-mounted-modal-title"
//         aria-describedby="keep-mounted-modal-description"
//       >
//         <Box sx={style}>
//           <Box sx={{ display: "flex", flexDirection: "row" }}>
//             <TaskAltOutlinedIcon sx={{ color: "green", mr: 2 }} />
//             <Typography
//               id="keep-mounted-modal-title"
//               variant="h6"
//               component="h2"
//             >
//               Passed the screening Check
//             </Typography>
//           </Box>
//           <Divider />
//           <Box sx={{ mt: 3, mb: 2 }}>
//             <FormGroup
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//               }}
//             >
//               <FormControlLabel
//                 control={<Checkbox color="warning" defaultChecked />}
//                 label="Assessment Test (Advanced)"
//               />
//               <FormLabel
//                 sx={{ mt: 1.2, color: "orange", textDecoration: "underline" }}
//                 component="legend"
//               >
//                 View Report
//               </FormLabel>
//             </FormGroup>
//             <FormGroup
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//               }}
//             >
//               <FormControlLabel
//                 control={<Checkbox color="warning" defaultChecked />}
//                 label="Assessment Test(Beginner)"
//               />
//               <FormLabel
//                 sx={{ mt: 1.2, color: "orange", textDecoration: "underline" }}
//                 component="legend"
//               >
//                 View Report
//               </FormLabel>
//             </FormGroup>
//           </Box>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
