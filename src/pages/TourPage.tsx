import React from "react";
import type { Language } from "../config/translations";
import KuulaTour from "../components/KuulaTour";

interface Props {
  language: Language;
}

const TourPage: React.FC<Props> = () => {

  return (
    <>
      <KuulaTour/>
    </>
  );
};

export default TourPage;
