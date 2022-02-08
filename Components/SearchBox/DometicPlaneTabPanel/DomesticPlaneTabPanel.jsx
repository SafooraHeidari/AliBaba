
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Box, Button, InputAdornment} from "@mui/material";
import Hotel from "../../../styles/assest/Icons/Hotel";
import DatePicker from "./MyDatePicker";
import MyDatePicker from "./MyDatePicker";
import FlightMode from "./FlightMode"

const optionsCity = ['تهران', 'شیراز', 'مشهد'];
const optionsNum = [1, 2, 3, 4];




const sxFrom = {
        "& .css-ekiabt-MuiInputBase-root-MuiOutlinedInput-root":{
            borderRadius: '0 8px 8px 0',
            height: '48px'
        },
        width:'229px',
}

const sxTo = {
    "& .css-ekiabt-MuiInputBase-root-MuiOutlinedInput-root":{
        borderRadius: '8px 0 0 8px',
        height: '48px'
    },
    width:'229px',
    marginLeft: '21px'
}



function DomesticPlaneTabPanel(){
    return(
        <Box sx={{display:'flex',flexDirection:'column'}}>

            <FlightMode/>

            <Box sx={{display:'flex',flexDirection:'row'}}>
                <Autocomplete sx={sxFrom}
                              freeSolo
                              options={optionsCity}
                              renderInput={(params) => (<TextField size="small" {...params} label="مبدا (شهر)"/>
                              )}
                />
                <Autocomplete sx={sxTo}
                              freeSolo
                              options={optionsCity}
                              renderInput={(params) => <TextField size="small" {...params} label="مقصد (شهر)" />}
                />
                <MyDatePicker/>
                <Autocomplete sx={{width:'15%'}}
                              freeSolo
                              options={optionsNum}
                              renderInput={(params) => <TextField {...params} label="مسافران" />}
                />
                <Button variant="contained" sx={{width:'183px', height:'48px'}}>جستجو</Button>

            </Box>


        </Box>


    )

}
export default DomesticPlaneTabPanel