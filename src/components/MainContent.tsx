import React from 'react';
import { Container } from '@mui/material';
import type { Page } from '../App';
import type { Language } from '../config/translations';
import HomePage from '../pages/HomePage';
import FloorPlansAndPricesPage from '../pages/FloorPlansAndPricesPage';
import BuildingPage from '../pages/BuildingPage';
import InteriorPage from '../pages/InteriorPage';
import PropertyAcquisitionPage from '../pages/PropertyAcquisitionPage';
import ContactPage from '../pages/ContactPage';

interface MainContentProps {
  page: Page;
  language: Language;
}

const MainContent: React.FC<MainContentProps> = ({ page, language }) => {

  const renderContent = () => {
    switch (page) {
      case 'HomePage':
        return <HomePage language={language} />;

      case 'FloorPlansAndPricesPage':
        return <FloorPlansAndPricesPage language={language} />;

      case 'BuildingPage':
        return <BuildingPage language={language} />;

      case 'InteriorPage':
        return <InteriorPage language={language} />;

      case 'PropertyAcquisitionPage':
        return <PropertyAcquisitionPage language={language} />;

      case 'ContactPage':
        return <ContactPage />;

      default:
        return null;
    }
  };

  return (
    <Container sx={{ flexGrow: 1, mt: 4 }}>
      {renderContent()}
    </Container>
  );
};

export default MainContent;