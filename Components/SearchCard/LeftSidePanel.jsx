import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import theme from "../../styles/theme";

export default function LeftSidePanel(){
    return(
        <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'row', sm: 'column', md: 'column'},
            alignItems: 'center'
        }}>
            <Box sx={{display:'flex', flexDirection:'row',alignItems: 'center'}}>
                <Typography sx={{fontFamily: 'AliBaba', color: theme.palette.secondary.four, fontSize: '20px', fontWeight:'700'}}>۸,۸۱۱,۰۰۰</Typography>
                <Typography sx={{fontFamily: 'AliBaba', color: theme.palette.gray.three, fontSize: '12px', fontWeight:'400', marginX:'5px'}}> ریال</Typography>
            </Box>

            <Button sx={{fontFamily: 'AliBaba', margin: 2, fontSize: '14px', fontWeight:'500', minWidth:'144px'}} variant="contained">انتخاب بلیط</Button>
            <Typography sx={{fontFamily: 'AliBaba', color: theme.palette.danger.four, fontSize: '12px', fontWeight:'400'}}>۳ صندلی باقیمانده</Typography>
        </Box>
    )
}