import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import Footer from '../Components/Footer/Footer'
import {ThemeProvider} from "@emotion/react";
import NavBar from "../Components/NavBar/NavBar";
import RecentSearch from "../Components/RecentSearch/RecentSearch";
import YourQuestions from "../Components/YourQuestions/YourQuestions";
import Advertise from './../Components/Advertise/Advertise'
import SearchBox from './../Components/SearchBox/SearchBox';
import {useState, createContext} from "react";
import {flights as data} from "./../data/data"
// import Plane_Ticket from "../Components/PlaneTicket/Plane_Ticket";

export const FlightContext = createContext([]);


export default function Home() {

    const [flights, setFlights] = useState(data);
    return (
        <Box>
            <NavBar/>

            <SearchBox/>
            <Container>
                <ThemeProvider theme={theme}>


                    <FlightContext.Provider value={flights}>


                        <RecentSearch/>
                        <Advertise/>
                        <YourQuestions/>
                    </FlightContext.Provider>
                    {/* <Plane_Ticket/> */}

                </ThemeProvider>
            </Container>


            <Footer/>
        </Box>


    )
}
