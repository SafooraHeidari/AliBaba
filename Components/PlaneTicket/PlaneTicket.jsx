import { Typography, Box, Grid } from "@mui/material";
import { fontSize } from "@mui/system";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function PlaneTicket() {
  return (
    <>
      <Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Alibaba",
              fontSize: "1.2rem",
              direction: "rtl",
              fontWeight: "600",
            }}
          >
            بلیط هواپیما
          </Typography>
        </Box>
        <Box>
          <Typography
            varient
            sx={{
              fontFamily: "Alibaba",
              direction: "rtl",
              fontSize: "1rem",
              fontWeight: "400",
            }}
          >
            علی‌بابا بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار
            و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در این
            مدت توانسته رضایت درصد قابل توجهی از کاربران را به دست بیاورد. در
            ابتدا، فروش بلیط پرواز داخلی در دستور کار علی‌بابا قرار داشت؛ اما به
            مرور امکان خرید سایر محصولات گردشگری نیز به علی‌بابا اضافه شد.
          </Typography>
          <Box>
            <Typography
            varient
            sx={{
              fontFamily: "Alibaba",
              fontSize: "1.2rem",
              direction: "rtl",
              fontWeight: "600",
            }}
          >
            مزایای خرید بلیط هواپیما از علی‌بابا
          </Typography>
          </Box>
          
        </Box>
      </Box>
    </>
  );
}
