import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import Footer from '../Components/Footer/Footer'
import {ThemeProvider} from "@emotion/react";
<<<<<<< HEAD
import NavBar from "../Components/NavBar/NavBar";
import RecentSearch from "../Components/RecentSearch/RecentSearch";
import YourQuestions from "../Components/YourQuestions/YourQuestions";

export default function Home() {
    return (

=======
import Advertise from "../Components/Advertise/Advertise";

export default function Home() {
    return (
        <Box>
            <Box>
                // NavBar
            </Box>
            <ThemeProvider theme={theme}>
            <Container sx={{ backgroundColor: theme.palette.success.three }}>
             //body
             <Advertise/>
            </Container>
            </ThemeProvider>
>>>>>>> advertise
            <Box>
                <NavBar/>
                <Container>
                    <RecentSearch/>
                    <YourQuestions/>
                </Container>


                    <Footer/>
            </Box>


    )
}
