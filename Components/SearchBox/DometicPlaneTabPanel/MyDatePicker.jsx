
import AdapterDayjs from '@mui/lab/AdapterDayjs';

import {useState} from "react";

import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/date-fns-jalali';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const sx = {
    "& .css-51y7w7-MuiInputBase-root-MuiOutlinedInput-root":{
        borderRadius: '8px 8px 8px 8px',
        height: '48px'
    },
    width:'240px',
    marginLeft: '20px'
}


export default function MyDatePicker() {
    const [value, setValue] = useState(new Date());

    return (
        <LocalizationProvider  dateAdapter={AdapterJalali}>
            <DatePicker
                mask="____/__/__"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                renderInput={(params) => <TextField sx={sx} {...params} />}
            />
        </LocalizationProvider>
    );
}





// export default function MyDatePicker() {
//     const [value, setValue] = useState(null);
//
//     return (
//         <LocalizationProvider dateAdapter={AdapterJalali}>
//             <DatePicker
//                 label="Basic example"
//                 value={value}
//                 onChange={(newValue) => {
//                     setValue(newValue);
//                 }}
//                 renderInput={(params) => <TextField {...params} />}
//             />
//         </LocalizationProvider>
//     );
// }