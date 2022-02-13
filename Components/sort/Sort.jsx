import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

const Sort = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
    <Typography>مرتب سازی:</Typography>
    <Box sx={{direction:'rtl',bgcolor: 'background.paper',border:1,borderColor: 'grey.500',borderRadius:'2rem'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab sx={{fontFamily:"Alibaba"}} label="گران ترین" />
        <Tab sx={{fontFamily:"Alibaba"}} label="ارزان ترین" />
        <Tab sx={{fontFamily:"Alibaba"}} label="دیر ترین" />
        <Tab sx={{fontFamily:"Alibaba"}} label="زود ترین" />
        <Tab sx={{fontFamily:"Alibaba"}} label="پیشنهاد علی بابا" />

      </Tabs>
    </Box>
    </>
  );
};

export default Sort;
