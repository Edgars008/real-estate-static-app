import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { translations, type Language } from "../config/translations";

interface Props {
  language: Language;
}

const apartments = [
  { floor: 1, apt: 1, rooms: 2, area: "74,7 m²", price: "149,450 €" },
  { floor: 1, apt: 2, rooms: 3, area: "87,8 m²", price: "reserved" },
  { floor: 1, apt: 7, rooms: 3, area: "87,8 m²", price: "181,545 €" },
  { floor: 1, apt: 8, rooms: 3, area: "74,7 m²", price: "reserved" },
  { floor: 2, apt: 3, rooms: 3, area: "64,3 m²", price: "149,450 €" },
  { floor: 2, apt: 4, rooms: 4, area: "86,9 m²", price: "reserved" },
  { floor: 2, apt: 9, rooms: 3, area: "86,9 m²", price: "reserved" },
  { floor: 2, apt: 10, rooms: 3, area: "64,3 m²", price: "149,450 €" },
  { floor: 3, apt: 5, rooms: 3, area: "64,3 m²", price: "149,450 €" },
  { floor: 3, apt: 6, rooms: 4, area: "85,9 m²", price: "202,615 €" },
  { floor: 3, apt: 11, rooms: 4, area: "85,9 m²", price: "202,615 €" },
  { floor: 3, apt: 12, rooms: 2, area: "65,2 m²", price: "149,450 €" },
];

const ApartmentsTable: React.FC<Props> = ({ language }) => {
  const t = translations[language].floorPlansAndPricesTable;

  return (
    <Box
      sx={{
        mt: 8,
        backgroundColor: "#f3f1eb",
      }}
    >
      {/* HEADER */}
      <Grid
        container
        sx={{
          borderBottom: "1px solid #b8b8b8",
          pb: 2,
        }}
      >
        {[t.floor, t.aptNo, t.rooms, t.totalArea, t.price].map(
          (header, index) => (
            <Grid
              key={index}
              size={{ xs: index < 3 ? 2 : 3 }}
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: "#2d2d2d",
                }}
              >
                {header}
              </Typography>
            </Grid>
          ),
        )}
      </Grid>

      {/* ROWS */}
      {apartments.map((apt, index) => (
        <Grid
          container
          key={index}
          sx={{
            py: 2,
            borderBottom: "1px solid #d6d6d6",
          }}
        >
          <Grid size={{ xs: 2 }} sx={{ textAlign: "center" }}>
            {apt.floor}
          </Grid>

          <Grid size={{ xs: 2 }} sx={{ textAlign: "center" }}>
            {apt.apt}
          </Grid>

          <Grid size={{ xs: 2 }} sx={{ textAlign: "center" }}>
            {apt.rooms}
          </Grid>

          <Grid size={{ xs: 3 }} sx={{ textAlign: "center" }}>
            {apt.area}
          </Grid>

          <Grid size={{ xs: 3 }} sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontWeight: apt.price === "reserved" ? 500 : 400,
                letterSpacing: 0.5,
              }}
            >
              {apt.price === "reserved" ? t.reserved : apt.price}
            </Typography>
          </Grid>
        </Grid>
      ))}

      {/* FOOTNOTE */}
      <Typography
        sx={{
          mt: 4,
          fontSize: 13,
          color: "#2d2d2d",
          textAlign: "center",
        }}
      >
        {t.footnote}
      </Typography>
    </Box>
  );
};

export default ApartmentsTable;
