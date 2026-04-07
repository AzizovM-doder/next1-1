import React from "react";
import AboutHero from "../components/about/aboutHero";
import AboutPath from "../components/about/aboutPath";
import AboutPurpose from "../components/about/aboutPurpose";
import AboutWorkers from "../components/about/aboutWorkers";
import AboutLiving from "../components/about/aboutLiving";
import AboutClarity from "../components/about/aboutClarity";

const page = () => {
  return (
    <main>
      <AboutHero />
      <AboutPurpose />
      <AboutPath />
      <AboutWorkers/>
      <AboutLiving/>
      <AboutClarity/>
    </main>
  );
};

export default page;
