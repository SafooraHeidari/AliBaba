import Grid from '@mui/material/Grid';
import Divider from "@mui/material/Divider";

import RightSidePanel from "./RightSidePanel";
import LeftSidePanel from "./LeftSidePanel";
import BottomPanel from "./BottomPanel";

export default function SearchCard() {
    return (
        <Grid container
              sx={{width: '50%', direction: 'rtl', border: '1px solid gray', borderRadius: '5px'}}>
            <Grid item xs={12} sm={6} md={9} sx={{padding: 2}}>
                <RightSidePanel/>
            </Grid>
            <Divider orientation="vertical" sx={{display: {xs: 'none', sm: 'flex', md: 'flex'}}} flexItem/>
            <Grid item xs={12} sm={6} md={3} sx={{padding: 2}}>
                <LeftSidePanel/>
            </Grid>
            <BottomPanel/>
        </Grid>
    )
}