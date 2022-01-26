import { AppBar, Toolbar, Container } from "@mui/material";
import NavBarLeftBox from './NavBarLeftBox/NavBarLeftBox';
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import Logo from "./Logo/Logo";

const NavBar = () => {
  return (
    <AppBar>
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
