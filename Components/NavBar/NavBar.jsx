import { AppBar, Toolbar, Container } from "@mui/material";
import NavBarLeftBox from './NavBarLeftBox/NavBarLeftBox';
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import Logo from "./Logo/Logo";
import theme from '../../styles/theme'

const NavBar = () => {
  return (
    <AppBar sx={{background:theme.palette.white.main,fontFamily:"Alibaba"}}>
    <Container>
      <Toolbar>
        <NavBarLeftBox />
        <NavBarMenu />
        <Logo/>
      </Toolbar>
    </Container>
  </AppBar>
  );
};

export default NavBar;
