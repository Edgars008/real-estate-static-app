import React from 'react';
import { Typography } from '@mui/material';
import { translations } from '../config/translations';
import type { Language } from '../config/translations';

interface Props {
  language: Language;
}

const HomePage: React.FC<Props> = ({ language }) => {
  const t = translations[language];

  return <Typography variant="h4">{t.home}</Typography>;
};

export default HomePage;