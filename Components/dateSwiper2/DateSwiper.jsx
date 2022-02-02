import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DateSwiperCard from "./DateSwiperCard";
import { Box } from "@mui/system";
import { Navigation, Pagination } from "swiper";
const styles={
    myswiper:{
        height:'62px'
    },
}
const data =[
    {
        id:1,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰'
    },
    {
        id:2,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰'
    },
    {
        id:3,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰'
    },
    {
        id:4,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰'
    },
    {
        id:5,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰'
    },
    {
        id:6,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰'
    },
    {
        id:7,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰'
    },
    {
        id:8,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰'
    },
    {
        id:9,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰'
    },
    {
        id:10,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰'
    },
    {
        id:11,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰'
    },
    {
        id:12,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰'
    },
    {
        id:13,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰'
    },
]
export default function DateSwiper() {
  return (
    <Box sx={{border:'1px solid rgba(0, 0, 0, .1)'}}>
      <Swiper
        dir="rtl"
        slidesPerView={7}
        spaceBetween={0}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        style={styles.myswiper}
      >
        
        {
           data.map( data => (
            <SwiperSlide>
                <DateSwiperCard
                day={data.day}
                price={data.price}
                />
             </SwiperSlide>
           ))
        }
        
      </Swiper>
    </Box>
  );
}
