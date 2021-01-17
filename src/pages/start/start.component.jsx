import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlayerBox from "../../components/player-box/player-box.component";
import "./start.styles.css";

export default function Start({ location }) {
  const [opposingBet, setOpposingBet] = useState();
  useEffect(() => {
    setOpposingBet(Math.floor(Math.random() * 9) + 1);
  }, []);
  return (
    <main className="start-container">
      <div className="winning-bet">
        <h1 className="winning-bet-heading">{opposingBet}</h1>
      </div>
      <section className="currently-playing">
        {location.state.selected.map((player) => (
          <PlayerBox
            key={player.Name}
            player={player}
            oppositeBet={opposingBet}
          />
        ))}
      </section>
      <Link to="/" className="back-btn">
        Back
      </Link>
    </main>
  );
}
