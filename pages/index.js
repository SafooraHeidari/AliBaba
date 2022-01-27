
import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import {ThemeProvider} from "@emotion/react";
import SearchBox from "../Components/SearchBox/SearchBox";

export default function Home() {
    return (
        <Box>
            <ThemeProvider theme={theme}>
            <Box>
                // NavBar
            </Box>

            <Container sx={{ backgroundColor: theme.palette.success.three }}>
             //body
                <SearchBox/>
            </Container>

            <Box>
                // pre-footer
                // footer
            </Box>
            </ThemeProvider>
        </Box>
    )
}
