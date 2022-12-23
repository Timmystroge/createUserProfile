import React from "react";
import * as calculate from "../../src/math"; // can also be imported as
// import calculate, { doublePi, tripplePi } from "../../src/math";

const Heading = () => {
  return <p>This is a Component</p>;
};

// paragraph COmponent
function Paragraph() {
  return <p>This is another Component</p>;
}

// List COmponent
function List() {
  return (
    <>
      <ul>
        <li>Pizza</li>
        <li>Bacon</li>
        <li>Burger</li>
      </ul>
    </>
  );
}

// paragraph COmponent
function Paragraph2() {
  return <p>Check this calculation out using Import & Export</p>;
}
// List COmponent
function List2() {
  return (
    <>
      <ul>
        <li>{calculate.default}</li>
        <li>{calculate.doublePi(2)}</li>
        <li>{calculate.tripplePi(3)}</li>
      </ul>
    </>
  );
}

// paragraph COmponent
function Paragraph3() {
  return <h3>Simple Calculator</h3>;
}
// List COmponent
function List3() {
  return (
    <>
      <ul>
        <li>{calculate.add(4, 5)}</li>
        <li>{calculate.multiply(2, 5)}</li>
        <li>{calculate.subtract(3, 2)}</li>
        <li>{calculate.divide(25, 5)}</li>
      </ul>
    </>
  );
}

export {
  Heading as default,
  Paragraph,
  List,
  Paragraph2,
  List2,
  Paragraph3,
  List3,
};
