import React, {useEffect, useState} from 'react';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Avatar, Divider} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Logout, PersonAdd, Settings} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import {useNavigate} from "react-router-dom";
import profileIcon from "../assets/images/profile-pic.jpg";
import Typography from "@mui/material/Typography";
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import axios from "axios";

const CustomMenu = ({anchorEl,userType, openMenu, handleClose}) => {
    
    const navigate = useNavigate();

    function user() {
        handleClose();
        navigate('/user');
    }


    function addnote() {
        handleClose();
        navigate('/add_note');
    }

 
    function updatenote() {
        handleClose();
        navigate('/update_note');
    }

    function deletenote() {
        handleClose();
        navigate('/delete_note');
    }

    
    
    return 
        <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}

            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            
        />
        
};

export default CustomMenu;
