
import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import Footer from '../Components/Footer/Footer'
import {ThemeProvider} from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import NavBar from "../Components/NavBar/NavBar";
import RecentSearch from "../Components/RecentSearch/RecentSearch";
import YourQuestions from "../Components/YourQuestions/YourQuestions";

export default function Home() {
    return (
        <Box>
            <ThemeProvider theme={theme}>
            <Box>
                <NavBar />
            </Box>

            <Container sx={{ backgroundColor: theme.palette.success.three }}>
                <RecentSearch/>
                <YourQuestions/>
            </Container>

            <Box>
                // pre-footer
                <Footer/>
            </Box>
            </ThemeProvider>
        </Box>
    )
}
