import React from "react";
import styled from "styled-components";

const TitleStyle = styled.h2`
    color: white;
    text-align: center;
`
const NavStyle = styled.nav`
    background: #0892d0;
`
const ParaStyle = styled.p`
    color: white;
    padding: 3%;
    text-align: center;
`


const Header = prop => {
  return (
    <NavStyle>
      <TitleStyle>
        Hello, {prop.name}. It's the {prop.title}
      </TitleStyle>
      <ParaStyle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus unde
        perspiciatis minima animi qui delectus tenetur provident adipisci
        reprehenderit doloribus illum vitae, voluptatibus ut libero enim cumque
        necessitatibus sit incidunt?
      </ParaStyle>
    </NavStyle>
  );
};

export default Header;
