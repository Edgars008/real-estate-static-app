import React from 'react';
import { Container, Typography } from '@mui/material';
import type { Page } from '../App';
import { translations, type Language } from '../config/translations';

interface MainContentProps {
  page: Page;
  language: Language; // 👈 ADD THIS
}

const MainContent: React.FC<MainContentProps> = ({ page, language }) => {
  const t = translations[language];

  const renderContent = () => {
    switch (page) {
      case 'HomePage':
        return <Typography variant="h4">{t.home}</Typography>;

      case 'FloorPlansAndPricesPage':
        return <Typography variant="h4">{t.floorPlans}</Typography>;

      case 'BuildingPage':
        return <Typography variant="h4">{t.building}</Typography>;

      case 'InteriorPage':
        return <Typography variant="h4">{t.interior}</Typography>;

      case 'PropertyAcquisitionPage':
        return <Typography variant="h4">{t.property}</Typography>;

      case 'ContactPage':
        return <Typography variant="h4">{t.contact}</Typography>;

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