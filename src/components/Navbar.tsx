import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  FormControl,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import { translations, type Language } from "../config/translations";
import logo from "../assets/locu_nams_logo.svg";

interface NavbarProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const APP_TITLE = "RĪGAS IELAS REZIDENCES";

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const t = translations[language];

  // ✅ increased breakpoint to avoid RU overflow
  const isMobile = useMediaQuery("(max-width:1600px)");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { path: "/home", label: t.home },
    { path: "/floor-plans", label: t.floorPlans },
    { path: "/building", label: t.building },
    { path: "/interior", label: t.interior },
    { path: "/property", label: t.property },
    { path: "/contact", label: t.contact },
    { path: "/360tour", label: t.tour360 },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#2b6276",
          px: { xs: 2, md: 4 },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            minHeight: 80,
          }}
        >
          {/* LEFT — Logo + Title */}
          <NavLink
            to="/home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{ height: { xs: 40, md: 60 } }}
            />

            <Typography
              sx={{
                color: "white",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                letterSpacing: "0.06em",
                fontSize: {
                  xs: "0.9rem",
                  sm: "1.05rem",
                  md: "1.4rem",
                },
                whiteSpace: "nowrap",
              }}
            >
              {APP_TITLE}
            </Typography>
          </NavLink>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <>
              {/* Spacer after logo */}
              <Box sx={{ flexGrow: 0.4 }} />

              {/* CENTER LINKS */}
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  alignItems: "center",
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
                      fontSize: "0.95rem",
                      whiteSpace: "nowrap",
                    })}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </Box>

              {/* Push language to right */}
              <Box sx={{ flexGrow: 1 }} />

              {/* Language Switch */}
              <FormControl size="small" variant="standard">
                <Select
                  value={language}
                  onChange={(event) =>
                    setLanguage(event.target.value as Language)
                  }
                  disableUnderline
                  sx={{
                    color: "white",
                    "& .MuiSvgIcon-root": { color: "white" },
                    minWidth: 70,
                  }}
                >
                  <MenuItem value="lv">LV</MenuItem>
                  <MenuItem value="eng">ENG</MenuItem>
                  <MenuItem value="ru">RU</MenuItem>
                </Select>
              </FormControl>
            </>
          )}

          {/* MOBILE HAMBURGER */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            backgroundColor: "#2b6276",
            color: "white",
            p: 3,
          },
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box mt={4} display="flex" flexDirection="column" gap={3}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setDrawerOpen(false)}
              style={({ isActive }) => ({
                color: "white",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 500,
                paddingBottom: 6,
                borderBottom: isActive
                  ? "2px solid white"
                  : "2px solid transparent",
                transition: "border-color 0.3s ease",
                whiteSpace: "nowrap",
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </Box>

        {/* Language Switch */}
        <Box mt={5}>
          <FormControl fullWidth variant="standard">
            <Select
              value={language}
              onChange={(event: SelectChangeEvent) =>
                setLanguage(event.target.value as Language)
              }
              disableUnderline
              sx={{
                color: "white",
                "& .MuiSvgIcon-root": { color: "white" },
              }}
            >
              <MenuItem value="lv">LV</MenuItem>
              <MenuItem value="eng">ENG</MenuItem>
              <MenuItem value="ru">RU</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Drawer>

      {/* Spacer */}
      <Toolbar sx={{ minHeight: 80 }} />
    </>
  );
};

export default Navbar;
