import React, { useState } from "react";
import Header from "./Components/Header";
import Photo from "./Components/Photo";
import styled from "styled-components";
import "./App.css";

const AppStyle = styled.div`
  background-image: url("https://images.unsplash.com/photo-1534823983341-d4e6e4aa046c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=651&q=80");
  max-width: 1200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  margin: 0 auto;
  height: 800px;
  color: white;
`;

const App = () => {
  const [profileName, setProfileName] = useState("Zach");
  const [title, setTitle] = useState("NASA Photo of the Day");

  return (
    <AppStyle>
      <Header name={profileName} title={title} />
      <Photo />
    </AppStyle>
  );
};

export default App;
