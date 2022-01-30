import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import Footer from '../Components/Footer/Footer'
import {ThemeProvider} from "@emotion/react";
import NavBar from "../Components/NavBar/NavBar";
import RecentSearch from "../Components/RecentSearch/RecentSearch";
import YourQuestions from "../Components/YourQuestions/YourQuestions";
import Advertise from './../Components/Advertise/Advertise'

export default function Home() {
    return (
            <Box>
                <ThemeProvider theme={theme}>
                <NavBar/>
                <Container>
                    <RecentSearch/>
                    <Advertise/>
                    <YourQuestions/>
                </Container>


                    <Footer/>
                </ThemeProvider>
            </Box>


    )
}
