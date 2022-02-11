import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useState, useContext} from "react";
import {FlightContext} from "./../../pages/index";

function valuetext(value) {
  return value;
}
const minDistance = 1;
export default function TimeSlider({flight}) {
  const {flights,dispatch} = useContext(FlightContext)
  const [value, setValue] = React.useState([7, 21]);
  const handelFilter = () => {
    dispatch({type: 'timeFilter', payload: {from: value[0], to: value[1]}})
  }
  const handleChange = (event, newValue, activeThumb,flight) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
    handelFilter();
  };
  {console.log(flights)}
  return (
    <Box>
      <Slider
      min={7}
      max={21}
        getAriaLabel={() => 'Minimum distance'}
        disableSwap
        sx={{'& .css-1kz0hui-MuiSlider-valueLabel':{color:'black !important',backgroundColor:'transparent !important'}, '& .css-eg0mwd-MuiSlider-thumb':{backgroundColor:'white !important'},'& .css-14pt78w-MuiSlider-rail':{backgroundColor:'grey !important'},'& .css-eg0mwd-MuiSlider-thumb:hover':{border:'2px solid #007aff; !important'}}}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
      />
      
    </Box>
  );
}