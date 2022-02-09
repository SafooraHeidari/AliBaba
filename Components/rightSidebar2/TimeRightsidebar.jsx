import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}
const sx = {
  "& .css-1kz0hui-MuiSlider-valueLabel": {
    backgroundColor:'transparent'
  },
  "& .MuiSlider-valueLabelLabel":{
    color:'black'
  },
};
export default function TimeRightsidebar() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        sx={sx}
        min={7}
        max={21}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
