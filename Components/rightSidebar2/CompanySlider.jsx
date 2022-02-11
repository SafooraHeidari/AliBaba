import React from 'react'
import iranAir from "./../../asset/images/iranAir.png";
import gheshmAir from "./../../asset/images/gheshmAir.png";
import aseman from "./../../asset/images/aseman.png";
import zagros from "./../../asset/images/zagros.png";
import iranAirTour from "./../../asset/images/iranAirTour.png";
import kaspian from "./../../asset/images/kaspian.png";
import varesh from "./../../asset/images/varesh.png";
import ata from "./../../asset/images/ata.png";
import saha from "./../../asset/images/saha.png";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import {ThemeProvider} from "@emotion/react";
import theme from "../../styles/theme";
import FormGroup from '@mui/material/FormGroup';
import {Box,Avatar} from '@mui/material';
const company = [
    {
        id:1,
        image:iranAir,
        airline:"ایران ایر",
    },
    {
        id:3,
        image:aseman,
        airline:"آسمان"
    },
    {
        id:4,
        image:zagros,
        airline:"زاگروس"
    },
    {
        id:5,
        image:iranAirTour,
        airline:"ایران تور"
    },
    {
        id:6,
        image:kaspian,
        airline:"کاسپین"
    },
    {
        id:7,
        image:varesh,
        airline:"وارش"
    },
    {
        id:8,
        image:ata,
        airline:"آتا"
    },
]
const CompanySidebar = () => {
  return (
    <>
    <ThemeProvider theme={theme} >
     <FormGroup sx={{color:'black !important','& .PrivateSwitchBase-input':{color:'black !important'},}}>
    {
        company.map( data => (
            <Box sx={{display:'flex'}}>
            <FormControlLabel control={<Checkbox />} label={data.airline} /> 
            </Box>
        ))
    }
    </FormGroup>
    </ThemeProvider>
    </>
  )
}

export default CompanySidebar