import React from 'react';
import PassengersIcon from '../../asset/icon/passengersIcon.svg'
import { Box, Container, Button, Typography,TextField,Grid } from "@mui/material";
import theme from "../../styles/theme";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Checkbox from "@mui/material/Checkbox";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Passengers = () => {
  return (
      <Box sx={{border:1,borderColor:"grey.500",borderRadius:"1rem",display:"flex",flexDirection:"column",p:2}}>
          <Box sx={{display:"flex",justifyContent:"flex-end"}}>
              <Typography sx={{fontWeight:"bold",color:"grey.800",mr:1}}>مشخصات مسافران</Typography>
              <PeopleAltIcon sx={{color:"grey.800"}}/>
              {/* <Box component={"span"} sx={{height:"10px",width:"4px",background:"grey.800"}}></Box> */}
          </Box>
          <Box sx={{dispaly:"flex",flexDirection:"row",alignItems:"center"}}>
              <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <Button color="secondary">
                  انتخاب مسافران سابق
                  <PersonOutlineOutlinedIcon/>
              </Button>
                <Box sx={{display:"flex",alignItems:"center"}}>
                <FormControl > 
                     <RadioGroup
        sx={{display:"flex",flexDirection:"row"}}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel color="secondary" value="female" control={<Radio />} label="کارت ملی" />
        <FormControlLabel color="secondary" value="male" control={<Radio />} label="پاسپورت" />
      </RadioGroup>
    </FormControl>
    <Typography component="span" sx={{pr:1,pl:1,border:1,borderRadius:"1rem"}}>بزرگسال</Typography>

                </Box>
              
              </Box>
            </Box>
            <Box>
            <Grid container spacing={2} sx={{justifyContent:"flex-end"}}>
        <Grid item md={4} sm={12}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item md={4} sm={12}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item md={4} sm={12}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item md={4} sm={12}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item md={4} sm={12}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item md={4} sm={12}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item md={4} sm={12}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>

      </Grid>
            </Box>
      </Box>
  ); 
};

export default Passengers;
