import {useState} from "react";
import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from "../../styles/theme";
import {Accordion, AccordionDetails, Typography} from "@mui/material";
import TypeSidebar from "./ChekboxSidebar";
import TimeSlider from "./TimeSlidebar";
const AccordionData=[
    {
        id:1,
        title:'ساعت حرکت',
        childe:<TimeSlider/>

    },
    {
        id:2,
        title:'نوع بلیط',
        childe:<TypeSidebar first={'چارتر'} second={'سیستمی'}/>
    },
    {
        id:3,
        title:'کلاس پروازی',
        childe:<TypeSidebar first={'اکونومی'} second={'بیزینس'}/>
    },
    {
        id:4,
        title:'شرکت‌های هواپیمایی',
        childe:<TypeSidebar first={'چارتر'} second={'سیستمی'}/>
    },
    {
        id:5,
        title:'موارد دیگر',
        childe:<TypeSidebar first={'نمایش بلیط‌های تکراری'} second={'نمایش بلیط‌های موجود'}/>
    },
]
const styles = {
    myAccordion :{
        margin:'0 !important',
        direction: 'rtl',
        border:'1px solid rgba(0, 0, 0, .1)'
    },
}
export default function RightSidebar() {
    const [expanded, setExpanded] = React.useState('panel1');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    return(
        <>
        <Accordion sx={{width:'30%'}} style={styles.myAccordion}>
                    <AccordionSummary
                        id="panel1bh-header">
                        <Typography sx={{fontFamily:'AliBaba',color: theme.palette.gray.five,flexShrink: 0,paddingY:'.8rem',fontSize:'.875rem',fontWeight: '500'}}>نتایج:13</Typography>
                    </AccordionSummary>
                </Accordion>
        {
            AccordionData.map( data => (
                <Accordion sx={{width:'30%'}} style={styles.myAccordion} expanded={expanded === `panel${data.id}`} onChange={handleChange(`panel${data.id}`)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header">
                        <Typography sx={{fontFamily:'AliBaba',color: theme.palette.gray.five,flexShrink: 0,paddingY:'.8rem',fontSize:'.875rem',fontWeight: '500'}}>{data.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{fontFamily:'AliBaba',color:theme.palette.gray.four,fontSize:'1rem',lineHeight:'36px',marginRight:'3.2rem',marginRight:'10px',marginLeft:'20px'}}>{data.childe}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))
        }

        
        </>
    )
}