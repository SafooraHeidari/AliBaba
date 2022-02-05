
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Box, Button} from "@mui/material";
import Hotel from "../../styles/assest/Icons/Hotel";
import DatePicker from "./MyDatePicker";
import MyDatePicker from "./MyDatePicker";

const optionsCity = ['تهران', 'اصفهان', 'شیراز', 'بندر عباس', 'اهواز'];
const optionsNum = [1, 2, 3, 4];


function DomesticPlaneTabPanel(){
    return(

        <Box sx={{direction:'rtl',display:'flex',flexDirection:'row'}}>
            <Autocomplete sx={{direction:'rtl', width:'20%'}}
                          freeSolo
                options={optionsCity}
                renderInput={(params) => (<>
                    <TextField sx={{direction:'rtl'}}
                               {...params} label="مبدا (شهر)"/>
                    </>
                    )}
            />
            <Autocomplete sx={{width:'20%'}}
                          freeSolo
                options={optionsCity}
                renderInput={(params) => <TextField {...params} label="مقصد (شهر)" />}
            />
            <MyDatePicker/>





            <Autocomplete sx={{width:'15%'}}
                freeSolo
                options={optionsNum}
                renderInput={(params) => <TextField {...params} label="مسافران" />}
            />
            <Button>جستجو</Button>

        </Box>
    )

}
export default DomesticPlaneTabPanel