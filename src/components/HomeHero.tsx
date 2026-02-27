import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { translations, type Language } from "../config/translations";
import houseImage from "../assets/homePage/house.png";

interface Props {
  language: Language;
}

const HomeHero: React.FC<Props> = ({ language }) => {
  const t = translations[language].homePage;

  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "80vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          color: "#fff",
          backgroundImage: `url(${houseImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Box maxWidth={500}>
            <Typography
              variant="h2"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              {t.title}
            </Typography>

            <Typography
              variant="h6"
              sx={{ mb: 4 }}
            >
              {t.subtitle}
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                backgroundColor: "#1f4f63",
                "&:hover": {
                  backgroundColor: "#163947",
                },
              }}
            >
              {t.button}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* STATS SECTION */}
      <Box sx={{ backgroundColor: "#e9e3d9", py: 6 }}>
        <Container>
          <Grid container spacing={4} textAlign="center">
            <Grid size={{ xs: 6, md: 3 }}>
              <Typography variant="h3" fontWeight={700}>
                12
              </Typography>
              <Typography>{t.stats.apartments}</Typography>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Typography variant="h3" fontWeight={700}>
                3
              </Typography>
              <Typography>{t.stats.floors}</Typography>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Typography variant="h3" fontWeight={700}>
                A
              </Typography>
              <Typography>{t.stats.energy}</Typography>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Typography variant="h3" fontWeight={700}>
                2026
              </Typography>
              <Typography>{t.stats.commissioning}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomeHero;