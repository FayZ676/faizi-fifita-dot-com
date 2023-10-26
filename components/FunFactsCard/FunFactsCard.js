"use client";

import React, { useState, useEffect } from "react";
import "./FunFactsCard.css";

export default function FunFactsCard({ facts }) {
  const [currentFact, setCurrentFact] = useState("");

  function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setCurrentFact(facts[randomIndex].fact);
  }

  useEffect(() => {
    getRandomFact(); // Display a random fact when the component first loads
  }, [facts]); // This will trigger when facts change

  return (
    <div className="fun-facts-card">
      <div className="fun-facts-card-content">
        <h3 className="fun-facts-header">Fun Fact</h3>
        <p className="fun-facts-body">{currentFact}</p>
        <button onClick={getRandomFact} className="refresh-button">
          New Fact
        </button>
      </div>
    </div>
  );
}
