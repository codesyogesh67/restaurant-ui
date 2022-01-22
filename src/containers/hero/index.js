import React from "react";
import { HeroContainer, Header } from "./HeroElements";
import { Navbar, Sidebar, Banner, TodaySpecial } from "../../components";

const Hero = () => {
  return (
    <HeroContainer>
      <Header>
        <Navbar />
        <Sidebar />
      </Header>

      <Banner />
      <TodaySpecial />
    </HeroContainer>
  );
};

export default Hero;
