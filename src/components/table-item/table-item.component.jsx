import React, { useState } from "react";

import "./table-item.styles.css";

export default function TableItem({ player, handleSelect }) {
  const [checked, setChecked] = useState(false);
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          onChange={(e) => setChecked(e.target.checked)}
          onClick={() => handleSelect(player, checked)}
        />
      </td>
      <td>{player.Name}</td>
      <td>
        <img
          className="table-image"
          src={player["Profile Image"]}
          alt={player.Name}
        />
      </td>
      <td>{player.Bet}</td>
      <td>{player.Price}</td>
    </tr>
  );
}
