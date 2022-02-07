import {Box, Container} from "@mui/material";
import Footer from '../../Components/Footer/Footer'
import NavBar from "../../Components/NavBar/NavBar";
import SearchCard from "../../Components/SearchCard/SearchCard";


export default function flights() {
    return (
        <Box>
            <NavBar/>
            <SearchCard/>
            <Footer/>
        </Box>
    )
};