import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import { translations, type Language } from "../config/translations";
import FloorGallery from "../components/FloorGallery";
import { floorGalleryData } from "../config/floorGallery";
import ApartmentsTable from "../components/ApartmentsTable";
import ContactPage from "./ContactPage";

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

        {/* Floor Gallery */}
        <FloorGallery
          floors={floorGalleryData}
          language={language}
        />

        {/* Divider */}
        <Divider
          sx={{
            my: { xs: 8, md: 12 },
            borderColor: "#d8d4c8",
          }}
        />

        {/* Apartments Table */}
        <ApartmentsTable language={language} />

        {/* Divider */}
        <Divider
          sx={{
            my: { xs: 8, md: 12 },
            borderColor: "#d8d4c8",
          }}
        />

        {/* Contact */}
        <ContactPage language={language} />
      </Container>
    </Box>
  );
};

export default FloorPlansAndPricesPage;