
import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import {ThemeProvider} from "@emotion/react";
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
            <Box>
                // pre-footer
                // footer
            </Box>
        </Box>
    )
}
