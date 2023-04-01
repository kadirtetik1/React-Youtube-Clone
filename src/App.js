import React from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Video from "./Pages/Video";
import HomePage from "./Pages/HomePage";
import TopMenu from "./components/TopMenu";

// import {
//   BrowserRouter,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,} from "react-router-dom";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #0f0f0f;
  
`;
const Main = styled.div`
  flex: 6;
`;

const Wrapper = styled.div`
padding: 22px 60px;


`;

function App() {
  return (
    <Container>


    <Menu/>
      <Main>
        <Navbar />
        <Wrapper>

          <TopMenu/>
        <HomePage/>
        
        </Wrapper>
      </Main>

    </Container>
    
    
  );
}

export default App;
