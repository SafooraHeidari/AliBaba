import {Box, Container} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import DomesticPlanes from "../../styles/assest/Icons/DomesticPlanes"
import ForeignPlanes from "../../styles/assest/Icons/ForeignPlanes";
import Hotel from "../../styles/assest/Icons/Hotel";
import Residence from "../../styles/assest/Icons/Residence";
import Tour from "../../styles/assest/Icons/Tour";
import Bus from "../../styles/assest/Icons/Bus";
import Train from "../../styles/assest/Icons/Train";
import DomesticFlightTabPanel from "./DomesticFlightTabPanel/DomesticFlightTabPanel";
import ForeignFlightTabPanel from "./ForeignPlaneTabPanel/ForeignFlightTabPanel";
import TrainTabPanel from "./TrainTabPanel/TrainTabPanel";
import BusTabPanel from "./BusTabPanel/BusTabPanel";
import TourPanel from "./TourPanel/TourPanel";
import HotelPanel from "./HotelPanel/HotelPanel";
import ResidencePanel from "./ResidencePanel/ResidencePanel";
import {FlightContext} from "./../../pages/index"
import RecentSearch from "./../RecentSearch/RecentSearch"

import {useState, useContext} from "react";

export default function SearchBox() {

    const flights = useContext(FlightContext)


    const filterDataHandler = (enteredSearchData) => {
        {console.log(enteredSearchData)}
        const selectFlight = flights.filter(item =>
            (item.from.toLowerCase().includes(enteredSearchData.fromCity.toLowerCase())
                && item.to.toLowerCase().includes(enteredSearchData.toCity.toLowerCase())))
    }

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <Container sx={{direction:'rtl', height:'265px',borderRadius:'8px',
            boxShadow:'0 2px 1px -1px rgba(0, 0, 0, .08)' ,border: 'solid 1px rgba(0, 0, 0, .1)'}}>

            <TabContext sx={{direction:'rtl'}} value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' ,direction:'rtl'}}>
                    <TabList onChange={handleChange} textColor="secondary" indicatorColor="secondary" centered>
                        <Tab icon={<DomesticPlanes/>} label="پرواز داخلی" value="1" />
                        <Tab icon={<ForeignPlanes/>} label="پرواز خارجی" value="2" />
                        <Tab icon={<Train/>} label="قطار" value="3" />
                        <Tab icon={<Bus/>} label="اتوبوس" value="4" />
                        <Tab icon={<Tour/>} label="تور" value="5" />
                        <Tab icon={<Hotel/>} label="هتل" value="6" />
                        <Tab icon={<Residence/>} label="ویلا و اقامتگاه" value="7" />
                    </TabList>
                </Box>
                <TabPanel value="1"><DomesticFlightTabPanel onFilterData={filterDataHandler}/></TabPanel>
                <TabPanel value="2"><ForeignFlightTabPanel/></TabPanel>
                <TabPanel value="3"><TrainTabPanel/></TabPanel>
                <TabPanel value="4"><BusTabPanel/></TabPanel>
                <TabPanel value="5"><TourPanel/></TabPanel>
                <TabPanel value="6"><HotelPanel/></TabPanel>
                <TabPanel value="7"><ResidencePanel/></TabPanel>
            </TabContext>
        </Container>

    )
}

