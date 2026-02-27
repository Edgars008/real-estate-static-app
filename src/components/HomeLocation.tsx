import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { translations, type Language } from "../config/translations";

interface Props {
  language: Language;
}

const HomeLocation: React.FC<Props> = ({ language }) => {
  const t = translations[language].homePage;

  return (
    <Box sx={{ backgroundColor: "#e9e3d9", py: 8 }}>
      <Container maxWidth="lg">
        {/* MAPS ROW */}
        <Grid container spacing={4}>
          {/* Google Map */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 300, md: 400 },
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.842631811504!2d24.138010477148026!3d56.95149739903286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece31ad99b693%3A0xd3c0c9e35f9cf87a!2zQnJ1xYZpbmlla3UgaWVsYSA3MmEsIExhdGdhbGVzIHByaWVrxaFwaWxzxJN0YSwgUsSrZ2EsIExWLTEwMDk!5e0!3m2!1slv!2slv!4v1772234473859!5m2!1slv!2slv"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>

          {/* Street View */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 300, md: 400 },
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <iframe
                title="Street View"
                src="https://www.google.com/maps?q=&layer=c&cbll=56.951657204096435, 24.140635450413853&cbp=11,0,0,0,0&output=svembed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </Box>
          </Grid>
        </Grid>

        {/* Address Text */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={600}>
            Bruņinieku iela 72A - 29,
          </Typography>
          <Typography>Rīga</Typography>
          <Typography>LV-1009</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeLocation;
