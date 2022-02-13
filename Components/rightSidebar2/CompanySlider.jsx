import React from 'react'
import iranAir from "./../../asset/images/iranAir.png";
import gheshmAir from "./../../asset/images/gheshmAir.png";
import aseman from "./../../asset/images/aseman.png";
import zagros from "./../../asset/images/zagros.png";
import iranAirTour from "./../../asset/images/iranAirTour.png";
import kaspian from "./../../asset/images/kaspian.png";
import varesh from "./../../asset/images/varesh.png";
import ata from "./../../asset/images/ata.png";
import saha from "./../../asset/images/saha.png";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import {ThemeProvider} from "@emotion/react";
import theme from "../../styles/theme";
import FormGroup from '@mui/material/FormGroup';
import {Box,Avatar} from '@mui/material';
import {useState} from "react";
const company = [
    {
        id:1,
        image:iranAir,
        airline:"ایران ایر",
    },
    {
        id:2,
        image:aseman,
        airline:"آسمان"
    },
    {
        id:3,
        image:zagros,
        airline:"زاگرس"
    },
    {
        id:4,
        image:iranAirTour,
        airline:"ایران تور"
    },
    {
        id:5,
        image:kaspian,
        airline:"کاسپین"
    },
    {
        id:6,
        image:varesh,
        airline:"وارش"
    },
    {
        id:7,
        image:ata,
        airline:"آتا"
    },
]

const category = ["ایران ایر", "آسمان","زاگرس","ایران تور","کاسپین","وارش","آتا"]
// ({flight,dispatch})
const CompanySidebar = ({flight,dispatch}) => {

    // const handleChange = (event) => {
    //     if(event.target.checked){
    //         dispatch({type: 'companyFilter', payload: {companyName: event.target.id}})
    //     }
    // }
    // return (
    //     <>
    //         <ThemeProvider theme={theme} >
    //             <FormGroup sx={{color:'black !important','& .PrivateSwitchBase-input':{color:'black !important'},}}>
    //                 {
    //                     company.map( data => (
    //                         <Box sx={{display:'flex'}}>
    //                             <FormControlLabel control={<input type="checkbox"  id={data.airline}/>} label={data.airline} onClick={handleChange}/>
    //                         </Box>
    //                     ))
    //                 }
    //             </FormGroup>
    //         </ThemeProvider>
    //     </>
    // )
    // ["ایران ایر", "آسمان","زاگرس","ایران تور","کاسپین","وارش","آتا"]
    const [Checked, setChecked] = React.useState([]);

    const handleToggle = (value) => {
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];
        if (currentIndex === -1){
            newChecked.push(value);
        }
        else{
            newChecked.splice(currentIndex,1);
        }
        setChecked(newChecked)
        let companyFilters=[];
        for (let ii = 0; ii < newChecked.length;ii++){
            companyFilters.push(category[newChecked[ii]-1])
        }
        console.log(newChecked)
        console.log(companyFilters)

        if (
            newChecked.length === 0 ||
            newChecked.length === category.length
        ) {
            console.log(flight);
        } else {
            console.log(flight.filter(f => !companyFilters.indexOf(f.airline)));
        }

        // dispatch({type: 'companyFilter2', payload: {filters: newChecked,company:companyFilters}})
        // console.log(companyFilters)
    }



    // console.log(companyFilters)
    // console.log(companyFilters.indexOf('زاگرس'))

    // const newFilters = {...Filters}
    // newFilters[category] = filters
    //
    // setFilters(newFilters)






  return (
    <>

    <ThemeProvider theme={theme} >
     <FormGroup sx={{color:'black !important','& .PrivateSwitchBase-input':{color:'black !important'},}}>
    {
        company.map( data => (
            <Box sx={{display:'flex'}}>
            <FormControlLabel control={<input type="checkbox" id={data.id}
                                              checked={Checked.indexOf(data.id) === -1 ? false : true}/>}
                              label={data.airline}
                              onChange={() => handleToggle(data.id)}
                              />
            </Box>
        ))
    }
    </FormGroup>
    </ThemeProvider>
    </>
  )
}

export default CompanySidebar