import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { translations, type Language } from "../config/translations";
import InteriorGallery from "../components/InteriorGallery";
import { interiorGallery } from "../config/interiorGallery";

interface Props {
  language: Language;
}

const FloorPlansAndPricesPage: React.FC<Props> = ({ language }) => {
  const t = translations[language].interiorPage;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#f3f1eb",
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ mb: { xs: 6, md: 10 } }}
        >
          {t.title}
        </Typography>


        <InteriorGallery
          title="FLOOR PLANS AND PRICES"
          images={interiorGallery.floorPlans}
        />
      </Container>
    </Box>
  );
};

export default FloorPlansAndPricesPage;
