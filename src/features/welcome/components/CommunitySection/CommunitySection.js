// src/features/welcome/components/CommunitySection/CommunitySection.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const CommunitySection = () => {
  const communityResources = [
    {
      title: "GitHub Repository",
      description: "Access our code, contribute, and report issues",
      action: "View on GitHub",
      link: "https://github.com/orgs/compliAI/repositories"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and API references",
      action: "Read Docs",
      link: "/documentation"
    },
    {
      title: "Community Forum",
      description: "Discuss, ask questions, and share insights",
      action: "Join Forum",
      link: "/community"
    },
    {
      title: "Support",
      description: "Get professional help and training",
      action: "Contact Support",
      link: "/support"
    }
  ];

  return (
    <Box sx={{ my: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Support and Community
      </Typography>
      <Typography paragraph>
        As an open-source solution, CompliAI thrives on community collaboration. Join our growing community:
      </Typography>
      <Grid container spacing={3}>
        {communityResources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {resource.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={resource.link}>
                  {resource.action}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CommunitySection;

