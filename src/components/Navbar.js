import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";

// import './Navbar.css';
const Nav = styled.nav`
position: fixed;
top: 0px;
left: 0%;
width: 100%;
background: rgb(255, 255, 255);
box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3);
transition: 0.3s ease;
z-index: 999;
opacity: .9
`;
const NavTop = styled.div`
width: 100%;
height: 50px;
border-bottom: 1px solid #eee;
background: #f2f2f2;
`;
const NavTopContent = styled.div`
width: 80%;
height: inherit;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
transition: 0.3s ease;

@media screen and (max-width: 768px) {
  width: 100%;
  margin: auto;
  padding: 0 2rem;
}
`;
const NavDown = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
background: #000044;
background: rgb(255, 255, 255);
`;
const NavDownContent = styled.div`
width: 80%;
height: 100%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
transition: 0.3s ease;

@media screen and (max-width: 768px) {
  width: 100%;
  margin: auto;
  padding: 0 2rem;
}
`;
const Logo = styled(Link)`
font-size: 2rem;
color: #424242;
color: #000;
`;
const NavMenu = styled.div`
@media screen and (max-width: 768px) {
  display: none;
}
`;
const NavLinks = styled(Link)`
font-size: 17px;
margin-left: 1.5rem;

color: #424242;
`;
const MenuBtn = styled.div`
width: 32px;
height: 32px;
cursor: pointer;
position: relative;
display: none;

@media screen and (max-width: 768px) {
  display: block;
}
`;
const MenuSpan = styled.span`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 25px;
height: 4px;
background: #424242;
`;
const NavTopSpan = styled.span`
display: flex;
align-items: center;
column-gap: 10px;
color: #424242;
`;
const NavTopLink = styled(Link)`
color: #424242;
font-size: 14px;
`;



export const Navbar = ({ click, handleSlide, closeMenu }) => {
 

  return (
    <Nav className={click ? "nav active" : "nav"}>
      <NavTop className="navTop">
        <NavTopContent className="navTopContent">
          <NavTopSpan>
            <i className="fa fa-envelope"></i>
            <NavTopLink to="mailto:info@skywalkergh.com">
              info@skywalkergh.com
            </NavTopLink>
          </NavTopSpan>

          <NavTopSpan>
            <i className="fa fa-phone"></i>
            <NavTopLink to="tel:">
              +233 245 853 855 | +233 245 853 855
            </NavTopLink>
          </NavTopSpan>
        </NavTopContent>
      </NavTop>

      <NavDown className="navDown">
        <NavDownContent className="navDownContent">
          <Logo to="/" className="logo-icon">
            LOGO
          </Logo>

          <NavMenu className="navMenu">
            {menuData.map((item, index) => (
              <NavLinks
                to={item.link}
                key={index}
                onClick={closeMenu}
                className="navLinks"
              >
                {item.title}
              </NavLinks>
            ))}
          </NavMenu>

          <MenuBtn onClick={handleSlide}>
            <MenuSpan style={{ top: "25%" }}></MenuSpan>
            <MenuSpan></MenuSpan>
            <MenuSpan style={{ top: "75%" }}></MenuSpan>
          </MenuBtn>
          
        </NavDownContent>
      </NavDown>
    </Nav>
  );
};
