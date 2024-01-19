import React from 'react';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import {Stack, Box } from '@mui/material';

export default function App() {

  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
      
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      
    </Box>
       
    
  )
}
