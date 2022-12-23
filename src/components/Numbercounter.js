import React, { useState,  } from "react";
import styled from "styled-components";

const Numbercounter = () => {
  const [counter, setCounter] = useState(0);
  const Button = styled.button`
    margin: 6px;
  `;

  const IncrementCounter = () => {
    setCounter(counter + 1);
  };
  const DecrementCounter = () => {
    setCounter(counter - 1);
  };


  // useEffect(() => {
  //   alert('Welcome to side hustle internship cohort 5.0')
   
  //  }, []);
   
  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={DecrementCounter}> Subtract </Button>
      <Button onClick={IncrementCounter}> Add </Button>
    </div>
  );
};

export default Numbercounter;
