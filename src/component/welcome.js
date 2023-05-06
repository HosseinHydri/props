import React from "react";
const Welcome = (props) => {
  return <div>{props.children}</div>;
};

const Website = (props) => {
  return (
    <>
      <Welcome>
        <h1>Welcome to React World Developer</h1>
        <h1>Test</h1>
      </Welcome>
      <h2>React</h2>
      <p onClick={props.handler}>
        My Name is {props.name} And I Am {props.age} years old
      </p>
    </>
  );
};

export default Website;
