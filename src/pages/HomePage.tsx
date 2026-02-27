import React from "react";
import HomeHero from "../components/HomeHero";
import HomeLocation from "../components/HomeLocation";
import { type Language } from "../config/translations";

interface Props {
  language: Language;
}

const HomePage: React.FC<Props> = ({ language }) => {
    return (
    <>
      <HomeHero language={language} />
      <HomeLocation language={language} />
    </>
  );
};

export default HomePage;