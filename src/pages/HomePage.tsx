import React from "react";
import HomeHero from "../components/HomeHero";
import HomeLocation from "../components/HomeLocation";
import { translations, type Language } from "../config/translations";
import ProjectStages from "../components/ProjectStages";
import UniversalSection from "../components/UniversalSection";
import BankSupportBanner from "../components/BankSupportBanner";

//HOUSE
import houseFront from "../assets/homePage/house-front.jpg";
import houseSide from "../assets/homePage/house-side.jpg";
//APARTMENT
import balcony from "../assets/homePage/apartment-parameters/balcony.svg";
import windows from "../assets/homePage/apartment-parameters/windows.svg";
import ceiling from "../assets/homePage/apartment-parameters/ceiling.svg";
import decoration from "../assets/homePage/apartment-parameters/decoration.svg";
import floor from "../assets/homePage/apartment-parameters/floor.svg";
import ventilation from "../assets/homePage/apartment-parameters/ventilation.svg";
//LOCATION
import beach from "../assets/homePage/location/beach.svg";
import bus from "../assets/homePage/location/bus.svg";
import cityCenter from "../assets/homePage/location/city-center.svg";
import market from "../assets/homePage/location/market.svg";
import promenade from "../assets/homePage/location/promenade.svg";
import school from "../assets/homePage/location/school.svg";
import store from "../assets/homePage/location/store.svg";
import nature from "../assets/homePage/location/nature.svg";
import kinderGarden from "../assets/homePage/location/kinder-garden.svg";
import sportHall from "../assets/homePage/location/sport-hall.svg";
import cultureCenter from "../assets/homePage/location/culture-center.svg";
import DistanceRoad from "../components/DistanceRoad";

interface Props {
  language: Language;
}

const HomePage: React.FC<Props> = ({ language }) => {
  const t = translations[language];

  const contentFront = {
    title: t.homePage.title,
    items: t.homePage.sections1,
  };

  const apartmentParameterFeatures = [
    { icon: balcony, label: t.homePage.features.balcony },
    { icon: windows, label: t.homePage.features.windows },
    { icon: ceiling, label: t.homePage.features.ceiling },
    { icon: decoration, label: t.homePage.features.interior },
    { icon: floor, label: t.homePage.features.floor },
    { icon: ventilation, label: t.homePage.features.ventilation },
  ];

  const apartmentLocationFeatures = [
    { icon: store, label: t.homePage.location.tcDauga },
    { icon: bus, label: t.homePage.location.publicTransport },
    { icon: promenade, label: t.homePage.location.promenade },
    { icon: store, label: t.homePage.location.lidl },
    { icon: store, label: t.homePage.location.otherStores },
    { icon: cityCenter, label: t.homePage.location.cityCenter },
    { icon: beach, label: t.homePage.location.beach },
    { icon: market, label: t.homePage.location.ogresMarket },
    { icon: bus, label: t.homePage.location.trainBusStation },
    { icon: sportHall, label: t.homePage.location.sportsHall },
    { icon: kinderGarden, label: t.homePage.location.kindergarten },
    { icon: school, label: t.homePage.location.school },
    { icon: cultureCenter, label: t.homePage.location.cultureCenter },
    { icon: nature, label: t.homePage.location.naturePark },
  ];

  const contentSide = {
    title: t.homePage.title,
    items: t.homePage.sections2,
    features: apartmentParameterFeatures,
  };

  const contentLocation = {
    title: t.homePage.location.title,
    items: t.homePage.sectionLocation,
    features: apartmentLocationFeatures,
  };

  const contentLocatiOnther = {
    items: t.homePage.sectionLocationOther,
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
      <UniversalSection
        content={contentLocation}
        image={houseFront}
        imageAlt="Location-Side"
        imagePosition="right" // ← switch side here
      />
      <UniversalSection
        content={contentLocatiOnther}
        image={houseSide}
        imageAlt="Location-Side-Other"
        imagePosition="left" // ← switch side here
      />
      <DistanceRoad language={language} />
      <BankSupportBanner language={language} />
      <HomeLocation language={language} />
    </>
  );
};

export default HomePage;
