import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { translations, type Language } from "../config/translations";
import FloorGallery from "../components/FloorGallery";
import { floorGalleryData } from "../config/floorGallery";

interface Props {
  language: Language;
}

const FloorPlansAndPricesPage: React.FC<Props> = ({ language }) => {
  const t = translations[language];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#f3f1eb",
      }}
    >
      <Container maxWidth="lg">
        {/* Page Title */}
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ mb: { xs: 6, md: 10 } }}
        >
          {t.floorPlans}
        </Typography>

        <FloorGallery
          floors={floorGalleryData}
          language={language}
        />
      </Container>
    </Box>
  );
};

export default FloorPlansAndPricesPage;