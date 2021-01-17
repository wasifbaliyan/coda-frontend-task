import React from "react";
import "./players-list-item.styles.css";

export default function PlayersListItem({ player }) {
  return (
    <li className="list-item">
      <div className="img-container">
        <img
          className="list-img"
          src={player["Profile Image"]}
          alt={player.Name}
        />
      </div>
      <div className="details">
        <span>{player.Name}</span>
        <span className="bet">Bet: {player.Bet}</span>
      </div>
      <div className="price">
        <span className="price">Price: {player.Price}</span>
      </div>
    </li>
  );
}
