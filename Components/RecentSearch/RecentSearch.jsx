import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {ArrowLeft} from "react-bootstrap-icons";
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import theme from "../../styles/theme";

function RecentSearch(){
    return (
        <div>
            <Card sx={{ padding: 1, width: 160, height:70.8,display:'flex',flexDirection:'column'}}>
                <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Typography sx={{fontFamily:'Alibaba',marginX: 1,fontSize: 14}}>تهران</Typography>
                    <ArrowLeft/>
                    <Typography sx={{fontFamily:'Alibaba',marginX: 1,fontSize: 14}}>شیراز</Typography>
                </Box>
                <Box sx={{marginTop: 1,display:'flex',flexDirection:'row',alignItems:'center',color:theme.palette.gray.four}}>
                    <EventNoteOutlinedIcon sx={{marginRight:1}}/>
                    <Typography sx={{fontFamily:'Alibaba',marginX: 1,fontSize: 14}}>20 بهمن</Typography>
                </Box>
            </Card>
        </div>
    )
}
export default RecentSearch