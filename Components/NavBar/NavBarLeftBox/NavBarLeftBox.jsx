import { Box, Button } from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const NavBarLeftBox = () => {
  return (
  <Box sx={{ flexGrow: 1 }}>
    <Button color="inherit" endIcon={<PersonOutlineIcon />}>
      {"ورود یا ثبت نام"}
    </Button>
    <Button color="inherit" endIcon={<ReceiptLongIcon />}>
      {"پیگیری خرید"}
    </Button>
  </Box>
    )
};

export default NavBarLeftBox;
