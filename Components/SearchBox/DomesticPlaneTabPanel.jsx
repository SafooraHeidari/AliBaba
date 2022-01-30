
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Box, Button} from "@mui/material";
import Hotel from "../../styles/assest/Icons/Hotel";

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];

const options = ['تهران', 'اصفهان', 'شیراز', 'بندر عباس', 'اهواز'];


function DomesticPlaneTabPanel(){
    return(

        <Box sx={{direction:'rtl',display:'flex',flexDirection:'row'}}>
            <Autocomplete
                freeSolo
                options={options}
                renderInput={(params) => <TextField {...params} label="مبدا (شهر)" />}
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