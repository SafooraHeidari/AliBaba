import { Typography, Box, Grid, Button } from "@mui/material";
import { fontSize } from "@mui/system";
import { styled } from "@mui/material/styles";
import theme from "../../styles/theme";

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
        <Grid
        justify="space-between"> 
          <Typography
            variant="h1"
            font-bold
            sx={{
              fontFamily: "Alibaba",
              fontSize: "1.25rem",
              direction: "rtl",
              fontWeight: "900",
              textAlign:"right",
            }}
          >
            بلیط هواپیما
          </Typography>
          <img src="https://cdn.alibaba.ir/h/desktop/assets/images/baggage/baggage@3x-bda919ec.webp" width={'38%'} sx={{
            float:"left"
          }}/>,
        </Grid>
        <Box>
          <Typography
            sx={{
              fontFamily: "Alibaba",
              direction: "rtl",
              fontSize: "0.875rem",
              fontWeight: "400",
              marginTop: "2rem",
              marginBottom: "2rem",
              lineHeight: "2.3",
              color: theme.palette.gray.five,
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
              variant="h3"
              sx={{
                fontFamily: "Alibaba",
                fontSize: "1rem",
                direction: "rtl",
                fontWeight: "700",
              }}
            >
              مزایای خرید بلیط هواپیما از علی‌بابا
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Alibaba",
                direction: "rtl",
                fontSize: "0.875rem",
                fontWeight: "400",
                marginTop: "2rem",
                marginBottom: "2rem",
                lineHeight: "2.3",
                color: theme.palette.gray.five,
              }}
            >
              علی‌بابا بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ،
              قطار و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در
              این مدت توانسته رضایت درصد قابل توجهی از کاربران را به دست بیاورد.
              در ابتدا، فروش بلیط پرواز داخلی در دستور کار علی‌بابا قرار داشت؛
              اما به مرور امکان خرید سایر محصولات گردشگری نیز به علی‌بابا اضافه
              شد.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Alibaba",
                direction: "rtl",
                fontSize: "0.875rem",
                fontWeight: "400",
                marginTop: "2rem",
                marginBottom: "2rem",
                lineHeight: "2.3",
                color: theme.palette.gray.five,
              }}
            >
              یکی از ابزارهای بسیار مفید و کاربردی برای خرید اینترنتی بلیط
              هواپیما، تقویم قیمتی است. با استفاده از تقویم قیمتی شما می‌توانید
              کمترین و بیشترین قیمت بلیط پرواز را در روزهای قبل و بعد از آن
              تاریخ مشاهده کنید. در صورتی که اصرار به خرید بلیط هواپیما در یک
              روز خاص نداشته باشید، این امکان به شما کمک می‌کند تا مبلغ بلیط
              هواپیما برایتان با مبلغ به صرفه تری تمام شود.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Alibaba",
                direction: "rtl",
                fontSize: "0.875rem",
                fontWeight: "400",
                marginTop: "2rem",
                marginBottom: "2rem",
                lineHeight: "2.3",
                color: theme.palette.gray.five,
              }}
            >
              علاوه بر این، با استفاده از فیلترهای کنار صفحه می‌توانید ایرلاین
              مورد نظرتان را انتخاب کنید. ضمنا می‌توانید، بلیط چارتر هواپیما یا
              سیستمی را فعال کنید تا فقط یکی از این دو نوع بلیط را مشاهده کنید.
              بلیط هواپیما خارجی ،کلاس پروازی و زمان پرواز هم از دیگر گزینه‌هایی
              است که با انتخاب آنها، تعداد بلیط ها محدودتر و رزرو بلیط هواپیما
              برای شما آسانتر می‌شود.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Alibaba",
                direction: "rtl",
                fontSize: "0.875rem",
                fontWeight: "400",
                marginTop: "2rem",
                marginBottom: "2rem",
                lineHeight: "2.3",
                color: theme.palette.gray.five,
              }}
            >
              برای پرداخت هزینه می‌توانید از کارت شتاب استفاده کنید. پس از
              پرداخت، خرید اینترنتی بلیط هواپیما با موفقیت انجام میشود و بلیط به
              ایمیل شما ارسال میشود. همچنین در همه این مراحل، پشتیبانی علی‌بابا
              در کنار شماست تا هر زمانی که سوال یا مشکلی داشتید، 24 ساعته
              پاسخگوی شما باشد.
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Alibaba",
                fontSize: "1rem",
                direction: "rtl",
                fontWeight: "700",
              }}
            >
              امکان استرداد بلیط هواپیما
            </Typography>
            <Typography
              sx={{
                fontFamily: "Alibaba",
                direction: "rtl",
                fontSize: "0.875rem",
                fontWeight: "400",
                marginTop: "2rem",
                marginBottom: "2rem",
                lineHeight: "2.3",
                color: theme.palette.gray.five,
              }}
            >
              یکی دیگر از امکانات علی‌بابا استرداد آنلاین بلیط هواپیما (کنسلی
              بلیط) است. در صورتی که پس از رزرو بلیط هواپیما برنامه سفرتان تغییر
              کرده، به راحتی می‌توانید طبق قوانین کنسلی پرواز داخلی، بلیط
              هواپیمای خود را کنسل کنید. پس از استرداد، پول شما در کمترین زمان
              ممکن به حسابتان برگردانده می‌شود. شما برای خرید اینترنتی بلیط
              هواپیما از علی‌بابا می‌توانید از تلفن همراه، رایانه شخصی یا تبلت
              استفاده کنید. علی‌بابا در همه این ابزارها کاربرپسند است و شما
              خریدی آسان را تجربه خواهید کرد. همچنین امکان نصب و استفاده از
              اپلیکیشن علی‌بابا برای گوشی های اندروید و آیفون وجود دارد.
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Alibaba",
                fontSize: "1rem",
                direction: "rtl",
                fontWeight: "700",
              }}
            >
              رزرو بلیط هواپیما از معتبرترین ایرلاین‌ها
            </Typography>
            <Typography
              sx={{
                fontFamily: "Alibaba",
                direction: "rtl",
                fontSize: "0.875rem",
                fontWeight: "400",
                marginTop: "2rem",
                marginBottom: "2rem",
                lineHeight: "2.3",
                color: theme.palette.gray.five,
              }}
            >
              شما برای خرید بلیط هواپیما از بین ایرلاینهای مختلف حق انتخاب دارید
              و می‌توانید از ایرلاینهای ماهان، زاگرس، کیش ایر، قشم ایر، آسمان،
              کاسپین، تابان، وارش یا معراج، بلیط پرواز داخلی خود را خریداری
              کنید. هر یک از این ایرلاین ها ویژگیها و مشخصات خود را دارند. برخی
              امکانات و خدمات رفاهی بیشتر دارند و برخی دیگر بلیط هواپیما را با
              قیمت به صرفه تری ارائه می‌دهند. زمانی که در علی‌بابا لیست بلیط
              تمام این ایرلاین ها را مشاهده می‌کنید، می‌توانید از بین آنها
              انتخاب کنید.
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Alibaba",
                fontSize: "1rem",
                direction: "rtl",
                fontWeight: "700",
              }}
            >
              علی‌بابا: رتبه یک خرید اینترنتی بلیط سفر
            </Typography>
            <Typography sx={{
                fontFamily: "Alibaba",
                direction: "rtl",
                fontSize: "0.85rem",
                fontWeight: "400",
                marginTop: "2rem",
                marginBottom: "2rem",
                lineHeight: "2.3",
                color: theme.palette.gray.five,
              }}>
              علی‌بابا طی این سالها، اعتبار زیادی نزد مشتریان خود کسب کرده است.
              طبق نظرسنجی، 97.2 درصد از مشتریان علی‌بابا از خدمات این سامانه
              راضی بوده‌اند و استفاده از آن را به دوستان و آشنایان خود پیشنهاد
              داده‌اند. سرعت سادگی خرید اینترنتی بلیط هواپیما، اعتبار و خوشنامی،
              امکان استرداد آنلاین بلیط هواپیما و پشتیبانی 24 ساعته در تمام
              روزهای هفته، رتبه یک فروش بلیط را از آنِ علی‌بابا کرده است. شما با
              رزرو بلیط هواپیما در علی‌بابا، از سفری راحت و بی‌دردسر مطمئن
              خواهید بود.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
