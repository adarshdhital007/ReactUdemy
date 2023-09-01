import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestion.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>T</Avatar>
            </span>
            <div className="username__info">
              <span className="username">taylorswift</span>
              <span className="relation">Taylor Swift</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>C</Avatar>
            </span>
            <div className="username__info">
              <span className="username">cristiano</span>
              <span className="relation">Cristiano Ronaldo</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;