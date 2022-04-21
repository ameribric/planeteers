import React, { useState, useEffect } from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer() {

  const [planeteer, setPlaneteer] = useState([])
  const [allPlaneteer, setAllPlaneteer] = useState([])

  const request = async () => {
    let req = await fetch('http://localhost:8003/planeteers')
    let res = await req.json()
    setPlaneteer(res)
    setAllPlaneteer(res)
  }

  useEffect(request, [])


  return (
    <ul className="cards">
      <Planeteer planeteer={planeteer} setPlaneteer={setPlaneteer} allPlaneteer={allPlaneteer} />

    </ul>
  );
}

export default PlaneteersContainer;
