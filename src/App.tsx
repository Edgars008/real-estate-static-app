import React, { useState } from "react";
import { Box } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FloorPlansAndPricesPage from "./pages/FloorPlansAndPricesPage";
import BuildingPage from "./pages/BuildingPage";
import InteriorPage from "./pages/InteriorPage";
import PropertyAcquisitionPage from "./pages/PropertyAcquisitionPage";
import ContactPage from "./pages/ContactPage";
import type { Language } from "./config/translations";
import FloorFloatingButton from "./components/FloorFloatingButton";

const APP_TITLE = "RĪGAS IELAS REZIDENCES";

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>("lv");

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Navbar */}
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Main content routes */}
      <Box component="main" flexGrow={1}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<HomePage language={language} />} />
          <Route
            path="/floor-plans"
            element={<FloorPlansAndPricesPage language={language} />}
          />
          <Route
            path="/building"
            element={<BuildingPage language={language} />}
          />
          <Route
            path="/interior"
            element={<InteriorPage language={language} />}
          />
          <Route
            path="/property"
            element={<PropertyAcquisitionPage language={language} />}
          />
          <Route
            path="/contact"
            element={<ContactPage language={language} />}
          />
        </Routes>
      </Box>

      {/* ✅ Floating Button (shows globally) */}
      <FloorFloatingButton language={language} />

      {/* Footer */}
      <Footer title={APP_TITLE} />
    </Box>
  );
};

export default App;
