// src/features/welcome/components/KeyFeatures/KeyFeatures.js
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
  DataObject as DataObjectIcon,
  Assessment as AssessmentIcon,
  Sync as SyncIcon,
  Settings as SettingsIcon,
  Build as BuildIcon,
  Code as CodeIcon
} from '@mui/icons-material';
import FeatureCard from '../../../../components/FeatureCard';

const KeyFeatures = () => {
  const features = [
    {
      title: "Data Mapping",
      icon: <DataObjectIcon fontSize="large" color="primary" />,
      description: "Using LlamaIndex technology, CompliAI creates detailed catalogs of data flows and storage within your systems."
    },
    {
      title: "Risk Assessment",
      icon: <AssessmentIcon fontSize="large" color="primary" />,
      description: "Powered by Gemma 3, our tool analyzes your data handling practices to identify potential compliance risks."
    },
    {
      title: "Real-Time Monitoring",
      icon: <SyncIcon fontSize="large" color="primary" />,
      description: "Don't wait for annual audits. CompliAI continuously monitors your systems for compliance issues."
    },
    {
      title: "Customizable Frameworks",
      icon: <SettingsIcon fontSize="large" color="primary" />,
      description: "Whether you're focused on GDPR, CCPA, or internal policies, CompliAI adapts to your needs."
    },
    {
      title: "Remediation Guidance",
      icon: <BuildIcon fontSize="large" color="primary" />,
      description: "Beyond identifying problems, CompliAI provides specific, actionable recommendations."
    },
    {
      title: "Open Source",
      icon: <CodeIcon fontSize="large" color="primary" />,
      description: "CompliAI thrives on community collaboration with accessible code and documentation."
    }
  ];

  return (
    <Box sx={{ my: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Key Features
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FeatureCard 
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KeyFeatures;

