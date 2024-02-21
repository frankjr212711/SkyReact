import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import './Navbar.css';

export const Navbar = ({click, handleSlide, closeMenu}) => {

  const Nav = styled.nav`
    position: fixed;
    top: 0px;
    left: 0%;
    width: 100%;
    background: rgb(255, 255, 255);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3);
    font-family: "Jost";
    transition: .3s ease;
  `;

  const NavTop = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #eee;
  `;
  const NavTopContent = styled.div`
    ${'' /* width: 80%; */}
    ${'' /* margin: auto; */}
    ${'' /* height: 32px;
    padding: 0 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between; */}
  `;

  const NavDown = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const NavDownContent = styled.div`
  ${'' /* width: 80%;
 
  padding: 0 4rem;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between; */}
`;
  const Logo = styled(Link)`
    font-size: 2rem;
    
  `;
  const NavMenu = styled.div`
  
  `;

  const NavLinks = styled(Link)`
    font-size: 14px;
    margin-left: 1.5rem;
    text-transform: uppercase;
  `;


 



  return (
    <Nav className={click ? "nav active" : "nav"}>
      <NavTop>
        <NavTopContent className="navTopContent">
          <span
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "10px",
              fontSize: "12px",
            }}
          >
            <i className="fa fa-envelope"></i>
            <Link to="mailto:info@skywalkergh.com">info@skywalkergh.com</Link>
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "10px",
              fontSize: "12px",
            }}
          >
            <i className="fa fa-phone"></i>
            <Link to="tel:">+233 245 853 855 | +233 245 853 855</Link>
          </span>
        </NavTopContent>
      </NavTop>

      <NavDown>
        <NavDownContent className="navDownContent">
          {/* <div>
            <i className="fa fa-search"></i>
            <input type="search" name="search_bar" />
          </div> */}
          <Logo to="/">LOGO</Logo>
     
       

        <NavMenu className="navMenu">
          {menuData.map((item, index) => (
            <NavLinks to={item.link} key={index} onClick={closeMenu} className="navLink">
              {item.title}
            </NavLinks>
          ))}
       
        </NavMenu>
        <div className="menu-btn" onClick={handleSlide}>
            <span></span>
            <span></span>
            <span></span>
          </div>
      </NavDownContent>
      </NavDown>
     
    </Nav>
  );
};
