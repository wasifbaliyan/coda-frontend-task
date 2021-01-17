import React, { useEffect, useState } from "react";
import PlayersList from "../../components/players-list/players-list.component";
import PlayersTable from "../../components/players-table/players-table.component";

import "./game.styles.css";

const API_URL =
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json";

export default function Game() {
  const [players, setPlayers] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="container">
      <PlayersList selected={selected} />
      <PlayersTable
        setSelected={setSelected}
        selected={selected}
        players={players}
      />
    </main>
  );
}
