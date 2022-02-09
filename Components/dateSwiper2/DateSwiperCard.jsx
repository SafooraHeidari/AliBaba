import React from "react";
import { Box,Typography } from "@mui/system";
const DateSwiperCard = ({day,price}) => {
  return (
    <Box sx={{textAlign:'center',borderLeft:'1px solid rgba(0, 0, 0, .1)',borderRadius:'10px',marginTop:'5px'}}>
    <Box sx={{fontSize:'.75rem',color:'#6C7680'}}>{day}</Box>
    <Box sx={{fontSize:'1.25rem',color:'#2B2F33',fontWeight:'500'}}>{price}</Box>
    </Box>
  ); 
};

export default DateSwiperCard;
