
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
            <Container sx={{ backgroundColor: theme.palette.success.three }}>
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
