import React from "react";
import HomeHero from "../components/HomeHero";
import HomeLocation from "../components/HomeLocation";
import { translations, type Language } from "../config/translations";
import ContactPage from "./ContactPage";
import ProjectStages from "../components/ProjectStages";
import UniversalSection from "../components/UniversalSection";
import houseFront from "../assets/homePage/house-front.jpg";
import houseSide from "../assets/homePage/house-side.jpg";
import BankSupportBanner from "../components/BankSupportBanner";

interface Props {
  language: Language;
}

const HomePage: React.FC<Props> = ({ language }) => {
  const t = translations[language];

  const contentFront = {
    title: t.homePage.title,
    items: t.homePage.sections1,
  };

  const contentSide = {
    title: t.homePage.title,
    items: t.homePage.sections2,
  };

  return (
    <>
      <HomeHero language={language} />
      <ProjectStages language={language} />
      <UniversalSection
        content={contentFront}
        image={houseFront}
        imageAlt="Building-Front"
        imagePosition="right" // ← switch side here
      />
      <UniversalSection
        content={contentSide}
        image={houseSide}
        imageAlt="Building-Side"
        imagePosition="left" // ← switch side here
      />
      <HomeLocation language={language} />
      <BankSupportBanner language={language} />
      <ContactPage language={language} />
    </>
  );
};

export default HomePage;
