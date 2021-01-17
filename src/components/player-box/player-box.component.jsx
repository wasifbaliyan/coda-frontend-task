import React from "react";
import "./player-box.styles.css";

export default function PlayerBox({ player, oppositeBet }) {
  let winner = oppositeBet === Number(player.Bet) ? true : false;
  let styles = winner
    ? { border: "1px solid green" }
    : { border: "1px solid red" };

  return (
    <div style={styles} className="player-box">
      <div className="player-details">
        <img
          className="start-image"
          src={player["Profile Image"]}
          alt={player.Name}
        />
        <h4 className="start-heading">{player.Name}</h4>
      </div>
      <div className="other-details">
        <span className="start-bet">Bet: {player.Bet}</span>
        <br />
        <span>
          Price: {winner ? Number(player.Price) * 2 : Number(player.Price)}
        </span>
      </div>
      <div
        style={winner ? { background: "#275405" } : { background: " #ab2a19" }}
        className="bet-winner"
      >
        {winner ? "Winnner" : "Loser"}
      </div>
    </div>
  );
}
