import React from "react";
import styled from "styled-components";
import Lesson001 from "./lectures/Lesson001";
import ReactComponents from "./lectures/ReactComponents";
import ReactStylingPractice from "./lectures/ReactStylingPractice";

const Layout = styled.div`
padding: 0 20px;
`
const Header = styled.h3`
  color: crimson;
  padding: 3px;
  font-family: cursive;
  text-align: center;
  text-decoration: underline;
`;
// ====>>>>><<<<<<======== //
const App = () => {
  return (
    <Layout>
      <Header>Learning React Js With Angela Yu Favourite</Header>
      {/* <Lesson001/> */}
      {/* <ReactStylingPractice /> */}
      <ReactComponents/>
    </Layout>
  );
};

export default App;
