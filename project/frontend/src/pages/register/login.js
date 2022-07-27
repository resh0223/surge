import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, Checkbox, FormControlLabel, Grid, Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import {BoxWithoutShadow} from "../../components/CustomBoxes";
import Swal from 'sweetalert2';
import passwordValidator from 'password-validator';
import Cookies from 'js-cookie';

var schema = new passwordValidator();

export default function Login() {

    const [id, setid] = useState(false);
    const [password, setpassword] = useState(false);
    

    async function login(e){
       e.preventDefault();

       let item = {id , password};
       let result = await fetch(global.APIUrl+"/user/login", {
         method: 'POST',
         headers:{
            "Content-Type" : "application/json",
            "Accept" : "application/json"
         },
         body:JSON.stringify(item)
      });
      result = await result.json();
      
      if( JSON.stringify(result.message) === 'true'){
          Cookies.set('id',id, { expires: 70000, path: '' });

          	Swal.fire({  
			title: "Success!",
			text: "Login Success",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/Admin";
				}
			});
      }else{
          	Swal.fire({  
			title: "Error!",
			text: "Login Not Success",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
       }
    }
   

    function handleSubmit() {

    }

    return (
        <Box sx={{borderRadius: 0, bgcolor:"#F8F9FD"}}>
            <BoxWithoutShadow sx={{justifyContent: "center", alignItems: "center",}}>
                <Grid container direction={"row"}
                      sx={{height: "90vh", borderRadius: "10px"}}
                      component={Paper}>
                    <Grid container direction={"column"} justifyContent={"center"}
                          alignItems="center" item xl={5.9} lg={5.9} md={6}
                          sm={12} xs={12}
                          sx={{
                              bgcolor: "#262626",
                              borderRadius: "10px",
                          }}
                    >

                        <Grid item align={"center"} sx={{}}></Grid>
                    </Grid>
                    <Grid container justifyContent="space-around"
                        
                          item lg={5.9} md={6} sm={12} xs={12} direction={"column"}

                          sx={{
                              height: "90vh",
                              borderRadius: "10px",
                              padding: "5px 50px"
                          }}>
                        <Grid item align={"right"}>
                            
                        </Grid>
                        <Grid item sx={{padding: "5px 0",}}>
                            <Typography variant={"h3"}
                                        sx={{color: "#262626", fontWeight: 500}}
                                        align={"left"}>Welcome!</Typography>
                            <Typography variant={"body1"}
                                        sx={{color: "#757575"}} align={"left"}>Login your
                                account</Typography>

                        </Grid>
                        <form action="#" method="post" >

                            {/* ------------------userid--------------------- */}
                            <Grid container direction={"column"}>
                                <Grid item sx={{paddingTop: "20px"}}>
                                    
                                    <Grid item sx={{}}>
                                        <TextField margin="dense" id="outlined-basic"
                                                   sx={{width: "100%", minWidth: "150px"}}
                                                   variant="outlined"
                                                   label={"id"}
                                                   value={userName}
                                                   onInput={(e) => setid(e.target.value)}/>
                                        
                                    </Grid>
                                </Grid>

                                {/* -----------------------passowrd---------------------------- */}

                                <Grid container item direction={"column"}>
                                    <Grid item sx={{paddingTop: "20px"}}>
                                        
                                        <Grid item sx={{}}>
                                            <TextField margin="dense" id="outlined-basic"
                                                       sx={{width: "100%", minWidth: "150px"}}
                                                       variant="outlined" label={"password"}
                                                       value={password}
                                                       onInput={(e) => setpassword(e.target.value)}/>
                                            
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox/>}
                                    label={<Typography sx={{color: "#111", paddingTop: "5px"}}>Remember
                                        me</Typography>}
                                    labelPlacement="end"
                                />

                            </Grid>
                            <Grid sx={{paddingTop: "30px"}}>
                                <Button onClick={login} variant={"contained"} color={"primary"}
                                        sx={{width: "100%", bgcolor:"#00B74A"}}>Login</Button>
                                
                            </Grid>
                        </form>
                    </Grid>
                </Grid>

            </BoxWithoutShadow>
        </Box>
    );
};


