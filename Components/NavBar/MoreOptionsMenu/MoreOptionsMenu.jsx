import { Button, Menu, MenuItem, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React,{useState} from "react";


const MoreOptionsMenu = () => {
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
      id="moreOptions-button"
      aria-controls={open ? "moreOptions-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
      startIcon={<KeyboardArrowDownIcon />}
    >
      بیشتر
    </Button>
    <Menu
      id="moreOptions-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "moreOptions-button",
      }}
    >
      <MenuItem onClick={handleClose}>علی بابا پلاس</MenuItem>
      <MenuItem onClick={handleClose}>مجله علی بابا</MenuItem>
    </Menu>
  </>
  )
};

export default MoreOptionsMenu;
