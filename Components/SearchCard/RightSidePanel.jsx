import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Route from "../../styles/assest/Icons/Route";
import BottomPanel from "./BottomPanel";

export default function RightSidePanel() {
    return(
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft:'10px'}}>
                <Avatar
                    sx={{width: 48, height: 48, border: '1px solid rgba(0, 0, 0, .1)', padding: 1, marginY: 1}}
                    src="https://cdn.alibaba.ir/static/img/airlines/Domestic/NV.png"/>
                <Typography sx={{fontFamily: 'Alibaba', fontSize: '12px', fontWeight: '500'}}>کارون</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', flexGrow: '1', alignItems: 'start'}}>
                <Stack direction="row">
                    <Chip sx={{
                        fontFamily: 'Alibaba',
                        fontSize: '12px',
                        fontWeight: '400',
                        marginX: '5px',
                        marginY: '10px',
                        color: '#2B2F33',
                        backgroundColor: '#F8FAFB'
                    }} size="small" label="سیستمی"/>
                    <Chip sx={{
                        fontFamily: 'Alibaba',
                        fontSize: '12px',
                        fontWeight: '400',
                        marginX: '5px',
                        marginY: '10px',
                        color: '#2B2F33',
                        backgroundColor: '#F8FAFB'
                    }} size="small" label="اکونومی"/>
                    <Chip sx={{
                        fontFamily: 'Alibaba',
                        fontSize: '12px',
                        fontWeight: '400',
                        marginX: '5px',
                        marginY: '10px',
                        color: '#2B2F33',
                        backgroundColor: '#F8FAFB'
                    }} size="small" label="fokker 100"/>
                </Stack>
                <Stack direction="row">
                    <Typography
                        sx={{fontFamily: 'Alibaba', fontSize: '16px', fontWeight: '400', margin: '5px'}}> اهواز</Typography>
                    <Typography
                        sx={{fontFamily: 'Alibaba', fontSize: '20px', fontWeight: '700'}}>06:10</Typography>
                    <Route/>
                    <Typography
                        sx={{fontFamily: 'Alibaba', fontSize: '16px', fontWeight: '400', margin: '5px'}}>تهران</Typography>
                    <Typography
                        sx={{fontFamily: 'Alibaba', fontSize: '20px', fontWeight: '700'}}>07:15</Typography>
                </Stack>
            </Box>

        </Box>
    )
}