import React from "react";
import { HeroContainer, Header, Wrapper } from "./HeroElements";
import { Navbar, Sidebar, Banner, TodaySpecial } from "../../components";

const Hero = () => {
  return (
    <HeroContainer>
      <Wrapper>
        <Header>
          <Navbar />
          <Sidebar />
        </Header>
      </Wrapper>

      <Banner />
      <TodaySpecial />
    </HeroContainer>
  );
};

export default Hero;
