import React from "react";

const Planet = ({ planet }) => {
  const renderFaces = (population) => {
    let numberOfFaces = 0;
    const totalPopulation = parseInt(population);
    if (Number.isInteger(totalPopulation)) {
      numberOfFaces =
        totalPopulation > 1000000
          ? 5
          : totalPopulation > 100000
          ? 3
          : totalPopulation > 1000
          ? 2
          : 1;
    }

    const faces = [];
    for (let index = 1; index < numberOfFaces; index++) {
      faces.push(
        <i key={index} className="material-icons">
          face
        </i>
      );
    }
    return faces;
  };

  if (!planet) return null;
  return (
    <div class="col s12">
      <h2 class="header">{planet.name}</h2>
      <div class="card horizontal grey lighten-1">
        <div class="card-image orange">
          <i className="material-icons large">public</i>
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>
              {planet.name} has a diameter of {planet.diameter} and garvity of
              {planet.gravity}. This planet has terrain of {planet.terrain}.
            </p>
          </div>
          <div class="card-action">
            <span>
              Total Population: <b>{planet.population}</b>
            </span>
            <br/>
            {renderFaces(planet.population)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
