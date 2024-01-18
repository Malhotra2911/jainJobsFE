import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import "../../../css/jobseeker/SpecialService.css";
import { useDispatch } from "react-redux";
import { specialService } from "../../../redux/action/JobSeekerAction";
import NavbarJS from "./NavbarJS";
import { CssTextField, CustomSelect } from "../../../css/Employer/MaterialUicss/OwnCompany"
import { toast } from "react-toastify";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function SSFORM() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobno, setMobNo] = React.useState("");
    const [specialservice, setSpecialService] = React.useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !mobno || !specialservice) {
            toast.error("All Fields are required")
            return false;
        }
        dispatch(specialService(name, email, mobno, specialservice));
        setName("");
        setEmail("");
        setMobNo("");
        setSpecialService("");
    };

    return (
        <>
            <form action="" style={{ width: "100%" }} onSubmit={handleSubmit}>
                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 1 },
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <CssTextField
                        sx={{ color: " #F7701D", width: "70%" }}
                        required
                        id="outlined-required"
                        size="small"
                        color="warning"
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <CssTextField
                        sx={{ color: " #F7701D", width: "70%" }}
                        required
                        id="outlined-required"
                        color="warning"
                        size="small"
                        label="Email Address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <CssTextField
                        sx={{ color: " #F7701D", width: "70%" }}
                        required
                        id="outlined-required"
                        color="warning"
                        size="small"
                        label="Phone no."
                        type="number"
                        value={mobno}
                        onChange={(e) => setMobNo(e.target.value)}
                    />
                    <FormControl sx={{ width: "70%" }}>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <CustomSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={specialservice}
                            size="small"
                            label="Age"
                            onChange={(e) => setSpecialService(e.target.value)}
                        >
                            <MenuItem value="CV Building with expert">CV Building with expert</MenuItem>
                            <MenuItem value="Personality Developement">Personality Developement</MenuItem>
                            <MenuItem value="Entrepreneurship">Entrepreneurship</MenuItem>
                            <MenuItem value="Marketing & Ads">Marketing & Ads</MenuItem>
                            <MenuItem value="Motivation">Motivation</MenuItem>
                        </CustomSelect>
                    </FormControl>

                </Box>
            </form>

            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    m: 3,
                }}
            >
                <Button
                    variant="contained"
                    className="profile_btn"
                    sx={{
                        width: "30%",
                        // mt: 2,
                        // mb: 2,
                        textTransform: "none",
                        color: "#000000",
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                        "&:hover": { backgroundColor: "rgba(247, 112, 29, 0.39)" },
                    }}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Box>
        </>
    );
}
