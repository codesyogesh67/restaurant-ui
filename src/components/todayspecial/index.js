import React from "react";
import {
  TodaySpecialContainer,
  TodaySpecialHeader,
  TodaySpecialText,
  TodaySpecialTitle,
  TodaySpecialTitleP,
  TodaySpecialBoxContainer,
  TodaySpecialImageContainer,
  TodaySpecialBoxTitle,
  TodaySpecialBoxText,
  TodaySpecialBoxPrice,
  TodaySpecialBoxOrder,
  TodaySpecialBoxBody,
} from "./TodaySpecialElements";
import pizza from "../../images/pizza.png";
import Burger from "../../images/Burger.png";

import {
  Container,
  BorderDesign,
  TitleH1,
} from "../../containers/ContainersElements";

const TodaySpecial = () => {
  return (
    <Container>
      <TodaySpecialHeader>
        <TodaySpecialTitle>
          <BorderDesign />
          <TitleH1>Today's Special Attraction</TitleH1>
          <TodaySpecialTitleP>For Dining In or Take Away!</TodaySpecialTitleP>
        </TodaySpecialTitle>

        <TodaySpecialText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
          tortor tellus, id hendrerit ante iaculis vitae. Sed ut dui at urna
          molestie vestibulum.
        </TodaySpecialText>
      </TodaySpecialHeader>
      <TodaySpecialContainer>
        <TodaySpecialBoxContainer>
          <TodaySpecialImageContainer>
            <img src={pizza} alt="pizza" />
          </TodaySpecialImageContainer>
          <TodaySpecialBoxBody>
            <TodaySpecialBoxTitle>The Fire Pizza</TodaySpecialBoxTitle>
            <TodaySpecialBoxText>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Done
              porta tortor tellus, id hend rerit ante iaculis vitae. Sed ut duat
              urna molestie vestibulum.
            </TodaySpecialBoxText>
            <TodaySpecialBoxPrice>$ 10.50</TodaySpecialBoxPrice>
            <TodaySpecialBoxOrder>Order Now</TodaySpecialBoxOrder>
          </TodaySpecialBoxBody>
        </TodaySpecialBoxContainer>

        <TodaySpecialBoxContainer>
          <TodaySpecialImageContainer>
            <img src={Burger} alt="Burger" />
          </TodaySpecialImageContainer>
          <TodaySpecialBoxBody>
            <TodaySpecialBoxTitle>The Gummy Burger</TodaySpecialBoxTitle>
            <TodaySpecialBoxText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Done
              porta tortor tellus, id hend rerit ante iaculis vitae. Sed ut duat
              urna molestie vestibulum.
            </TodaySpecialBoxText>
            <TodaySpecialBoxPrice>$ 10.50</TodaySpecialBoxPrice>
            <TodaySpecialBoxOrder>Order Now</TodaySpecialBoxOrder>
          </TodaySpecialBoxBody>
        </TodaySpecialBoxContainer>
      </TodaySpecialContainer>
    </Container>
  );
};

export default TodaySpecial;
