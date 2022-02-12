import { Box, Container, Button, Typography } from "@mui/material";
import theme from "../styles/theme";
import Footer from "../Components/Footer/Footer";
import { ThemeProvider } from "@emotion/react";
import NavBar from "../Components/NavBar/NavBar";
import Pricing from '../Components/pricing/Pricing'
import TicketWarning from "../Components/ticketWarning/TicketWarning";
import Notify from "../Components/Notify/Notify";
const thirdpage = () => {
  return (
    <Box>
      <NavBar />

      <Container>
        <ThemeProvider theme={theme}>
          <Pricing/>
          <TicketWarning/>
          <Notify/>
        </ThemeProvider>
      </Container>
      <Footer />
    </Box>
  );
};

export default thirdpage;
