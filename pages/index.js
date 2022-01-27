import { Box, Container } from "@mui/material";
import theme from "../styles/theme";
import { ThemeProvider } from "@emotion/react";
import NavBar from "../Components/NavBar/NavBar";
import RecentSearch from "../Components/RecentSearch/RecentSearch";
import YourQuestions from "../Components/YourQuestions/YourQuestions";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>

          <NavBar />
          <RecentSearch/>
          <YourQuestions/>

        <Box>// pre-footer // footer</Box>
      </Box>
    </ThemeProvider>
  );
}
