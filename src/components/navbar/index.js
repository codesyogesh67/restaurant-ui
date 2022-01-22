import React from "react";
import {
  NavbarContainer,
  Logo,
  LogoText,
  Links,
  NavbarP,
  ProfileIcon,
  Bars,
} from "./NavbarElements";

import { Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <LogoText>HealthyCafe</LogoText>
      </Logo>
      <Links>
        <NavbarP>Home</NavbarP>
        <NavbarP>Reservation</NavbarP>
        <NavbarP>Services</NavbarP>
        <NavbarP>Foods</NavbarP>
      </Links>
      <ProfileIcon>
        <Avatar>R</Avatar>
      </ProfileIcon>
      <Bars />
    </NavbarContainer>
  );
};

export default Navbar;
