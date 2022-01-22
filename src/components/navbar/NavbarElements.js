import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export const NavbarContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const Logo = styled.div`
  margin-right: 2rem;
`;

export const LogoText = styled.p`
 
  color #ff4820;
  font-weight: 700;
  font-family: Poppins;
  font-size: 28px;
  line-height: 25px;
  letter-spacing: -0.05em;
`;

export const Links = styled.div`
  display: none;

  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
  }
`;

export const NavbarP = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-transform: capitalize;

  margin: 0 1rem;
  cursor: pointer;
`;

export const ProfileIcon = styled.div`
  display: none;

  @media only screen and (min-width: 992px) {
    display: block;
    position: absolute;
    right: 15px;
  }
`;

export const Bars = styled(MenuIcon)`
  font-size: 2rem;
  position: absolute;
  right: 15px;
  cursor: pointer;

  @media only screen and (min-width: 992px) {
    display: none !important;
  }
`;
