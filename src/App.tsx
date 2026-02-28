import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import type { Language } from './config/translations';

export type Page =
  | 'HomePage'
  | 'FloorPlansAndPricesPage'
  | 'BuildingPage'
  | 'InteriorPage'
  | 'PropertyAcquisitionPage'
  | 'ContactPage';

const APP_TITLE = 'Rīgas ielas rezidence';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('HomePage');
  const [language, setLanguage] = useState<Language>('lv');

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar
        setPage={setPage}
        language={language}
        setLanguage={setLanguage}
      />
      <MainContent page={page} language={language} />
      <Footer title={APP_TITLE} />
    </Box>
  );
};

export default App;