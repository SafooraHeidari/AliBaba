
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Box, Button, InputAdornment} from "@mui/material";
import Hotel from "../../../styles/assest/Icons/Hotel";
import { styled } from '@mui/material/styles';

import MyDatePicker from "../Common/MyDatePicker";
import Selector from "../Common/Selector";

const optionsCity = ['تهران', 'شیراز', 'مشهد'];
const optionsNum = [1, 2, 3, 4];

const selectorOptions = [
    'یک طرفه',
    'رفت و برگشت',
];


const sxFrom = {
        "& .css-ekiabt-MuiInputBase-root-MuiOutlinedInput-root":{
            borderRadius: '0 8px 8px 0',
            height: '48px',
        },
        width:'229px',
    direction:'rtl'
}

const sxTo = {
    "& .css-ekiabt-MuiInputBase-root-MuiOutlinedInput-root":{
        borderRadius: '8px 0 0 8px',
        height: '48px'
    },
    width:'229px',
    marginLeft: '21px'
}

const sxPassengers = {
    "& .css-ekiabt-MuiInputBase-root-MuiOutlinedInput-root":{
        borderRadius: '8px',
        height: '48px'
    },
    width:'183px',
    marginX: '21px'
}


// InputLabelProps={{
//     style: {
//         width: '100%',
//             color: 'green',
//             transformOrigin: 'top left',
//     }}}

export default function DomesticFlightTabPanel(){
    return(
        <Box sx={{display:'flex',flexDirection:'column'}}>
            <Selector options={selectorOptions}/>
            <Box sx={{display:'flex',flexDirection:'row'}}>
                <Autocomplete sx={sxFrom}
                              freeSolo
                              options={optionsCity}
                              renderInput={(params) => <TextField size="small" {...params} label="مبدا (شهر)"/>}/>
                <Autocomplete sx={sxTo}
                              freeSolo
                              options={optionsCity}
                              renderInput={(params) => <TextField size="small" {...params} label="مقصد (شهر)" />}/>
                <MyDatePicker/>
                <Autocomplete sx={sxPassengers}
                              freeSolo
                              options={optionsNum}
                              renderInput={(params) => <TextField size="small" {...params} label="مسافران" />}/>
                <Button variant="contained" sx={{width:'183px', height:'45px'}}>جستجو</Button>
            </Box>
        </Box>
    )
}
