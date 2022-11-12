import React from "react";

const Card = ({ card }) => {
  const { name, description, id, icon, bgClass } = card;
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl p-6 ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
