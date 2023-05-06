import React from "react";
import Website, { Welcome } from "./component/welcome";
function App() {
  const clickHandler = (name) => {
    alert("Hi" + " " + name);
  };
  return (
    <div>
      <Website name="Ryan" age="22" handler={() => clickHandler("Ryan")} />
      <Website
        name="Hossein"
        age="23"
        handler={() => clickHandler("Hossein")}
      />
    </div>
  );
}

export default App;
