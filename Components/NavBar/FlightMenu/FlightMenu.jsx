import { Button, Menu, MenuItem, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreOptionsMenu from "../MoreOptionsMenu/MoreOptionsMenu";
import React,{useState} from "react";


const FlightMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        color="inherit"
        id="flight-button"
        aria-controls={open ? "flight-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<KeyboardArrowDownIcon />}
      >
        پرواز
      </Button>
      <Menu
        id="flight-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "flight-button",
        }}
      >
        <MenuItem onClick={handleClose}>پرواز داخلی</MenuItem>
        <MenuItem onClick={handleClose}>پرواز خارجی</MenuItem>
      </Menu>
    </>
  );
};

export default FlightMenu;
