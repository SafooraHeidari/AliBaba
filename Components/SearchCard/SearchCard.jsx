
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Box, Button, Chip, Divider, Typography} from "@mui/material";

export default function SearchCard(){
    return(
        <Grid container sx={{width: '100%',direction:'rtl',border:'1px solid gray', borderRadius:'5px'}}>
            <Grid item xs={12} sm={6} md={9}>
                <Box sx={{display:'flex',flexDirection:'row'}}>
                    <Box sx={{display:'flex',flexDirection:'column'}}>
                        <img sx={{width:'20px',height:'20px',borderRadius:'50%',}} src="https://cdn.alibaba.ir/static/img/airlines/Domestic/NV.png"/>
                        <Typography sx={{fontFamily:'AliBaba'}}>کارون</Typography>
                        <Button sx={{fontFamily:'AliBaba'}}>اطلاعات پرواز</Button>
                    </Box>
                    <Box sx={{display:'flex',flexDirection:'column',flexGrow:'1'}}>
                        <Box>
                            <Chip sx={{fontFamily:'AliBaba'}} color="primary" label="سیستمی" />
                            <Chip sx={{fontFamily:'AliBaba'}} color="primary" label="اکونومی" />
                            <Chip sx={{fontFamily:'AliBaba'}} color="primary" label="fokker 100<" />

                        </Box>
                        <Typography sx={{fontFamily:'AliBaba'}}>اهواز تهران</Typography>
                        <Button sx={{fontFamily:'AliBaba'}}>قوانین استرداد</Button>
                    </Box>
                </Box>
            </Grid>
            <Divider variant="vertical" />
            <Grid item xs={12} sm={6} md={3}>
                <Box sx={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                    <Typography sx={{fontFamily:'AliBaba'}}>8811000 ریال</Typography>
                    <Button sx={{fontFamily:'AliBaba'}}>خرید بلیط</Button>
                    <Typography sx={{fontFamily:'AliBaba'}}>3 صندلی باقیمانده</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}