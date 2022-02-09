import { Box, Container } from "@mui/material";
import theme from "../styles/theme";
import {ThemeProvider} from "@emotion/react";
import YourQuestions from "./../Components/YourQuestions/YourQuestions"

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>

          {/*<NavBar />*/}
          <YourQuestions/>

        <Box>// pre-footer // footer</Box>
      </Box>
    </ThemeProvider>
  );
}
