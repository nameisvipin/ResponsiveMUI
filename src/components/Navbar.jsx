import React from 'react';

import styled from '@emotion/styled';
import {Avatar, Badge, InputBase ,Box, AppBar, Toolbar, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';



const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const SearchBar = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width:'40%'
}));

const Icons = styled(Box)(({ theme }) =>({
  // backgroundColor: 'white',
  display:'none',
  gap: '12px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display:'flex'
  }
  
}));

const UserBox = styled(Box)(({ theme }) =>({
  // backgroundColor: 'white',
  display:'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display:'none'
  }
}));


const Navbar = () => {
  return (
 
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography variant="h6" sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            Navbar
          </Typography>
          <PersonIcon sx={{
              display: {
                xs: 'block',
                sm: 'none',
              },
            }}
          />
          
          <SearchBar><InputBase placeholder='search...'></InputBase></SearchBar>
          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon  />
            </Badge>
            <Badge badgeContent={10} color="error">
              <NotificationsIcon  />
            </Badge>
            <Avatar sx={{width:25,height:25}} alt="Remy Sharp" src="https://i.pravatar.cc/150?img=18" />
            
          </Icons>
          <UserBox>
            <Avatar sx={{width:25,height:25}} alt="Remy Sharp" src="https://i.pravatar.cc/150?img=18" />
            <Typography variant='span'>John</Typography>
          </UserBox>  
        </StyledToolbar>
      </AppBar>

  );
};

export default Navbar;
