
import {Box, Container} from "@mui/material";
import theme from "../styles/theme";
import {ThemeProvider} from "@emotion/react";
import SearchBox from "../Components/SearchBox/SearchBox";
import SearchCard from "../Components/SearchCard/SearchCard";
import BottomPanel from "../Components/SearchCard/BottomPanel";
import RightSidePanel from "../Components/SearchCard/RightSidePanel";

export default function Home() {
    return (
        <Box>
            <Box>
                // NavBar
            </Box>

            {/*<Container sx={{ backgroundColor: theme.palette.success.three }}>*/}
             //body
                <BottomPanel/>
            {/*</Container>*/}

            <Box>
                // pre-footer
                // footer
            </Box>
        </Box>
    )
}
