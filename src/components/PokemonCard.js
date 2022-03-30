import React from "react";

const PokemonCard = ({ id, image, name, type, _callback }) => {
  const style = type + " number";
  return (
    <div className="thumb-container">
      <div className={style}>
        <div>#0{id}</div>
        <div>Type: {type}</div>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default PokemonCard;
