import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useLocation } from "react-router-dom";
import { translations, type Language } from "../config/translations";

interface Props {
  language: Language;
}

const FloorFloatingButton: React.FC<Props> = ({ language }) => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  if (location.pathname === "/floor-plans" || !open) return null;

  const t = translations[language].floatingBanner;

  return (
    <Box
      sx={{
        position: "fixed",
        right: 0,
        top: "40%",
        display: "flex",
        zIndex: 1300,
      }}
    >
      {/* LEFT SIDE (Clickable Area) */}
      <Box
        component={NavLink}
        to="/floor-plans"
        sx={{
          backgroundColor: "#2b5f73",
          color: "#fff",
          textDecoration: "none",
          px: 5,
          py: 3,
          borderRadius: "60px 0 0 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minWidth: 260,
          "&:hover": {
            backgroundColor: "#1f4f63",
          },
        }}
      >
        <Typography variant="body1" fontWeight={500}>
          {t.text}
        </Typography>

        <Typography
          variant="body2"
          fontWeight={700}
          sx={{ mt: 1, display: "flex", alignItems: "center" }}
        >
          → {t.here}
        </Typography>
      </Box>

      {/* RIGHT SIDE (Close Section) */}
      <Box
        sx={{
          backgroundColor: "#2b5f73",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{ color: "#fff" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FloorFloatingButton;