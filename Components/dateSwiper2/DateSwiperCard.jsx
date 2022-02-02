import React from "react";
import { Box,Typography } from "@mui/system";
const DateSwiperCard = ({day,price}) => {
  return (
    <Box sx={{textAlign:'center',borderLeft:'1px solid rgba(0, 0, 0, .1)',borderRadius:'10px'}}>
    <Box>{day}</Box>
    <Box>{price}</Box>
    </Box>
  ); 
};

export default DateSwiperCard;
