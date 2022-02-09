import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import Footer from '../Components/Footer/Footer'
import {ThemeProvider} from "@emotion/react";
import NavBar from "../Components/NavBar/NavBar";
import RecentSearch from "../Components/RecentSearch/RecentSearch";
import YourQuestions from "../Components/YourQuestions/YourQuestions";
import Advertise from './../Components/Advertise/Advertise'
import DateSwiper from "../Components/dateSwiper2/DateSwiper";

export default function Home() {
    return (
            // <Box>
                
            //     <NavBar/>
            //     <Container>
            //         <RecentSearch/>
            //         <Advertise/>
            //         <YourQuestions/>
            //     </Container>


            //         <Footer/>
               
            // </Box>
            <Box><DateSwiper/></Box>


    )
}
