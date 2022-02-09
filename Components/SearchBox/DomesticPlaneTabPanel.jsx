
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Box, Button} from "@mui/material";
import Hotel from "../../styles/assest/Icons/Hotel";

const options = ['تهران', 'اصفهان', 'شیراز', 'بندر عباس', 'اهواز'];


function DomesticPlaneTabPanel(){
    return(

        <Box sx={{direction:'rtl',display:'flex',flexDirection:'row'}}>
            <Autocomplete
                freeSolo
                options={options}
                renderInput={(params) => (<>
                    <TextField {...params} label="مبدا (شهر)"/>
                </>
                    )}
            />
            <Autocomplete
                freeSolo
                options={options}
                renderInput={(params) => <TextField {...params} label="مقصد (شهر)" />}
            />
            <Autocomplete
                freeSolo
                options={options}
                renderInput={(params) => <TextField {...params} label="مسافران" />}
            />
            <Button>جستجو</Button>

        </Box>
    )

}
export default DomesticPlaneTabPanel