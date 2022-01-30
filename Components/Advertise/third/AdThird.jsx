import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AdThird = () => {
  return <>
     <Box sx={{backgroundColor:'white', width:'100%',height:'312px',display:'flex',}}>
      <Box sx={{width:'60%',backgroundImage: `url("https://cdn.alibaba.ir/h/desktop/assets/images/app-mobile/diagonal-ovals-0315dd86.png")`,backgroundRepeat: 'no-repeat',backgroundSize:'cover'}}>
          <Box sx={{margin:'19px auto 0 25%'}}>
          <img src='https://cdn.alibaba.ir/h/desktop/assets/images/app-mobile/app-mobile@1x-09aa7fed.webp'/>
          </Box>
      </Box>
      <Box sx={{textAlign:'right'}}>
          <Typography sx={{fontSize:'1.25rem',fontWeight:'700',marginBottom:'1rem'}}> دانلود اپلیکیشن علی‌بابا</Typography>
          <Typography sx={{fontSize:'.875rem',fontWeight:'500'}}> با اپلیکیشن علی‌بابا سریع‌تر و مطمئن‌تر به سفر بروید </Typography>
      </Box>
    </Box>
  </>;
};

export default AdThird;
