import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  FormControl,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import type { Page } from "../App";
import { translations, type Language } from "../config/translations";
import logo from "../assets/locu_nams_logo.svg";

interface NavbarProps {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const Navbar: React.FC<NavbarProps> = ({ setPage, language, setLanguage }) => {
  const t = translations[language];

  const handleLanguageChange = (
    _: React.MouseEvent<HTMLElement>,
    newLang: Language | null,
  ) => {
    if (newLang) setLanguage(newLang);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#2b6276", px: 4 }}
      elevation={0}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Logo */}
        <Box display="flex" alignItems="center">
          <Box component="img" src={logo} alt="Logo" sx={{ height: 60 }} />
        </Box>

        {/* Center Navigation */}
        <Box display="flex" gap={3}>
          <Button color="inherit" onClick={() => setPage("HomePage")}>
            {t.home}
          </Button>
          <Button
            color="inherit"
            onClick={() => setPage("FloorPlansAndPricesPage")}
          >
            {t.floorPlans}
          </Button>
          <Button color="inherit" onClick={() => setPage("BuildingPage")}>
            {t.building}
          </Button>
          <Button color="inherit" onClick={() => setPage("InteriorPage")}>
            {t.interior}
          </Button>
          <Button
            color="inherit"
            onClick={() => setPage("PropertyAcquisitionPage")}
          >
            {t.property}
          </Button>
          <Button color="inherit" onClick={() => setPage("ContactPage")}>
            {t.contact}
          </Button>
        </Box>
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
  );
};

export default Navbar;
