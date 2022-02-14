import React from "react";
import {
  Box,
  Container,
  Button,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const Options = () => {
  return (
    <Box sx={{ dispaly: "flex", flexDirection: "row", alignItems: "center",mb:1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button color="secondary">
            انتخاب مسافران سابق
            <PersonOutlineOutlinedIcon />
          </Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  color="secondary"
                  value="male"
                  control={<Radio />}
                  label="پاسپورت"
                />
                <FormControlLabel
                  color="secondary"
                  value="female"
                  control={<Radio />}
                  label="کارت ملی"
                />
              </RadioGroup>
            </FormControl>
            <Typography
              component="span"
              sx={{ pr: 1, pl: 1, border: 1,borderColor:"grey.500", borderRadius: "1rem" }}
            >
              بزرگسال
            </Typography>
          </Box>
        </Box>
      </Box>
  )
}

export default Options