import {AppBar, Toolbar, Container, Box} from "@mui/material";
import NavBarLeftBox from './NavBarLeftBox/NavBarLeftBox';
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import Logo from "./Logo/Logo";
import theme from '../../styles/theme'

const NavBar = () => {
  return (
      <Box>
        <AppBar sx={{background:theme.palette.white.main,fontFamily:"Alibaba"}}>
          <Container>
            <Toolbar>
              <NavBarLeftBox />
              <NavBarMenu />
              <Logo/>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

  );
};

export default NavBar;
