
import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import {ThemeProvider} from "@emotion/react";

export default function Home() {
    return (
        <Box>
            <Box>
                // NavBar
            </Box>
            <ThemeProvider theme={theme}>
            <Container sx={{ bgcolor: 'bg.main' }}>
             //body
            </Container>
            </ThemeProvider>
            <Box>
                // pre-footer
                // footer
            </Box>
        </Box>
    )
}
