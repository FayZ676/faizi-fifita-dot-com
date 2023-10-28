"use client";

import React, { useState, useEffect } from "react";
import "./FunFactsCard.css";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function FunFactsCard({ facts }) {
  const [currentFact, setCurrentFact] = useState("");

  function getRandomFact() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * facts.length);
    } while (facts[randomIndex].fact === currentFact);

    setCurrentFact(facts[randomIndex].fact);
  }

  useEffect(() => {
    getRandomFact(); // Display a random fact when the component first loads
  }, [facts]); // This will trigger when facts change

  return (
    <div className="fun-facts-card">
      <div className="fun-facts-card-content">
        <h3 className="fun-facts-header">Fun Fact Machine 🎰</h3>
        <p className="fun-facts-body">{currentFact}</p>
        <div className="button-row">
          <div className="click-cta-text">
            <p>Click Me!</p>
            <AiOutlineArrowRight />
          </div>
          <button onClick={getRandomFact} className="refresh-button">
            New Fact
          </button>
        </div>
      </div>
    </div>
  );
}
