// src/components/InstallationGuide/InstallationGuide.js
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const InstallationGuide = () => {
  const installationCode = `# Clone the repository
git clone https://github.com/compliai/intelligent-privacy-auditor.git

# Navigate to the project directory
cd intelligent-privacy-auditor

# Install dependencies
npm install

# Configure your environment
cp .env.example .env
# Edit .env with your settings

# Start the application
npm start`;

  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="installation-content"
          id="installation-header"
        >
          <Typography variant="h6">Installation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            Setting up CompliAI is straightforward. Follow these commands to get started:
          </Typography>
          <SyntaxHighlighter language="bash" style={docco} showLineNumbers>
            {installationCode}
          </SyntaxHighlighter>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="config-content"
          id="config-header"
        >
          <Typography variant="h6">Configuration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            After installation, you'll need to configure CompliAI to connect with your applications and databases. The configuration process involves:
          </Typography>
          <Typography component="ul" sx={{ pl: 2 }}>
            <li>Setting up database connections</li>
            <li>Configuring API access credentials</li>
            <li>Defining compliance frameworks (GDPR, CCPA, etc.)</li>
            <li>Setting scan parameters and schedules</li>
          </Typography>
          <Typography paragraph sx={{ mt: 2 }}>
            Refer to our detailed configuration documentation for specific instructions based on your environment.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default InstallationGuide;

