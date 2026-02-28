import React, { useState } from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { translations, type Language } from "../config/translations";

export interface Apartment {
  number: number;
  stairwell: 1 | 2;
  isReserved?: boolean;
  features?: string[]; // List of apartment features
  totalArea?: string;  // e.g., "74.7 m²"
  livingArea?: string; // e.g., "61 m²"
  terraceArea?: string; // e.g., "13.7 m²"
}

export interface Floor {
  floorNumber: number;
  image: string;
  apartments: Apartment[];
}

export interface Props {
  floors: Floor[];
  language: Language;
}

const FloorGallery: React.FC<Props> = ({ floors, language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = translations[language];

  const currentFloor = floors[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? floors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === floors.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ mt: 12 }}>
      {/* FLOOR TITLE */}
      <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
        {currentFloor.floorNumber}. {t.floorGallery.floor}
      </Typography>

      {/* FLOOR IMAGE */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        <Box
          component="img"
          src={currentFloor.image}
          alt="Floor plan"
          sx={{
            width: "100%",
            height: { xs: 300, md: 550 },
            objectFit: "cover",
          }}
        />

        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 20,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "#fff",
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 20,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "#fff",
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* APARTMENTS */}
      <Grid container spacing={4} sx={{ mt: 6 }}>
        {currentFloor.apartments.map((apartment) => (
          <Grid size={{ xs: 12, md: 3 }}key={apartment.number}>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                {t.floorGallery.apartmentNo} {apartment.number}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {apartment.stairwell}. {t.floorGallery.stairwell}
              </Typography>

              {apartment.isReserved ? (
                <Typography color="error" fontWeight={600}>
                  {t.floorGallery.reserved}
                </Typography>
              ) : (
                <>
                  {apartment.features && apartment.features.length > 0 && (
                    <>
                      <Typography fontWeight={600} sx={{ mb: 1 }}>
                        {t.floorGallery.apartmentConsistsOf || "The apartment consists of:"}
                      </Typography>
                      <Box component="ol" sx={{ pl: 3, mb: 1 }}>
                        {apartment.features.map((feature, idx) => (
                          <li key={idx}>
                            <Typography variant="body2">{feature}</Typography>
                          </li>
                        ))}
                      </Box>
                    </>
                  )}

                  {apartment.totalArea && (
                    <Typography variant="body2" fontWeight={700}>
                      {t.floorGallery.totalArea || "Total area:"} {apartment.totalArea}
                    </Typography>
                  )}

                  {apartment.livingArea && (
                    <Typography variant="body2" fontWeight={700}>
                      {t.floorGallery.livingArea || "Living area:"} {apartment.livingArea}
                    </Typography>
                  )}

                  {apartment.terraceArea && (
                    <Typography variant="body2" fontWeight={700}>
                      {t.floorGallery.terrace || "Terrace:"} {apartment.terraceArea}
                    </Typography>
                  )}
                </>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FloorGallery;