import { useState } from "react";
import  styled from 'styled-components';
import { Navbar } from "./components/Navbar";
import { GlobalStyle } from "./GlobalStyles";
import { Hero } from "./components/Hero";
import { SliderData } from "./data/SliderData";
import { menuData } from "./data/MenuData";

import { Dropdown } from "./Dropdown";



const AppContainer = styled.div`
  transition: .3s ease;
  &.active {
    transform: translateX(-300px);
  }
  
`


function App() {
  const [click, setClick] = useState(false);

  const handleSlide = () => setClick(!click);
  const closeMenu = () => {
    // setClick(false)
  };
  return (
    <AppContainer className={click ?'AppContainer active ' : 'AppContainer'}>
      <GlobalStyle />
      <Navbar
        click={click}
        handleSlide={handleSlide}
        closeMenu={closeMenu} />
      <Dropdown menuData={menuData} />
      <Hero slides={SliderData} />
    </AppContainer>
  );
}

export default App;
