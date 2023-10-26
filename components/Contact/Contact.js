"use client";

import React, { useState } from "react";
import supabase from "@/utils/supabase";
import Button from "../Button/Button";
import "./Contact.css";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");

  function handleChange(event) {
    switch (event.target.id) {
      case "message":
        setMessage(event.target.value);
        break;
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (message !== "" && name !== "" && email !== "") {
      const response = await supabase
        .from("messages")
        .insert([{ fullName: name, email: email, message: message }])
        .select();
      console.log(response);

      setMessage("");
      setName("");
      setEmail("");
      setResponse("Thanks for the message! 🎉");
    } else {
      setResponse("Please fill out all fields.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="left-column">
        <div className="input-group">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            id="message"
            onChange={handleChange}
            value={message}
            className="input-field message-input"
          ></textarea>
        </div>
      </div>
      <div className="right-column">
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            id="name"
            onChange={handleChange}
            value={name}
            className="input-field"
          ></input>
        </div>
        <div className="input-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            onChange={handleChange}
            value={email}
            className="input-field"
          ></input>
        </div>
        <div className="submit-group">
          <Button text="Send" />
          <p className="response">{response}</p>
        </div>
      </div>
    </form>
  );
}
