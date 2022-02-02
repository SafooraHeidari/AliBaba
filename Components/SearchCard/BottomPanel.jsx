import TabContext from "@mui/lab/TabContext";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import AccordionDetails from "@mui/material/AccordionDetails";
import TabPanel from "@mui/lab/TabPanel";
import {useState} from "react";
import {Box, Button, Typography} from "@mui/material";

export default function BottomPanel() {

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            {/*<TabContext value={value}>*/}
            {/*    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>*/}
            {/*        <TabList onChange={handleChange} aria-label="lab API tabs example">*/}
            {/*            <Tab sx={{fontFamily: 'Alibaba'}} label="اطلاعات پرواز" value="1" />*/}
            {/*            <Tab sx={{fontFamily: 'Alibaba'}} label="قوانین استرداد" value="2" />*/}
            {/*        </TabList>*/}
            {/*    </Box>*/}
            {/*    <TabPanel value="1">Item One</TabPanel>*/}
            {/*    <TabPanel value="2">Item Two</TabPanel>*/}
            {/*</TabContext>*/}
        </Box>


    )
}