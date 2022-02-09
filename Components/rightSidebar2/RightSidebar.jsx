import {useState} from "react";

import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import TimeRightsidebar2 from "./TimeRightsidebar2";
import theme from "../../styles/theme";
import {Accordion, AccordionDetails, Typography} from "@mui/material";
import TimeRightsidebar from "./TimeRightsidebar";
export default function YourQuestionsItem(){
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return(
        <Accordion sx={{borderRadius: '5px',direction: 'rtl'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography sx={{fontFamily:'AliBaba',color: theme.palette.gray.five,flexShrink: 0,paddingY:'.8rem',fontSize:'.875rem',fontWeight: '500'}}>ساعت حرکت</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{fontFamily:'AliBaba',color:theme.palette.gray.four,fontSize:'1rem',lineHeight:'36px',marginRight:'3.2rem'}}><TimeRightsidebar/></Typography>
            </AccordionDetails>
        </Accordion>
    )
}