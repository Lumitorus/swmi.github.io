import React from 'react';
import "./SideBar.scss";
import { Example } from "./Example";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";

export default function SideBar() {
    const navigate = useNavigate();

    return (
        <div className='sidebar'>
            {/* <Example /> */}

      <Breadcrumbs sx={{flexWrap: "nowrap",  color: "white"}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" onClick={() => navigate("/")}>
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate("/contacts")}
        >
          Contacts
        </Link>
        
      </Breadcrumbs>
    </div>      
    )
}