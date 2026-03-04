import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { translations, type Language } from "../config/translations";

import sebLogo from "../assets/homePage/seb.svg";

interface Props {
  language: Language;
}

const BankSupportBanner: React.FC<Props> = ({ language }) => {
  const t = translations[language].homePage;

  return (
    <Box
      sx={{
        backgroundColor: "#60cd18", // SEB green
        py: { xs: 5, md: 7 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* TEXT */}
        <Typography
          sx={{
            color: "white",
            fontWeight: 700,
            fontSize: { xs: "20px", md: "32px" },
            letterSpacing: "0.05em",
          }}
        >
          {t.bankSupport}
        </Typography>

        {/* LOGO */}
        <Box
          component="img"
          src={sebLogo}
          alt="SEB"
          sx={{
            height: { xs: 80, md: 120 },
            objectFit: "contain",
          }}
        />
      </Container>
    </Box>
  );
};

export default BankSupportBanner;