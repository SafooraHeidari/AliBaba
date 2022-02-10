import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import Footer from '../Components/Footer/Footer'
import {ThemeProvider} from "@emotion/react";
import NavBar from "../Components/NavBar/NavBar";
import RecentSearch from "../Components/RecentSearch/RecentSearch";
import YourQuestions from "../Components/YourQuestions/YourQuestions";
import PlaneTicket from "../Components/PlaneTicket/PlaneTicket";
import StepperPay from "../Components/StepperPay/StepperPay";

export default function Home() {
    return (

            <Box>
                <NavBar/>
                <Container>
                    <RecentSearch/>
                    <YourQuestions/>
                    <PlaneTicket />
                </Container>
                <StepperPay />

                    <Footer/>
            </Box>


    )
}
