import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {ThemeProvider} from "@emotion/react";
import theme from "../../styles/theme";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const TypeSidebar = () => {
  return (
    <>
    <ThemeProvider theme={theme} >
     <FormGroup sx={{color:'black !important','& .PrivateSwitchBase-input':{color:'black !important'}}}>
      <FormControlLabel control={<Checkbox />} label="سیستمی" />
      <FormControlLabel control={<Checkbox />} label="چارتری" />
    </FormGroup>
    </ThemeProvider>
    </>
          )
}

export default TypeSidebar