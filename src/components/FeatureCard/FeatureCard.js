// src/components/FeatureCard/FeatureCard.js
import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          {icon}
        </Box>
        <Typography variant="h6" component="h3" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;


