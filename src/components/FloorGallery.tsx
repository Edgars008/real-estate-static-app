import React, { useState } from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { translations, type Language } from "../config/translations";

export interface Apartment {
  number: number;
  stairwell: 1 | 2;
  isReserved?: boolean;
  features?: string[];
  totalArea?: string;
  livingArea?: string;
  terraceArea?: string;
}

export interface Floor {
  floorNumber: number;
  image: string;
  apartments: Apartment[];
}

export interface Props {
  floors: Floor[];
  language: Language;
  onApartmentSelect?: (apartmentNumber: number) => void;
}

const FloorGallery: React.FC<Props> = ({
  floors,
  language,
  onApartmentSelect,
}) => {
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

      {/* FLOOR IMAGE WITH CLICKABLE APARTMENTS */}
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
            display: "block",
          }}
        />

        {/* CLICKABLE APARTMENT AREAS */}
        {[
          {
            number: 1,
            left: "5%",
            width: "22%",
            color: "rgba(138, 123, 82, 0.35)",
          },
          {
            number: 2,
            left: "27%",
            width: "22%",
            color: "rgba(138, 123, 82, 0.35)",
          },
          {
            number: 3,
            left: "49%",
            width: "22%",
            color: "rgba(138, 123, 82, 0.35)",
          },
          {
            number: 4,
            left: "71%",
            width: "22%",
            color: "rgba(138, 123, 82, 0.35)",
          },
        ].map((apt) => (
          <Box
            key={apt.number}
            onClick={() => onApartmentSelect?.(apt.number)}
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: apt.left,
              width: apt.width,
              cursor: "pointer",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              "&:hover": {
                backgroundColor: apt.color,
                outline: "3px solid rgba(255,255,255,0.9)",
              },

              "&:hover span": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            <Typography
              component="span"
              sx={{
                opacity: 0,
                transform: "translateY(10px)",
                transition: "0.2s",
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "#fff",
                px: 2,
                py: 0.5,
                borderRadius: 1,
                fontSize: "14px",
              }}
            >
              {t.floorGallery.apartmentNo} {apt.number}
            </Typography>
          </Box>
        ))}

        {/* PREV BUTTON */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 20,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.6)",
            },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* NEXT BUTTON */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 20,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.6)",
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* APARTMENT CARDS */}
      <Grid container spacing={4} sx={{ mt: 6 }}>
        {currentFloor.apartments.map((apartment) => (
          <Grid size={{ xs: 12, md: 3 }} key={apartment.number}>
            <Box
              onClick={() => onApartmentSelect?.(apartment.number)}
              sx={{
                cursor: "pointer",
                p: 3,
                borderRadius: 2,
                backgroundColor: "#fff",
                transition: "0.2s",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                "&:hover": {
                  backgroundColor: "#ece9df",
                  transform: "translateY(-2px)",
                },
              }}
            >
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
                        {t.floorGallery.apartmentConsistsOf ||
                          "The apartment consists of:"}
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
                      {t.floorGallery.totalArea || "Total area:"}{" "}
                      {apartment.totalArea}
                    </Typography>
                  )}

                  {apartment.livingArea && (
                    <Typography variant="body2" fontWeight={700}>
                      {t.floorGallery.livingArea || "Living area:"}{" "}
                      {apartment.livingArea}
                    </Typography>
                  )}

                  {apartment.terraceArea && (
                    <Typography variant="body2" fontWeight={700}>
                      {t.floorGallery.terrace || "Terrace:"}{" "}
                      {apartment.terraceArea}
                    </Typography>
                  )}

                  <Typography
                    sx={{
                      mt: 2,
                      fontWeight: 600,
                      color: "#8a7b52",
                    }}
                  >
                    View gallery →
                  </Typography>
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
