import React, {useEffect, useRef,useState} from 'react';
import axios from 'axios';

import {
    Button,
    Chip, FormControl,
    FormControlLabel,
    Grid, InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {BoxWithShadow, CustomBoxes} from "../../components/CustomBoxes";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {useTheme} from '@mui/material/styles'; 
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import CustomMenu from "../../components/CustomMenu";
import {Link, useNavigate} from "react-router-dom";

const student = (props) => {
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const {userId, userType} = props;
console.log("id : ",id);

const notes = [
    'Maths',
    'Physics',
    'Chemistry',
    
];

 function getStyles(name, personName, theme) {
     return {
         fontWeight:
             personName.indexOf(name) === -1
                 ? theme.typography.fontWeightRegular
                 : theme.typography.fontWeightMedium,
     };
 }

//export default functions of Student() {

    const [id, setid] = useState('');
    const [firstName, setfirstName] = useState(new Date());
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [mobile, setmobile] = useState('');
    const [status, setstatus] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setaccountType] = useState('');
    const navigate = useNavigate();
    const fileRef = useRef();
    const [fileObj, setFileObj] = useState('')
    const [anchorEl, setAnchorEl] = useState(null);

    const [personName, setPersonName] = React.useState([]);

    const handleChange = (e) => {
        setSubject(e.target.value);
    };


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleChangeSubjects = (e) => {
        const {
            target: {value},
        } = e;
        setSubject(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    function submitstudent(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("id ,", id);
        formData.append("firstName ,", firstName);
        formData.append("lastName ,", lastName);
        formData.append("email ,", email);
        formData.append("dateOfBirth ,", dateOfBirth);
        formData.append("mobile ,", mobile);
        formData.append("status ,", status);
        formData.append("accountType ,", accountType);
        formData.append("password ,", password);
        

        console.log("id ,", id);
        console.log("firstName ,", firstName);
        console.log("lastName ,", lastName);
        console.log("email ,", email);
        console.log("dateOfBirth ,", dateOfBirth);
        console.log("mobile ,", mobile);
        console.log("status ,", status);
        console.log("accountType ,", accountType);
        console.log("password ,", password);
        
        

        const student = {
            id,
            firstName,
            lastName,
            email,
            dateOfBirth,
            mobile,
            status,
            accountType,
            password
        
        }

        axios.post("http://localhost:8070/student/addstudent", formData)
            .then((res) => {

                console.log("respond : ", res.data)
                alert(res.data);
                setid("");
                setfirstName("");
                setlastName("");
                setemail("");
                setdateOfBirth("");
                setmobile("");
                setstatus("");
                setaccountType("");
                setPassword("");

                fileRef.current.value = "";

            }).catch((err) => {
            //alert(err);
        })

        navigate('/report',{state:student});
    }

    return (

        <Box py={4} sx={{bgcolor: "#F8F9FD", minHeight: "100vh"}}>
            <BoxWithShadow sx={{bgcolor: "#FBFBFB",}}>
                <form onSubmit={submitstudent} encType={"multipart/form-data"}>
                    <Grid container direction={"column"}>

                        <Grid item align={"center"} paddingY={5}>
                            <Typography variant={"h3"}>Student Registration Form</Typography>
                        </Grid>
                        <Grid item pl={3}>
                            <Typography variant={"subtitle1"}>Fill out the form carefully for registration</Typography>
                        </Grid>
                        <Grid item sx={{borderBottom: "2px solid #222"}} pl={3}>
                            <Typography variant={"subtitle1"}>*Required</Typography>
                        </Grid>


                        {/* ------------------ Student Id; -------------------- */}

                        <Grid container direction={"row"} pb={2} pt={5} px={5}
                        >
                            <Grid item direction={"column"} lg={2}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                >* Student Id</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10} sm={12} xs={12}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"id"}
                                           value={id}
                                           onInput={(e) => {
                                               setName(e.target.value);
                                           }}/>
                            </Grid>

                        </Grid>


                        {/* ------------------ First Name -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                        >
                            <Grid item direction={"column"} md={2}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                >* First Name</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"firstName"}
                                           value={firstName}
                                           onInput={e => setUserName(e.target.value)}/>
                            </Grid>
                        </Grid>

                        {/* ------------------ Last Name -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                        >
                            <Grid item direction={"column"} md={2}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                >* Last Name</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"lastName"}
                                           value={lastName}
                                           onInput={e => setUserName(e.target.value)}/>
                            </Grid>
                        </Grid>


                        {/* ------------------ Student Email -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >Student Email</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10} sm={12} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"email"}
                                           type={"email"}
                                           value={email}
                                           onInput={e => setEmail(e.target.value)}/>
                            </Grid>
                        </Grid>



                        {/* ------------------ Date Of Birth -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                        >
                            <Grid item direction={"column"} md={2}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                >* Date Of Birth</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12} px={1}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        disableFuture
                                        label="Date Of Birth"
                                        openTo="year"
                                        views={['year', 'month', 'day']}
                                        value={dateOfBirth}
                                        onInput={(newValue) => {
                                            setDateOfBirth(newValue);
                                        }}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        

                        {/* ------------------ Phone Number -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >Phone Number</Typography>
                            </Grid>
                            <Grid item container direction={"row"} md={5}
                                // sx={{bgcolor: "#8d9b13"}}
                            >
                                <Grid item direction={"column"}
                                      md={4} sm={4} xs={2}
                                    // sx={{bgcolor: "#139b8b"}}
                                      px={1} container
                                      justifyContent="center">
                                    <Typography variant={"h6"}
                                        // sx={{bgcolor: "#0034ff"}}
                                                align={"right"}>Private</Typography>
                                </Grid>
                                <Grid item direction={"column"} md={8} sm={8} xs={12}
                                    // sx={{bgcolor: "#139b8b"}}
                                      px={1}>
                                    <TextField margin="dense" id="outlined-basic"
                                               sx={{}}
                                               fullWidth
                                               variant="outlined"
                                               label={"mobile"}
                                               value={privetNumber}
                                               onInput={e => setPrivetNumber(e.target.value)}/>
                                </Grid>
                            </Grid>
                            <Grid item container direction={"row"} md={5}
                                // sx={{bgcolor: "#8d9b13"}}
                            >
                                <Grid item direction={"column"} md={4} sm={4} xs={2}
                                    // sx={{bgcolor: "#139b8b"}}
                                      px={1} container
                                      justifyContent="center">
                                    <Typography variant={"h6"}
                                        // sx={{bgcolor: "#0034ff"}}
                                                align={"right"}>Home</Typography>
                                </Grid>
                                <Grid item direction={"column"} md={8} sm={8} xs={12}
                                    // sx={{bgcolor: "#139b8b"}}
                                      px={1}>
                                    <TextField margin="dense" id="outlined-basic"
                                               sx={{}}
                                               fullWidth
                                               variant="outlined"
                                               label={"mobile"}
                                               value={homeNumber}
                                               onInput={e => setHomeNumber(e.target.value)}/>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* ------------------ Status -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                        >
                            <Grid item direction={"column"} md={2}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                >Gender</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12}
                                  px={1}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel onChange={(e) => setstatus(e.target.value)} value="Single" control={<Radio/>} label="Single"/>
                                    <FormControlLabel onChange={(e) => setstatus(e.target.value)} value="married" control={<Radio/>} label="Married"/>
                                </RadioGroup>
                            </Grid>
                        </Grid>


                        {/* ------------------ Account type-------------------- */}

                        <Grid container direction={"row"} pb={2} pt={5} px={5}
                        >
                            <Grid item direction={"column"} lg={2}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                >Account Type</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10} sm={12} xs={12}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"accountType"}
                                           value={accountType}
                                           onInput={(e) => {
                                               setName(e.target.value);
                                           }}/>
                            </Grid>

                        </Grid>


                        {/* ------------------ Password -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >* Password</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"Password"}
                                           value={password}
                                           type={"password"}
                                           onInput={e => setPassword(e.target.value)}/>
                            </Grid>
                        </Grid>

                        {/* ------------------ Cancel & Submit Button -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                              justifyContent={"space-between"}>
                            <Grid item direction={"column"} md={2} sm={6} xs={12}
                                  container
                                  justifyContent="center" px={1} py={1}
                            >
                                <Button variant={"contained"} onClick={() => navigate(-1)}
                                        sx={{padding: "15px", backgroundColor: "#262626"}}>Cancel</Button>
                            </Grid>
                            <Grid item direction={"column"} md={2} sm={6} xs={12}
                                  container
                                  justifyContent="center" px={1} py={1}
                            >
                                <Button type='submit' variant={"contained"}
                                        sx={{padding: "15px", backgroundColor: "#00B74A"}}>Submit</Button>
                            </Grid>

                        </Grid>

                    </Grid>
                </form>
            </BoxWithShadow>
        </Box>
        
    );


//}
};
export default student;
