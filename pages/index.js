import { Box, Container } from "@mui/material";
import theme from "../styles/theme";
import { ThemeProvider } from "@emotion/react";
import NavBar from "../Components/NavBar/NavBar";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box>
          <NavBar />
        </Box>
        <Container sx={{ backgroundColor: theme.palette.success.three }}>
          //body
        </Container>

        <Box>// pre-footer // footer</Box>
      </Box>
    </ThemeProvider>
  );
}
