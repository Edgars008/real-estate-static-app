import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  FormControl,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { translations, type Language } from "../config/translations";
import logo from "../assets/locu_nams_logo.svg";

interface NavbarProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const APP_TITLE = "Rīgas ielas rezidence";

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const t = translations[language];

  const navLinks = [
    { path: "/home", label: t.home },
    { path: "/floor-plans", label: t.floorPlans },
    { path: "/building", label: t.building },
    { path: "/interior", label: t.interior },
    { path: "/property", label: t.property },
    { path: "/contact", label: t.contact },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#2b6276",
          px: 4,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            minHeight: 80,
            position: "relative",
          }}
        >
          {/* LEFT — Logo + Title */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flex: 1,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{ height: 60 }}
            />

            <Typography
              sx={{
                color: "white",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: "1.4rem",
                letterSpacing: "0.08em",
              }}
            >
              {APP_TITLE}
            </Typography>
          </Box>

          {/* CENTER — Perfectly Centered Navigation */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 4,
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  color: "white",
                  textDecoration: "none",
                  paddingBottom: 6,
                  borderBottom: isActive
                    ? "2px solid white"
                    : "2px solid transparent",
                  transition: "border-color 0.3s ease",
                  fontWeight: 500,
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </Box>

          {/* RIGHT — Language Switch */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flex: 1,
            }}
          >
            <FormControl size="small" variant="standard">
              <Select
                value={language}
                onChange={(event: SelectChangeEvent) =>
                  setLanguage(event.target.value as Language)
                }
                disableUnderline
                sx={{
                  color: "white",
                  "& .MuiSvgIcon-root": { color: "white" },
                  minWidth: 70,
                }}
              >
                <MenuItem value="lv" disabled={language === "lv"}>
                  LV
                </MenuItem>
                <MenuItem value="eng" disabled={language === "eng"}>
                  ENG
                </MenuItem>
                <MenuItem value="ru" disabled={language === "ru"}>
                  RU
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer */}
      <Toolbar sx={{ minHeight: 80 }} />
    </>
  );
};

export default Navbar;