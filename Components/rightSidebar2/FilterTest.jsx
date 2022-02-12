import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return value;
}
const minDistance = 1;
export default function FilterTest() {
  const [value, setValue] = React.useState([7, 21]);
const handelFilter = ()=>{
    // const newData = data.filter( f =>  Number((f.time0).split(":",1)) >= value[0] && Number((f.time1).split(":",1)) <= value[2] )
    // console.log(value[0])
    // console.log(value[1])
    //....................... filter is working - add this component to index.js and test it .......................................
    console.log(data.filter( f=> Number((f.time0).split(":",1)) >= value[0] && Number((f.time1).split(":",1)) <= value[1]))
    // console.log(newData)
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
   handelFilter()
  };
 const data=[
     {
         id:'1',
         time0:'11:30',
         time1:'20:00'
     },
     {
        id:'2',
        time0:'7:30',
        time1:'16:00'
    },
    {
        id:'3',
        time0:'9:00',
        time1:'15:00'
    },
    {
        id:'4',
        time0:'11:30',
        time1:'21:00'
    },
 ]
  return (
    <Box  sx={{width:'30%',margin:'5rem'}}>
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
      {
          data.map( d=> (
              <Box>
              <Box>time0={d.time0}</Box>
              <Box>time1={d.time1}</Box>
              <hr/>
              </Box>
          ))
      }
    </Box>
  );
}