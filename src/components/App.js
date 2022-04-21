import React from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";
import Planeteer from "./Planeteer";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <RandomButton />
      <PlaneteersContainer />
      <Planeteer />
    </div>
  );
}

export default App;
