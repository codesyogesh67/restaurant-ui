import React from "react";
import { Container, BorderDesign, TitleH1 } from "../ContainersElements";
import {
  ServicesHeader,
  ServicesTitle,
  ServicesText,
  ServicesBody,
  ServicesSection,
  ServicesImageContainer,
  ServicesSectionDetail,
} from "./ServicesElements";
import Scooter from "../../images/Scooter.png";
import Booking from "../../images/Booking.png";
import Utensils from "../../images/Utensils.png";

function Services() {
  return (
    <Container>
      <ServicesHeader>
        <ServicesTitle>
          <BorderDesign />
          <TitleH1>Our Services</TitleH1>
        </ServicesTitle>
        <ServicesText>
          Donec et massa velit. Curabitur sed enim eleifend, placerat turpis
          vel, varius odio. Pellentesque finibus nunc varius nisl rhoncus
          posuere.
        </ServicesText>
      </ServicesHeader>
      <ServicesBody>
        <ServicesSection>
          <ServicesImageContainer>
            <img src={Booking} alt="Message and Booking" />
          </ServicesImageContainer>
          <ServicesSectionDetail>Messaging and Booking.</ServicesSectionDetail>
        </ServicesSection>

        <ServicesSection>
          <ServicesImageContainer>
            <img src={Scooter} alt="Message and Booking" />
          </ServicesImageContainer>
          <ServicesSectionDetail>
            Delivery to your doorstep.
          </ServicesSectionDetail>
        </ServicesSection>

        <ServicesSection>
          <ServicesImageContainer>
            <img src={Utensils} alt="Utensils" />
          </ServicesImageContainer>
          <ServicesSectionDetail>
            High food quality and services.
          </ServicesSectionDetail>
        </ServicesSection>
      </ServicesBody>
    </Container>
  );
}

export default Services;
