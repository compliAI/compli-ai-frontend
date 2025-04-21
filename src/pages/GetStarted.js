// src/pages/GetStarted.js
import React from 'react';
import { MainLayout } from '../layouts';
import { WelcomePage } from '../features/welcome/pages';

const GetStarted = () => {
  return (
    <MainLayout>
      <WelcomePage />
    </MainLayout>
  );
};

export default GetStarted;