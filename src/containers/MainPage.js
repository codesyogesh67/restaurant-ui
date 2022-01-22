import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Section from "../components/section";
import Reservation from "../components/reservation";
import Services from "../components/services";
import Foods from "../components/foods";
import MobileApp from "../components/mobileApp";
import EmailNotification from "../components/emailNotification";

function MainPage() {
  return (
    <div className="mainPage">
      <Header />
      <Banner />
      <Section />
      <Reservation />
      <Services />
      <Foods />
      <MobileApp />
      <EmailNotification />
    </div>
  );
}

export default MainPage;
