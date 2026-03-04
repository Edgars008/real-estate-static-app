import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { type Language } from "../config/translations";

interface Props {
  language: Language;
}

const HomeLocation: React.FC<Props> = ({}) => {
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.624847569643!2d24.5911005!3d56.8149153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ee8c3f00000001%3A0x0000000000000000!2sR%C4%ABgas%20iela%2010%2C%20Ogre%2C%20Latvia!5e0!3m2!1sen!2slv!4v0000000000000"
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
                src="https://www.google.com/maps/embed?pb=!4vXXXXXXXXXXXX!6m8!1m7!1sXXXXXXXXXXXX!2m2!1d56.814915!2d24.591101!3f0!4f0!5f0.7820865974627469"
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
            Rīgas iela 10,
          </Typography>
          <Typography variant="h6" fontWeight={600}>
            Ogre
          </Typography>
          <Typography variant="h6" fontWeight={600}>
            LV-5001
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeLocation;
