import TabContext from "@mui/lab/TabContext";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import AccordionDetails from "@mui/material/AccordionDetails";
import TabPanel from "@mui/lab/TabPanel";
import {useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import RightSidePanel from "./RightSidePanel";

export default function BottomPanel(){

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [expanded, setExpanded] = useState('0');
    const handleChangeAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return(
        <Box sx={{width:'100%'}}>
            <TabContext value={value} >
                <Accordion expanded={expanded === value} onChange={handleChangeAccordion(value)}>
                    <AccordionSummary sx={{width:'30%', display:'flex',flexDirection:'column'}} aria-controls="panel1bh-content" id="panel1bh-header">

                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Box>
                                <Tab sx={{fontFamily: 'Alibaba'}} label="اطلاعات پرواز" value="1"/>
                                <Tab sx={{fontFamily: 'Alibaba'}} label="قوانین استرداد" value="2"/>
                            </Box>
                        </TabList>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TabPanel value="1">Item One</TabPanel>
                        <TabPanel value="2">salam</TabPanel>
                    </AccordionDetails>
                </Accordion>
            </TabContext>
        </Box>
    )
}