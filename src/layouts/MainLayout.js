// src/layouts/MainLayout.js
import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CompliAI
          </Typography>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Documentation</Button>
          <Button color="inherit">Community</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} CompliAI. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;

