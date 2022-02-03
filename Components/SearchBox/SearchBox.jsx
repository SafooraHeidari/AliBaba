import {Box, Container, Divider, Paper, Stack, Typography} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';
import {useState} from "react";
import DomesticPlanes from "../../styles/assest/Icons/DomesticPlanes"
import ForeignPlanes from "../../styles/assest/Icons/ForeignPlanes";
import Hotel from "../../styles/assest/Icons/Hotel";
import Residence from "../../styles/assest/Icons/Residence";
import Tour from "../../styles/assest/Icons/Tour";
import Bus from "../../styles/assest/Icons/Bus";
import Train from "../../styles/assest/Icons/Train";
import DomesticPlaneTabPanel from "./DomesticPlaneTabPanel";


// const SearchContainer = styled('Container')({
//     height:'265px',
//     width:'1200px',
//     backgroundColor:theme.palette.white.main,
//     borderRadius:'8px',
//     boxShadow:'0 2px 1px -1px theme.palette.shadowButton.main',
//     border: 'solid 1px theme.palette.border1.main'
// })

export default function SearchBox(){
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return(
        <Container sx={{height:'265px', width:'1200px',backgroundColor:theme.palette.white.main,borderRadius:'8px',
            boxShadow:'0 2px 1px -1px theme.palette.shadowButton.main',border: 'solid 1px theme.palette.border1.main'}}>


            <TabContext sx={{direction:'rtl'}} value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' ,direction:'rtl'}}>
                    <Tabs onChange={handleChange} aria-label="lab API tabs example" textColor={theme.palette.success.five}
                          indicatorColor="secondary"
                          aria-label="secondary tabs example" centered>
                        <Tab icon={<DomesticPlanes/>} label="پرواز داخلی" value="1" />
                        <Tab icon={<ForeignPlanes/>} label="پرواز خارجی" value="2" />
                        <Tab icon={<Train/>} label="قطار" value="3" />
                        <Tab icon={<Bus/>} label="اتوبوس" value="4" />
                        <Tab icon={<Tour/>} label="تور" value="5" />
                        <Tab icon={<Hotel/>} label="هتل" value="6" />
                        <Tab icon={<Residence/>} label="ویلا و اقامتگاه" value="7" />
                    </Tabs>
                </Box>
                <TabPanel value="1"><DomesticPlaneTabPanel/></TabPanel>
                <TabPanel sx={{direction:'rtl'}} value="2">Item Two</TabPanel>
                <TabPanel sx={{direction:'rtl'}} value="3">Item Three</TabPanel>
                <TabPanel sx={{direction:'rtl'}} value="4">Item Three</TabPanel>
                <TabPanel sx={{direction:'rtl'}} value="5">Item Three</TabPanel>
                <TabPanel sx={{direction:'rtl'}} value="6">Item Three</TabPanel>
                <TabPanel sx={{direction:'rtl'}} value="7">Item Three</TabPanel>
            </TabContext>


        </Container>
    )
}

