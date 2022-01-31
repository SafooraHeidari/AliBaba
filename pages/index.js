import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import Footer from '../Components/Footer/Footer'
import {ThemeProvider} from "@emotion/react";
import NavBar from "../Components/NavBar/NavBar";
import RecentSearch from "../Components/RecentSearch/RecentSearch";
import YourQuestions from "../Components/YourQuestions/YourQuestions";
import Plane_Ticket from "../Components/Plane_Ticket/Plane_Ticket";

export default function Home() {
    return (

            <Box>
                <NavBar/>
                <Container>
                    <RecentSearch/>
                    <YourQuestions/>
                    <Plane_Ticket />
                </Container>


                    <Footer/>
            </Box>


    )
}
