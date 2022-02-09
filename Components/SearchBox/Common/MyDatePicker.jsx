
import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import AdapterJalali from '@date-io/date-fns-jalali';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';

const sx = {
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
        borderRadius: '10px',
        height: '48px',
        boxSizing: 'border-box'
    },
    width:'240px',
}


export default function MyDatePicker() {
    const [value, setValue] = React.useState([null, null]);

    return (
        <LocalizationProvider dateAdapter={AdapterJalali}>

                <DesktopDateRangePicker
                    startText="تاریخ رفت"
                    endText="تاریخ برگشت"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} sx={sx}/>
                            <TextField {...endProps} sx={sx}/>
                        </React.Fragment>
                    )}
                />
        </LocalizationProvider>
    );
}


// <MobileDateRangePicker
//     startText="Mobile start"
//     value={value}
//     onChange={(newValue) => {
//         setValue(newValue);
//     }}
//     renderInput={(startProps, endProps) => (
//         <React.Fragment>
//             <TextField {...startProps} />
//             <TextField {...endProps} />
//         </React.Fragment>
//     )}
// />














// import AdapterDayjs from '@mui/lab/AdapterDayjs';
//
// import {useState} from "react";
//
// import TextField from '@mui/material/TextField';
// import AdapterJalali from '@date-io/date-fns-jalali';
// import DatePicker from '@mui/lab/DatePicker';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
//
// const sx = {
//     "& .css-51y7w7-MuiInputBase-root-MuiOutlinedInput-root":{
//         borderRadius: '8px 8px 8px 8px',
//         height: '48px'
//     },
//     width:'240px',
//     marginLeft: '20px'
// }
// export default function MyDatePicker() {
//     const [value, setValue] = useState(new Date());
//
//     return (
//         <LocalizationProvider  dateAdapter={AdapterJalali}>
//             <DatePicker
//                 mask="____/__/__"
//                 value={value}
//                 onChange={(newValue) => setValue(newValue)}
//                 renderInput={(params) => <TextField sx={sx} {...params} />}
//             />
//         </LocalizationProvider>
//     );
// }




// //////////////////////////////
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