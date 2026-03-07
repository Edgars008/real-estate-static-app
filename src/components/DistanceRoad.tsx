import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { translations, type Language } from "../config/translations";

import roadImg from "../assets/homePage/distanceRoad/road.svg";
import carImg from "../assets/homePage/distanceRoad/car.svg";
import pointImg from "../assets/homePage/distanceRoad/point.svg";
import houseImg from "../assets/homePage/distanceRoad/house.svg";

interface Props {
  language: Language;
}

const DistanceRoad: React.FC<Props> = ({ language }) => {
  const t = translations[language].homePage.distanceSection;

  // Gap between road and cars
  const carGap = 20; // smaller than before, cars slightly closer

  return (
    <Box sx={{ backgroundColor: "#f4f1ea", py: { xs: 8, md: 14 }, position: "relative" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight={700} sx={{ mb: { xs: 8, md: 10 } }}>
          {t.title}
        </Typography>

        <Box sx={{ position: "relative", height: { xs: 250, md: 300 } }}>
          {/* ROAD */}
          <Box
            component="img"
            src={roadImg}
            sx={{
              position: "absolute",
              left: { xs: 80, md: 120 },
              top: "50%",
              transform: "translateY(-50%)",
              width: `calc(100% - 80px)`,
              height: { xs: 80, md: 120 },
              objectFit: "fill",
              zIndex: 1
            }}
          />

          {/* HOUSE */}
          <Box
            component="img"
            src={houseImg}
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              height: { xs: 80, md: 120 },
              zIndex: 2
            }}
          />

          {/* CARS – above road, slightly closer, flipped */}
          <Box
            component="img"
            src={carImg}
            sx={{
              position: "absolute",
              left: "65%", // reversed car 1
              top: { xs: 60, md: 80 }, // slightly closer to road
              height: { xs: 80, md: 120 },
              zIndex: 2,
              transform: "translateX(-50%) scaleX(-1)"
            }}
          />
          <Box
            component="img"
            src={carImg}
            sx={{
              position: "absolute",
              left: "35%", // reversed car 2
              top: { xs: 60, md: 80 }, // slightly closer to road
              height: { xs: 80, md: 120 },
              zIndex: 2,
              transform: "translateX(-50%) scaleX(-1)"
            }}
          />

          {/* LOCATIONS BELOW ROAD */}
          <Box
            sx={{
              position: "absolute",
              left: "65%",
              top: { xs: 170, md: 200 },
              transform: "translateX(-50%)",
              textAlign: "center"
            }}
          >
            <Box component="img" src={pointImg} sx={{ height: { xs: 18, md: 22 }, mb: 0.5 }} />
            <Typography fontWeight={600}>
              {t.locations[1].city} — {t.locations[1].time}
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: "35%",
              top: { xs: 170, md: 200 },
              transform: "translateX(-50%)",
              textAlign: "center"
            }}
          >
            <Box component="img" src={pointImg} sx={{ height: { xs: 18, md: 22 }, mb: 0.5 }} />
            <Typography fontWeight={600}>
              {t.locations[0].city} — {t.locations[0].time}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DistanceRoad;