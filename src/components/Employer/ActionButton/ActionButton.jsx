import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import AssignAssignment from "./AssignAssignment";
import ScreenQuestion from "./ScreenQuestion";
import VirtualInvitation from "./VirtualInvitation";
import TelephonicInterview from "./TelephonicInterview";
import { useDispatch } from "react-redux";
import { CircularLoding } from "../../../redux/action/AuthAction";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";

const options = [
  "Assign Assignment",
  "Assign Screening Questions",
  "Virtual Invition",
  "Assign Profile",
  "Telephonic Interview",
  "Shortlisted",
];

export default function ActionButton({ userdata }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [assignAss, setAssignAss] = React.useState(false);
  const [screenques, setScreenques] = React.useState(false);
  const [virtualinv, setVirtualinv] = React.useState(false);
  const [telephonic, setTelephonic] = React.useState(false);

  const handleClick = () => {
    if (options[selectedIndex] == "Assign Assignment") {
      setAssignAss(true);
    } else if (options[selectedIndex] == "Assign Screening Questions") {
      setScreenques(true);
    } else if (options[selectedIndex] == "Virtual Invition") {
      setVirtualinv(true);
    } else if (options[selectedIndex] == "Telephonic Interview") {
      setTelephonic(true);
    } else if (options[selectedIndex] == "Shortlisted") {
      handleshortlisted();
    }
  };

  const handleshortlisted = () => {
    Loading(true);
    axiosInstance
      .post("employer/AssiginAssignment", {
        USER_ID: userdata.USER_ID,
        JOB_ID: userdata.JOB_ID,
        SHORTLISTED:1,
      })
      .then((res) => {
        Loading(false);
        toast.success("user shortlisted Succesfully!!");
      });
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const [istiming, setistiming] = React.useState(null);

  const dispatch = useDispatch();
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };

  const handlesubmit = () => {
    if (istiming) {
      Loading(true);
      axiosInstance
        .post("employer/AssiginAssignment", {
          USER_ID: userdata.USER_ID,
          JOB_ID: userdata.JOB_ID,
          TELEPHONICINTERVIEW: JSON.stringify({
            time: istiming,
          }),
        })
        .then((res) => {
          toast.info("You Have Assign Assignment Succesfully!!");
          Loading(false);
          handleClose();
        });
    } else {
      toast.error("please ins`ert value");
    }
  };
  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        ref={anchorRef}
        aria-label="split button"
      >
        <Button
          onClick={handleClick}
          sx={{
            width: "auto%",
            textTransform: "none",
            color: "#000000",
            backgroundColor: "rgba(247, 112, 29, 0.39)",
            "&:hover": {
              backgroundColor: "rgba(247, 112, 29, 0.39)",
            },
          }}
        >
          {options[selectedIndex]}
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
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      {assignAss && (
        <AssignAssignment AssignAss={setAssignAss} userdata={userdata} />
      )}
      {screenques && (
        <ScreenQuestion Screenqu={setScreenques} userdata={userdata} />
      )}
      {virtualinv && (
        <VirtualInvitation Virtual={setVirtualinv} userdata={userdata} />
      )}
      {telephonic && (
        <TelephonicInterview Telepho={setTelephonic} userdata={userdata} />
      )}
    </React.Fragment>
  );
}
