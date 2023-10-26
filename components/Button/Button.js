import React from "react";
import "./Button.css";

export default function Button({ text, link }) {
  return (
    <button className="button">
      {link ? <a href={link}>{text}</a> : text}
    </button>
  );
}
