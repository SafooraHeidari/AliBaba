
import AdapterDayjs from '@mui/lab/AdapterDayjs';

import {useState} from "react";

import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/date-fns-jalali';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

export default function MyDatePicker() {
    const [value, setValue] = useState(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterJalali}>
            <DatePicker
                mask="____/__/__"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                renderInput={(params) => <TextField {...params} />}
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