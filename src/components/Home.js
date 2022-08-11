import React, { } from 'react';
import { Box } from '@mui/material';
import WalletConnect from './WalletConnect';
import FileUpload from './FileUpload';


const Home = (props) => {
  return (
    <Box sx={{
      backgroundColor: 'background.default',
      display: 'flex', flexDirection: 'column',
      minHeight: 'calc(100% - 64px)'
    }}>
      <WalletConnect />
      <FileUpload />
    </Box>
  )
}

export default Home;
