import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { translations, type Language } from "../config/translations";

import arrowImg from "../assets/homePage/arrow.svg";       // your arrow image
import stageDoneImg from "../assets/homePage/stage-done.svg";   // filled circle
import stageFutureImg from "../assets/homePage/stage-future.svg"; // empty circle

interface Props {
  language: Language;
}

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

const ProjectStages: React.FC<Props> = ({ language }) => {
  const t = translations[language].homePage.projectStages;

  return (
    <Box
      sx={{
        backgroundColor: "#f4f1ea",
        py: { xs: 8, md: 20 },
      }}
    >
      <Container>
        {/* TITLE */}
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ mb: 15, letterSpacing: "0.08em", textAlign: "left" }}
        >
          {capitalize(t.title)}
        </Typography>

        {/* TIMELINE */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LINE */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              right: "0",
              height: "2px",
              backgroundColor: "#1f2d36",
              transform: "translateY(-50%)",
              zIndex: 0,
            }}
          />

          {/* START STAGE (30% from left) */}
          <Box
            sx={{
              position: "absolute",
              left: "30%",
              transform: "translateX(-50%)",
              textAlign: "center",
              zIndex: 2,
            }}
          >
            <Typography sx={{ mb: 3 }}>
              {capitalize(t.startLabel)}
            </Typography>
            <Box
              component="img"
              src={stageDoneImg}
              alt="start stage"
              sx={{ height: 40, mb: 3 }}
            />
            <Typography fontWeight={600}>
              {capitalize(t.startDate)}
            </Typography>
          </Box>

          {/* FINISH STAGE (30% from right) */}
          <Box
            sx={{
              position: "absolute",
              right: "30%",
              transform: "translateX(50%)",
              textAlign: "center",
              zIndex: 2,
            }}
          >
            <Typography sx={{ mb: 3 }}>
              {capitalize(t.finishLabel)}
            </Typography>
            <Box
              component="img"
              src={stageFutureImg}
              alt="finish stage"
              sx={{ height: 40, mb: 3 }}
            />
            <Typography fontWeight={600}>
              {capitalize(t.finishDate)}
            </Typography>
          </Box>

          {/* ARROW */}
          <Box
            component="img"
            src={arrowImg}
            alt="timeline arrow"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              height: 40,
              zIndex: 2,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectStages;