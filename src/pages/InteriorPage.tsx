import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { translations, type Language } from "../config/translations";
import designerImg from "../assets/interior-designer.jpg";
import InteriorGallery from "../components/InteriorGallery";
import { interiorGallery } from "../config/interiorGallery";

interface Props {
  language: Language;
}

const InteriorPage: React.FC<Props> = ({ language }) => {
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

        <Grid container spacing={6} alignItems="center">
          {/* LEFT SIDE – Description */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {t.description1}
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {t.description2}
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {t.description3}
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT SIDE – Profile */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                gap: 3,
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={designerImg}
                alt="Interior designer"
                sx={{
                  width: 260,
                  borderRadius: 2,
                }}
              />

              {/* Info */}
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  {t.name}
                </Typography>

                <Typography variant="body1" sx={{ mb: 1 }}>
                  {t.role}
                </Typography>

                <Typography variant="body2">{t.phone}</Typography>
                <Typography variant="body2">{t.email}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <InteriorGallery title={t.livingRoom} images={interiorGallery.living} />

        <InteriorGallery title={t.bedroom} images={interiorGallery.bedroom} />
        <InteriorGallery title={t.bathroom} images={interiorGallery.bathroom} />
      </Container>
    </Box>
  );
};

export default InteriorPage;
