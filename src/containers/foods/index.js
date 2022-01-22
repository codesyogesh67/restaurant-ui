import React from "react";
import { Container, BorderDesign, TitleH1 } from "../ContainersElements";
import {
  FoodsHeader,
  FoodsTitle,
  FoodsText,
  FoodsList,
  FoodsSection,
  FoodsImageContainer,
  FoodsSectionHeading,
  FoodsDetail,
  FoodsPrice,
} from "./FoodsElements";

import {
  breakfast,
  Sandwich,
  cookies,
  fries,
  lunch,
  Burger2,
} from "../../images";

function Foods() {
  return (
    <Container>
      <FoodsHeader>
        <FoodsTitle>
          <BorderDesign />
          <TitleH1>Explore our foods</TitleH1>
        </FoodsTitle>
        <FoodsText>
          Maecenas ac ornare nisl. Nulla nec urna a enim pellentesque egestas.
          Morbi et aliquet sapien. Suspendisse ac ipsum sed tortor sollicitudin
          porta et id tortor. Aliquam erat volutpat.
        </FoodsText>
      </FoodsHeader>
      <FoodsList>
        <FoodsSection>
          <FoodsImageContainer>
            <img src={breakfast} alt="Breakfast" />
          </FoodsImageContainer>
          <FoodsSectionHeading>Hand Sandwich</FoodsSectionHeading>
          <FoodsDetail>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            tortor tellus, id hendrerit ante iaculis vitae.{" "}
          </FoodsDetail>

          <FoodsPrice>$10.25</FoodsPrice>
        </FoodsSection>
        <FoodsSection>
          <FoodsImageContainer>
            <img src={cookies} alt="Cookies" />
          </FoodsImageContainer>
          <FoodsSectionHeading>Cookies</FoodsSectionHeading>
          <FoodsDetail>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            tortor tellus, id hendrerit ante iaculis vitae.{" "}
          </FoodsDetail>

          <FoodsPrice>$10.25</FoodsPrice>
        </FoodsSection>
        <FoodsSection>
          <FoodsImageContainer>
            <img src={Sandwich} alt="Sandwich" />
          </FoodsImageContainer>
          <FoodsSectionHeading>Sandwich</FoodsSectionHeading>
          <FoodsDetail>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            tortor tellus, id hendrerit ante iaculis vitae.{" "}
          </FoodsDetail>

          <FoodsPrice>$10.25</FoodsPrice>
        </FoodsSection>
        <FoodsSection>
          <FoodsImageContainer>
            <img src={fries} alt="Fries" />
          </FoodsImageContainer>
          <FoodsSectionHeading>Fries</FoodsSectionHeading>
          <FoodsDetail>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            tortor tellus, id hendrerit ante iaculis vitae.{" "}
          </FoodsDetail>

          <FoodsPrice>$10.25</FoodsPrice>
        </FoodsSection>
        <FoodsSection>
          <FoodsImageContainer>
            <img src={Burger2} alt="Burger" />
          </FoodsImageContainer>
          <FoodsSectionHeading>Burger</FoodsSectionHeading>
          <FoodsDetail>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            tortor tellus, id hendrerit ante iaculis vitae.{" "}
          </FoodsDetail>

          <FoodsPrice>$10.25</FoodsPrice>
        </FoodsSection>
        <FoodsSection>
          <FoodsImageContainer>
            <img src={lunch} alt="Lunch" />
          </FoodsImageContainer>
          <FoodsSectionHeading>Lunch</FoodsSectionHeading>
          <FoodsDetail>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            tortor tellus, id hendrerit ante iaculis vitae.{" "}
          </FoodsDetail>

          <FoodsPrice>$10.25</FoodsPrice>
        </FoodsSection>
      </FoodsList>
    </Container>
  );
}

export default Foods;
