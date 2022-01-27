import {useState} from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import styled from "@emotion/styled";
import theme from "../../styles/theme";

const MyAccordion = styled('Accordion')({
    borderRadius:'5px',
    direction:'rtl',
    marginBottom: '1rem'
})
const QuestionMark = styled('QuestionMarkOutlinedIcon')({
    margin:'.8rem',
    width:'30px',
    height:'30px',
    borderRadius:'50%',
    backgroundColor:theme.palette.info.main,
    color:theme.palette.info.four
})
const TypographyTitle = styled('Typography')({
    color:theme.palette.gray.five,
    flexShrink: 0,
    paddingY:'.8rem',
    fontSize:'1.25rem',
    fontWeight: '700'
})
const TypographyDescription = styled('Typography')({
    color:theme.palette.gray.four,
    fontSize:'1rem',
    lineHeight:'36px',
    marginRight:'3.2rem'
})

export default function YourQuestionsItem({title, description}){
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return(
        <MyAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <QuestionMark/>
                <TypographyTitle>{title}</TypographyTitle>
            </AccordionSummary>
            <AccordionDetails>
                <TypographyDescription>{description}</TypographyDescription>
            </AccordionDetails>
        </MyAccordion>
    )

}