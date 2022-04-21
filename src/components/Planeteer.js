import React from "react";

function Planeteer(props) {
  const { id, name, fromUSA, born, bio, quote, pictureUrl, twitter } = props;
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={pictureUrl}
          alt={id}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{quote}, {bio} </p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>{born}</p>
            <p>
              {
               fromUSA? "USA-BASED" : "WORKING OVERSEAS"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
