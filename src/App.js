import React from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import styled from "styled-components";
import Numbercounter from "./components/Numbercounter";
import Employees from "../src/Employees.json";

// styled components
const JSXStyled = styled.div`
  padding: 2em;
`;

function App() {
  const userJSONData = `{
    "name": "Alex C",
    "age": 2,
     "city": "houston"
  }`;
  
  const userObj = JSON.parse(userJSONData);
  console.log(userObj);
  console.log(userJSONData);


  return (
    // <React.Fragment>
    // </React.Fragment>

    // <>
    <Router>
      {/* adding link content after Router */}
      <JSXStyled>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </JSXStyled>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>

      <div className="App">
        <FunctionalComponent />
        <ClassComponent />
        <Numbercounter />
        {/* {console.log(Employees)} */}
        <p>{Employees[0].name}</p>
        <p>{Employees[0].age}</p>
        <p>{Employees[0].age}</p>
      </div>
    </Router>
    // </>
  );
}

export default App;
