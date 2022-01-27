import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import {ThemeProvider} from "@emotion/react";
import YourQuestions from "../Components/YourQuestions/YourQuestions";

export default function Home() {
    return (
        <Box>
            <ThemeProvider theme={theme}>
                <Box>
                    // NavBar
                </Box>

                <Container sx={{backgroundColor: theme.palette.success.three}}>
                    //body
                    <YourQuestions/>
                </Container>

                <Box>
                    // pre-footer
                    // footer
                </Box>
            </ThemeProvider>
        </Box>
    )
}
