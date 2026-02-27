import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { translations, type Language } from "../config/translations";

interface Props {
  language: Language;
}

const StepBlock = ({
  number,
  title,
  text,
}: {
  number: number;
  title: string;
  text: string;
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: { xs: "center", md: "flex-start" },
      textAlign: { xs: "center", md: "left" },
      gap: 2, // vertical spacing
    }}
  >
    {/* Number + Title in a row */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // row on desktop
        alignItems: "center",
        gap: 2, // horizontal spacing
        mb: 1,
      }}
    >
      {/* Number pill */}
      <Box
        sx={{
          width: 50,  // smaller width
          height: 70, // smaller height
          border: "2px solid #0d2c3d",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          {number}.
        </Typography>
      </Box>

      {/* Title */}
      <Typography variant="h6" fontWeight={700} sx={{ mb: 0 }}>
        {title}
      </Typography>
    </Box>

    {/* Text below */}
    <Typography
      variant="body1"
      sx={{
        lineHeight: 1.8,
        color: "rgba(0,0,0,0.75)",
        maxWidth: 360,
      }}
    >
      {text}
    </Typography>
  </Box>
);

const PropertyAcquisitionPage: React.FC<Props> = ({ language }) => {
  const t = translations[language];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#f8f8f6",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h3"
          align="center"
          fontWeight={700}
          sx={{ mb: { xs: 6, md: 10 } }}
        >
          {t.propertyPage.propertyTitle}
        </Typography>

        {/* Grid Section */}
        <Grid
          container
          alignItems="flex-start"
          columnSpacing={{ xs: 4, md: 8 }}
        >
          {/* Step 1 */}
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              borderRight: { md: "1px solid rgba(13,44,61,0.2)" },
              pr: { md: 6 },
            }}
          >
            <StepBlock
              number={1}
              title={t.propertyPage.step1Title}
              text={t.propertyPage.step1Text}
            />
          </Grid>

          {/* Step 2 */}
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              borderRight: { md: "1px solid rgba(13,44,61,0.2)" },
              px: { md: 6 },
            }}
          >
            <StepBlock
              number={2}
              title={t.propertyPage.step2Title}
              text={t.propertyPage.step2Text}
            />
          </Grid>

          {/* Step 3 */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ pl: { md: 6 } }}>
            <StepBlock
              number={3}
              title={t.propertyPage.step3Title}
              text={t.propertyPage.step3Text}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PropertyAcquisitionPage;