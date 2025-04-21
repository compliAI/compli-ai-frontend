// src/features/welcome/components/HeroSection/HeroSection.js
import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, useTheme } from '@mui/material';

const HeroSection = () => {
  const theme = useTheme();
  
  return (
    <Paper 
      elevation={0} 
      sx={{ 
        bgcolor: theme.palette.primary.main, 
        color: 'white', 
        pt: 8, 
        pb: 10, 
        borderRadius: 0,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
            Welcome to CompliAI
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px', opacity: 0.9 }}>
            Your intelligent AI agent for data privacy compliance and auditing
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  bgcolor: 'white', 
                  color: theme.palette.primary.main,
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)'
                  }
                }}
              >
                Quick Start Guide
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="outlined" 
                size="large" 
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.9)',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                View Documentation
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* Background decorative elements */}
      <Box sx={{ 
        position: 'absolute', 
        right: '-5%', 
        top: '10%', 
        width: '300px', 
        height: '300px', 
        borderRadius: '50%', 
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
        zIndex: 1
      }} />
      <Box sx={{ 
        position: 'absolute', 
        left: '10%', 
        bottom: '-10%', 
        width: '200px', 
        height: '200px', 
        borderRadius: '50%', 
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
        zIndex: 1
      }} />
    </Paper>
  );
};

export default HeroSection;

