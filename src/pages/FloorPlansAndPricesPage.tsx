import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, Container, Divider, Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { translations, type Language } from "../config/translations";
import FloorGallery from "../components/FloorGallery";
import { floorGalleryData } from "../config/floorGallery";
import ApartmentsTable from "../components/ApartmentsTable";
import ContactPage from "./ContactPage";
import InteriorGallery from "../components/InteriorGallery";
import { interiorGallery } from "../config/interiorGallery";
import UniversalSectionWithGallery from "../components/UniversalSectionWithGallery";

interface Props {
  language: Language;
}

const FloorPlansAndPricesPage: React.FC<Props> = ({ language }) => {
  const t = translations[language];

  // Refs
  const floorGalleryRef = useRef<HTMLDivElement>(null);
  const apt1Ref = useRef<HTMLDivElement>(null);
  const apt2Ref = useRef<HTMLDivElement>(null);
  const apt3Ref = useRef<HTMLDivElement>(null);

  // Floating button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800); // adjust if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to apartment gallery
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

  // Scroll back to floor plans
  const scrollToFloorPlans = () => {
    floorGalleryRef.current?.scrollIntoView({
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
        <Box ref={floorGalleryRef}>
          <FloorGallery
            floors={floorGalleryData}
            language={language}
            onApartmentSelect={scrollToApartment}
          />
        </Box>

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

        {/* Apartment 1 */}
        <Box
          ref={apt1Ref}
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, md: 4 },
          }}
        >
          <InteriorGallery
            title={t.homePage.apartmentSection.apartment1}
            images={interiorGallery.apartment1}
          />
        </Box>

        {/* Apartment 2 */}
        <Box
          ref={apt2Ref}
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, md: 4 },
          }}
        >
          <InteriorGallery
            title={t.homePage.apartmentSection.apartment2}
            images={interiorGallery.apartment2}
          />
        </Box>

        {/* Apartment 3 */}
        <Box
          ref={apt3Ref}
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, md: 4 },
          }}
        >
          <InteriorGallery
            title={t.homePage.apartmentSection.apartment3}
            images={interiorGallery.apartment3}
          />
        </Box>

        {/* Apartment 3 */}
        <Box
          ref={apt1Ref}
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, md: 4 },
          }}
        >
          <UniversalSectionWithGallery
            imagePosition="right"
            images={interiorGallery.apartment1}
            content={{
              title: t.homePage.apartmentSection.apartment1,
              items: [
                {
                  subtitle: "Layout",
                  text: "Spacious 3-room apartment with natural light.",
                },
                {
                  subtitle: "Design",
                  text: "Modern interior with high-quality materials.",
                },
              ],
            }}
          />
        </Box>

        {/* Contact */}
        <ContactPage language={language} />
      </Container>

      {/* Floating Scroll Button */}
      <Zoom in={showScrollTop}>
        <Fab
          onClick={scrollToFloorPlans}
          size="medium"
          sx={{
            position: "fixed",
            top: "50%",
            right: 150,
            transform: "translateY(-50%)",
            backgroundColor: "#1f1f1f",
            color: "#fff",
            opacity: 0.75,
            boxShadow: 3,
            "&:hover": {
              backgroundColor: "#000",
              opacity: 1,
            },
            zIndex: 1000,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  );
};

export default FloorPlansAndPricesPage;
