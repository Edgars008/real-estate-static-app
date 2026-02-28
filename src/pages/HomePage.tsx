import React from "react";
import HomeHero from "../components/HomeHero";
import HomeLocation from "../components/HomeLocation";
import { type Language } from "../config/translations";
import ContactPage from "./ContactPage";

interface Props {
  language: Language;
}

const HomePage: React.FC<Props> = ({ language }) => {
    return (
    <>
      <HomeHero language={language} />
      <HomeLocation language={language} />
      <ContactPage language={language} />
    </>
  );
};

export default HomePage;