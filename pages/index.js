import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import Footer from '../Components/Footer/Footer'
import {ThemeProvider} from "@emotion/react";
import NavBar from "../Components/NavBar/NavBar";
import RecentSearch from "../Components/RecentSearch/RecentSearch";
import YourQuestions from "../Components/YourQuestions/YourQuestions";
import Advertise from './../Components/Advertise/Advertise'
import SearchBox from './../Components/SearchBox/SearchBox'


export default function Home() {
    return (
            <Box>
                <NavBar/>
                <Container>
                <ThemeProvider theme={theme}>
                    <SearchBox/>
                    <RecentSearch/>
                    <Advertise/>
                    <YourQuestions/>
                </ThemeProvider>
                </Container>
                    <Footer/>
            </Box>


    )
}
