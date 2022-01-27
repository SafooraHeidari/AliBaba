import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import {ThemeProvider} from "@emotion/react";
import RecentSearch from "../Components/RecentSearch/RecentSearch";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
        <Box>
            <Box>
                // NavBar
            </Box>

                <Container sx={{backgroundColor: theme.palette.bg.main}}>
                    //body
                    <RecentSearch/>
                </Container>
            <Box>
                // pre-footer
                // footer
            </Box>
        </Box>
        </ThemeProvider>

    )
}
