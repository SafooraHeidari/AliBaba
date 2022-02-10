// import {Box, Container} from "@mui/material";
// import theme from "../styles/theme";
// import Footer from '../Components/Footer/Footer'
// import {ThemeProvider} from "@emotion/react";
// import NavBar from "../Components/NavBar/NavBar";
// import RecentSearch from "../Components/RecentSearch/RecentSearch";
// import YourQuestions from "../Components/YourQuestions/YourQuestions";
// import Advertise from './../Components/Advertise/Advertise'
import Sort from "../Components/sort/Sort";

import { Box } from "@mui/material";
import SearchCardContainer from "./../Components/SearchCard/SearchCardContainer";

export default function Home() {
  return (
    <Box>
      <Sort />

      <SearchCardContainer />

      {/*<NavBar/>*/}
      {/*<Container>*/}
      {/*    <RecentSearch/>*/}
      {/*    <Advertise/>*/}
      {/*    <YourQuestions/>*/}
      {/*</Container>*/}

      {/*    <Footer/>*/}
    </Box>
  );
}
