import styled from "styled-components";
import { Link } from "react-router-dom";

const DropdownContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(300px);
  z-index: 999;
  width: 300px;
  height: 100%;
  background: #cd853f;
  background: #fff;
  top: 0;
  right: 0;

  transition: 0.3s ease-in-out;
  opacity: 0.9;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Icon = styled.i``;

const DropdownWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #171717;
  background: #fff;
`;
const DropdownMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;
const DropdownLink = styled(Link)`
  width: 100%;
  display: block;
  color: #171717;
  padding: 0.25rem 1rem;
  border-bottom: 1px solid #181818;
`;
const CloseIcon = styled.i``;
const DropIcon = styled.i`
  width: 40px;
  height: 33px;
  background: rgb(255, 255, 255);
  background: #171717;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 32px;
  font-size: 20px;
  border-bottom: 1px solid #171717;
  margin: 0.5px;

  cursor: pointer;
`;
const DropItemsFlex = styled.div`
  display: flex;
  align-items: center;
`;
const DropHeader = styled.div`
  height: 100px;
  width: 100%;
  background: #000;
  display: flex;
  align-items: center;
  column-gap: 20px;
  color: #fff;
  padding: 0 2rem;
  
  input {
    width: 200px;
    font-size: 1.25rem;
    outline: none;
    padding: .25rem .5rem;
  }

`;

export const Dropdown = ({ menuData }) => {
  return (
    <DropdownContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropHeader>
          <i className="fa fa-search"></i>
          <input type="search" />
        </DropHeader>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropItemsFlex>
              <DropIcon className="fa fa-plus"></DropIcon>
              <DropdownLink to={item.link} key={index}>
                {item.title}
              </DropdownLink>
            </DropItemsFlex>
          ))}
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  );
};
