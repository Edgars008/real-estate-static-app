import React from "react";
import { translations } from "../config/translations";
import type { Language } from "../config/translations";
import UniversalSection from "../components/UniversalSection";
import wave from "../assets/buildingPage/wave.svg";
import { Divider } from "@mui/material";
import ContactPage from "./ContactPage";

interface Props {
  language: Language;
}

const BuildingPage: React.FC<Props> = ({ language }) => {
  const t = translations[language];

  const content = {
    title: t.buildingPage.title,
    items: t.buildingPage.sections,
  };

  return (
    <>
      <UniversalSection
        content={content}
        image={wave}
        imageAlt="Building"
        imagePosition="right" // ← switch side here
      />

      <Divider
        sx={{
          my: { xs: 8, md: 12 },
          borderColor: "#d8d4c8",
        }}
      />

      <UniversalSection
        content={content}
        image={wave}
        imageAlt="Building"
        imagePosition="left" // ← switch side here
      />

      <Divider
        sx={{
          my: { xs: 8, md: 12 },
          borderColor: "#d8d4c8",
        }}
      />

      <UniversalSection
        content={content}
        image={wave}
        imageAlt="Building"
        imagePosition="right" // ← switch side here
      />

     <Divider
        sx={{
          my: { xs: 8, md: 12 },
          borderColor: "#d8d4c8",
        }}
      />

      <ContactPage language={language} />
    </>
  );
};

export default BuildingPage;
