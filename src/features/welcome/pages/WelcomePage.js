// src/features/welcome/pages/WelcomePage.js
import React from 'react';
import { Box, Container, Typography, Paper, Button, Divider } from '@mui/material';
// Fix these imports to use the default exports
import HeroSection from '../components/HeroSection';
import KeyFeatures from '../components/KeyFeatures';
import CommunitySection from '../components/CommunitySection';
import StepsProgress from '../../../components/StepsProgress';
import InstallationGuide from '../../../components/InstallationGuide';

const WelcomePage = () => {
  const steps = [
    'Installation',
    'Configuration',
    'Initial Scan',
    'Review Results',
    'Implement Changes',
    'Continuous Monitoring'
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f7', minHeight: '100vh', pb: 8 }}>
      <HeroSection />
      
      <Container maxWidth="lg" sx={{ mt: -4, position: 'relative', zIndex: 3 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Why CompliAI?
          </Typography>
          <Typography variant="body1" paragraph>
            In today's data-driven world, maintaining privacy compliance isn't just good practice—it's essential for maintaining user trust and avoiding costly penalties. CompliAI provides automated privacy auditing, deep technical analysis, human-readable results, and actionable remediation steps.
          </Typography>

          <KeyFeatures />

          <Box sx={{ my: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Getting Started
            </Typography>
            
            <StepsProgress steps={steps} />
            <InstallationGuide />
          </Box>

          <CommunitySection />

          <Divider sx={{ my: 6 }} />

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Ready to start protecting your users' privacy?
            </Typography>
            <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
              Get Started Now
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default WelcomePage;