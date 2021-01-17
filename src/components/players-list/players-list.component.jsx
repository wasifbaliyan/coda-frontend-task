import React from "react";
import { Link } from "react-router-dom";
import PlayersListItem from "../players-list-item/players-list-item.component";
import Logo from "../../logo.png";

import "./players-list.styles.css";

export default function PlayersList({ selected }) {
  return (
    <section className="players-list">
      <header className="players-list-header">
        <div className="img-container">
          <img className="logo-img" src={Logo} alt="Logo" />
        </div>
        <h4 className="players-list-heading">Playing 9</h4>
      </header>
      <div className="selected-players">
        <ul className="selected-list">
          {selected.map((player) => (
            <PlayersListItem key={player.Name} player={player} />
          ))}
        </ul>
      </div>
      <Link
        className="start-button"
        to={{
          pathname: "/start",

          state: { selected: selected },
        }}
      >
        Start
      </Link>
    </section>
  );
}
