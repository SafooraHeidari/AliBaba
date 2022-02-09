import {Box, Container} from "@mui/material";
import Footer from '../../Components/Footer/Footer'
import NavBar from "../../Components/NavBar/NavBar";
import SearchCardContainer from "./../../Components/SearchCard/SearchCardContainer"
import RightSidebar from './../../Components/rightSidebar2/RightSidebar' 
import DateSwiper from './../../Components/dateSwiper2/DateSwiper'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function flights() {
    return (
        <Box>
            <NavBar/>
            <Container sx={{marginY:'3rem'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                    <DateSwiper/><SearchCardContainer/>
                    </Grid>
                    <Grid item xs={3}>
                    <RightSidebar/>
                    </Grid>
                </Grid>
            </Box>
                
            </Container>
            <Footer/>
        </Box>
    )
};