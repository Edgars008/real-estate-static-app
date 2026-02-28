import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  FormControl,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { translations, type Language } from "../config/translations";
import logo from "../assets/locu_nams_logo.svg";

interface NavbarProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const t = translations[language];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#2b6276", px: 4, zIndex: (theme) => theme.zIndex.drawer + 1 }}
        elevation={0}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box display="flex" alignItems="center">
            <Box component="img" src={logo} alt="Logo" sx={{ height: 60 }} />
          </Box>

          {/* Navigation Links */}
          <Box display="flex" gap={3}>
            {[
              { path: "/home", label: t.home },
              { path: "/floor-plans", label: t.floorPlans },
              { path: "/building", label: t.building },
              { path: "/interior", label: t.interior },
              { path: "/property", label: t.property },
              { path: "/contact", label: t.contact },
            ].map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  color: "white",
                  borderBottom: isActive ? "2px solid white" : "none",
                  textDecoration: "none",
                  paddingBottom: 4,
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </Box>

          {/* Language Switch */}
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
                minWidth: 60,
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
        </Toolbar>
      </AppBar>

      {/* Spacer so content doesn't hide behind fixed AppBar */}
      <Toolbar />
    </>
  );
};

export default Navbar;