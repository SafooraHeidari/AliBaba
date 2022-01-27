import { Box, Container } from "@mui/material";
import theme from "../styles/theme";
import {ThemeProvider} from "@emotion/react";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>

          <NavBar />
          <RecentSearch/>

        <Box>// pre-footer // footer</Box>
      </Box>
    </ThemeProvider>
  );
}
