import React from "react";
import bannerImage from "../../images/bannerImage.png";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerText,
  BannerButton,
  BannerImage,
} from "./BannerElements";

import { Container } from "../../containers/ContainersElements";

const Banner = () => {
  return (
    <Container>
      <BannerContainer>
        <BannerContent>
          <BannerTitle>Discover Restaurant & Delicious Food</BannerTitle>
          <BannerText>
            Get your best place to dine in with your loved ones.
          </BannerText>
          <BannerButton>Explore</BannerButton>
        </BannerContent>
        <BannerImage>
          <img src={bannerImage} />
        </BannerImage>
      </BannerContainer>
    </Container>
  );
};

export default Banner;
