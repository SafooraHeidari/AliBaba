import {Box, Container} from "@mui/material";
import Footer from '../../Components/Footer/Footer'
import NavBar from "../../Components/NavBar/NavBar";
import SearchCardContainer from "./../../Components/SearchCard/SearchCardContainer"


export default function flights() {
    return (
        <Box>
            <NavBar/>
            <SearchCardContainer/>
            <Footer/>
        </Box>
    )
};