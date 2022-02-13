import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Grid, Item, Typography, Button } from "@mui/material";
import { ImportantDevices } from "@mui/icons-material";


const sxIn = {
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
        borderRadius: '8px 0 0 8px',
        padding: "16.5px 30px",
    },
    width:'229px',
    marginLeft: '21px'
} 
const sxlable={
    "& .css-mieu49-MuiFormLabel-root-MuiInputLabel-root":{
        Direction:"rtl!Important",
    }
}



export default function BasicTextFields() {
  return (
    <Box>

      <Box
        sx={{textAlign: "right",display: "flex",alignItems: "center", alignItems: "center",}} >
        <Grid container spacing={5} sx={{mb:5}}>

          <Grid item xs={12} sm={4} sx={{ mt: "1.5rem" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>

                      <TextField sx={sxIn} id="outlined-basic" label="کدملی" variant="outlined" />
              
            </Box>
          </Grid>


          <Grid item xs={12} sm={4} sx={{ mt: "1.5rem"}}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                      <TextField sx={sxIn} id="outlined-basic" label="جنسیت" variant="outlined" />
                   </Box>
          </Grid>


          <Grid item xs={12} sm={4} sx={{ mt: "1.5rem" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>

                      <TextField sx={sxIn} id="outlined-basic" label="نام خانوادگی لاتین" variant="outlined" />
              
            </Box>
          </Grid>


          <Grid item xs={12} sm={4} sx={{ mt: "1.5rem" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>

                      <TextField sx={sxIn} id="outlined-basic" label="نام لاتین" variant="outlined" />
                   </Box>
              
          </Grid>


        </Grid>
      </Box>


    </Box>
  );
}
