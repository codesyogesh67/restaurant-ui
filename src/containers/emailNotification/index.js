import React from "react";
import { Container, TitleH1, BorderDesign } from "../ContainersElements";

import {
  EmailNotificationHeader,
  EmailNotificationText,
  EmailNotificationForm,
  EmailNotificationLinks,
  EmailNotificationIcons,
  EmailNotificationContainer,
  EmailNotificationTitle,
} from "./EmailNotificationElements";

function EmailNotification() {
  return (
    <Container>
      <EmailNotificationContainer>
        <EmailNotificationHeader>
          <BorderDesign />
          <EmailNotificationTitle>
            {" "}
            Get Notified About Healthy Foods
          </EmailNotificationTitle>
          <EmailNotificationText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            tortor tellus, id hendrerit ante iaculis
          </EmailNotificationText>
        </EmailNotificationHeader>
        <EmailNotificationForm>
          <input placeholder="E-mail" />
          <button>Go</button>
        </EmailNotificationForm>
        <EmailNotificationLinks>
          <p>Product</p>
          <p>Company</p>
          <p>Learn More</p>
          <p>Get in Touch</p>
        </EmailNotificationLinks>
        <EmailNotificationIcons>
          <p> ©HealthyCafe PTY LTD 2020. All rights reserved</p>
        </EmailNotificationIcons>
      </EmailNotificationContainer>
    </Container>
  );
}

export default EmailNotification;

{
  /* <div className="emailNotification">
<img src={plant} className="emailNotification__plant" />
<div className="emailNotification__mainbody">
  <div className="emailNotification__header">
    <p className="emailNotification__title">
      Get Notified About Healthy Foods
    </p>
    <p className="emailNotification__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
      tortor tellus, id hendrerit ante iaculis
    </p>
  </div>

  <form className="emailNotification__form">
    <input placeholder="E-mail" />
    <button>Go</button>
  </form>
  <div className="emailNotification__links">
    <p>Product</p>
    <p>Company</p>
    <p>Learn More</p>
    <p>Get in Touch</p>
  </div>
</div>

<div className="emailNotification__icons">
  <p className="emailNotification__iconsText">
    {" "}
    ©HealthyCafe PTY LTD 2020. All rights reserved
  </p>
</div>
</div> */
}
