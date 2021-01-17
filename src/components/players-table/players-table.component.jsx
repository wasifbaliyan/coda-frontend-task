import TableItem from "../table-item/table-item.component";
import { useState } from "react";

import "./players-table.styles.css";

export default function PlayersTable({ players, setSelected, selected }) {
  const handleSelect = (player, checked) => {
    if (checked === false) {
      if (selected.length < 9) {
        setSelected([...selected, player]);
      }
    } else {
      const filtered = selected.filter((sel) => sel.Name !== player.Name);
      setSelected(filtered);
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const filteredPlayers = players.filter((player) => {
    return player.Name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return (
    <section className="table-container">
      <header className="table-header">
        <h3 className="table-heading">Select Playing 9</h3>
        <div className="search-box">
          <input
            placeholder="Search Players"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>
      <div className="table-container">
        <table style={{ width: "100%" }}>
          <thead style={{ textAlign: "left" }}>
            <tr>
              <th>Select</th>
              <th>Player Name</th>
              <th>Avatar</th>
              <th>Bet</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player) => (
              <TableItem
                handleSelect={handleSelect}
                player={player}
                key={player.Price + player.Name}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
