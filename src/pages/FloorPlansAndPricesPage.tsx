import React, { useRef } from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import { translations, type Language } from "../config/translations";
import FloorGallery from "../components/FloorGallery";
import { floorGalleryData } from "../config/floorGallery";
import ApartmentsTable from "../components/ApartmentsTable";
import ContactPage from "./ContactPage";
import InteriorGallery from "../components/InteriorGallery";
import { interiorGallery } from "../config/interiorGallery";

interface Props {
  language: Language;
}

const FloorPlansAndPricesPage: React.FC<Props> = ({ language }) => {
  const t = translations[language];
  const apt1Ref = useRef<HTMLDivElement>(null);
  const apt2Ref = useRef<HTMLDivElement>(null);
  const apt3Ref = useRef<HTMLDivElement>(null);

  const scrollToApartment = (num: number) => {
    const map: Record<number, React.RefObject<HTMLDivElement | null>> = {
      1: apt1Ref,
      2: apt2Ref,
      3: apt3Ref,
    };

    map[num]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
          onApartmentSelect={scrollToApartment}
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

        <Box
          ref={apt1Ref}
          sx={{
            maxWidth: "1400px",
            mx: "auto", // centers the gallery
            px: { xs: 2, md: 4 }, // side spacing
          }}
        >
          <InteriorGallery
            title={t.homePage.apartmentSection.apartment1}
            images={interiorGallery.apartment1}
          />
        </Box>
        <Box
          ref={apt2Ref}
          sx={{
            maxWidth: "1400px",
            mx: "auto", // centers the gallery
            px: { xs: 2, md: 4 }, // side spacing
          }}
        >
          <InteriorGallery
            title={t.homePage.apartmentSection.apartment2}
            images={interiorGallery.apartment2}
          />
        </Box>
        <Box
          ref={apt3Ref}
          sx={{
            maxWidth: "1400px",
            mx: "auto", // centers the gallery
            px: { xs: 2, md: 4 }, // side spacing
          }}
        >
          <InteriorGallery
            title={t.homePage.apartmentSection.apartment3}
            images={interiorGallery.apartment3}
          />
        </Box>

        {/* Contact */}
        <ContactPage language={language} />
      </Container>
    </Box>
  );
};

export default FloorPlansAndPricesPage;
