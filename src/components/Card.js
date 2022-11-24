import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({ imageSource, title, text,  button }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Los mejors productos del mercado perifericos a tu presupuesto no te quedes sin ser un gran gamer ."}
        </p>
        <a
          href={ button ?  button : "#!"}
         
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          IR A {title}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  bu: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
