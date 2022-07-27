
import React, {useState} from 'react';
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
const notes = [
    'Maths',
    'Physics',
    'Chemistry',
    
];



export default function notes ()  {

    const [subjectName, setsubjectName] = useState('');
    const [note, setnote] = useState('');

    const handleChange = (event) => {
        setSubject(event.target.value);
    };



    function submitnotes(e) {
        console.log("subjectName ,", subjectName);
        console.log("note ,", note);
        
        e.preventDefault();
        const notes = {
            subjectName,
            note
            
        }

        axios.post("http://localhost:8070/notes/addnotes", notes)
            .then((res) => {

                console.log("respond : ", res.data)
                setsubjectName("");
                setnote("");

            }).catch((err) => {
            alert(err);
        })
    }

    return (

        <Box py={4}  sx={{bgcolor: "#F8F9FD", minHeight:"100vh"}}>
            <BoxWithShadow  sx={{bgcolor: "#FBFBFB",}}>
                <form onSubmit={submit} encType={"multipart/form-data"}>
                    <Grid container direction={"column"}>

                        <Grid item align={"center"} paddingY={5}>
                            <Typography variant={"h3"}>Notes</Typography>
                        </Grid>


                        
                        {/* ------------------ Subject NAme -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                        >
                            <Grid item direction={"column"} md={2}
                                container
                                justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                >Subjects Name</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12} px={1}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-multiple-chip-label">Subject</InputLabel>
                                    <Select
                                        labelId="demo-multiple-chip-label"
                                        id="demo-multiple-chip"
                                        multiple
                                        value={subject}
                                        defaultValue={["Maths"]}
                                        onChange={handleChangeSubjects}
                                        input={<OutlinedInput id="select-multiple-chip" label="Subject"/>}
                                        renderValue={(selected) => (
                                            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value}/>
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem
                                                key={subjectName}
                                                value={subjectName}
                                            >
                                                {subjectName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>



                        {/* ------------------ Note -------------------- */}
                        
                        <Grid container direction={"column"} pb={1} px={5}
                        >

                            <Typography variant={"h6"}
                            >Note</Typography>

                        </Grid>
                        <Grid container direction={"row"} pb={2} px={5}
                        >

                            <TextField rows={4} rowsMax={10} multiline id="outlined-basic" label="note"
                                    variant="outlined"
                                    fullWidth
                                    value={note}
                                    onInput={e => setExperience(e.target.value)}/>
                        </Grid>

                        

                    {/* ------------------ Cancel & CRUd Buttons -------------------- */}

                    <Grid container direction={"row"} pb={2} px={5}
                        justifyContent={"space-between"}>
                        <Grid item direction={"column"} md={2} sm={6} xs={12}
                            container
                            justifyContent="center" px={1} py={1}
                        >
                            <Button variant={"contained"} sx={{padding: "15px", backgroundColor:"#262626"}}>Cancel</Button>
                        </Grid>
                        <Grid item direction={"column"} md={2} sm={6} xs={12}
                            container
                            justifyContent="center" px={1} py={1}
                        >
                            <Button type='submit' variant={"contained"} sx={{padding: "15px", backgroundColor:"#00B74A"}}>Create</Button>
                        </Grid>

                        <Grid item direction={"column"} md={2} sm={6} xs={12}
                            container
                            justifyContent="center" px={1} py={1}
                        >
                            <Button type='submit' variant={"contained"} sx={{padding: "15px", backgroundColor:"#00B74A"}}>Update</Button>
                        </Grid>

                        <Grid item direction={"column"} md={2} sm={6} xs={12}
                            container
                            justifyContent="center" px={1} py={1}
                        >
                            <Button type='submit' variant={"contained"} sx={{padding: "15px", backgroundColor:"#00B74A"}}>delete</Button>
                        </Grid>

                    </Grid>

                    </Grid>
                </form>
        </BoxWithShadow>

</Box>
)
    ;
};

