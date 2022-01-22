import React from "react";
import { Container, BorderDesign } from "../ContainersElements";
import {
  DownloadAppHeader,
  DownloadAppTitle,
  DownloadAppText,
  DownloadAppImageContainer,
  DownloadAppImageWrapper,
  DownloadAppContainer,
} from "./downloadAppElements";

import { lettuce, mobile } from "../../images";

function DownloadApp() {
  return (
    <Container>
      <DownloadAppContainer>
        <DownloadAppHeader>
          <BorderDesign />
          <DownloadAppTitle>Download App for Exciting offers</DownloadAppTitle>
          <DownloadAppText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            tortor tellus, id hendrerit ante iaculis vitae. Sed ut dui at urna
            molestie vestibulum. Duis convallis ante ac lorem ornare, fermentum
            consectetur velit euismod.
          </DownloadAppText>
        </DownloadAppHeader>
        <DownloadAppImageContainer>
          <DownloadAppImageWrapper>
            <img src={mobile} alt="Mobile" />
            <img src={lettuce} alt="Lettuce" />
          </DownloadAppImageWrapper>
        </DownloadAppImageContainer>
      </DownloadAppContainer>
    </Container>
  );
}

export default DownloadApp;

{
  /*
<div className="mobileApp__imageContainer">
  <div className="mobileApp__imageWrapper">
    <img className="mobileApp__mobile" src={mobile} />
    <img className="mobileApp__lettuce" src={lettuce2} />
  </div>
</div> */
}
