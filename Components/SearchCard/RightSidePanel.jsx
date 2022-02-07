import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Route from "../../styles/assest/Icons/Route";
import BottomPanel from "./BottomPanel";
import {styled, ThemeProvider} from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import theme from '../../styles/theme'


const MyChip = styled(Chip)(({ theme }) => ({
    fontFamily: 'Alibaba',
    fontSize: '12px',
    fontWeight: '400',
    margin: 5,
    color: theme.palette.gray.six,//'#2B2F33',
    backgroundColor: theme.palette.gray.main
}));


export default function RightSidePanel() {
    return(
        <ThemeProvider theme={theme}>
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin:'15px'}}>
                <Avatar
                    sx={{width: 48, height: 48, border: '1px solid rgba(0, 0, 0, .1)', padding: 1, marginY: 1}}
                    src="https://cdn.alibaba.ir/static/img/airlines/Domestic/NV.png"/>
                <Typography sx={{fontFamily: 'Alibaba', fontSize: '12px', fontWeight: '500'}}>کارون</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', flexGrow: '1', alignItems: 'start'}}>
                <Stack direction="row">
                    <MyChip size="small" label="سیستمی"/>
                    <MyChip size="small" label="اکونومی"/>
                    <MyChip size="small" label="fokker 100"/>
                </Stack>
                <Stack direction="row">
                    <Typography
                        sx={{fontFamily: 'Alibaba', fontSize: '16px', fontWeight: '400', margin: '5px'}}> اهواز</Typography>
                    <Typography
                        sx={{fontFamily: 'Alibaba', fontSize: '20px', fontWeight: '700'}}>۰۶:۱۰</Typography>
                    <Route/>
                    <Typography
                        sx={{fontFamily: 'Alibaba', fontSize: '16px', fontWeight: '400', margin: '5px'}}>تهران</Typography>
                    <Typography
                        sx={{fontFamily: 'Alibaba', fontSize: '20px', fontWeight: '700'}}>۰۷:۱۵</Typography>
                </Stack>
            </Box>

        </Box>
        </ThemeProvider>
    )
}