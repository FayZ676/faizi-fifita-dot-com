"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";
import profilePic from "../../public/profile.jpg";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="profile">
        <Image
          src={profilePic}
          width={70}
          height={70}
          alt="Handsome Headshot of Faizi Fifita"
          className="profile-pic"
        />
        <h2 className="profile-name">Faizi Fifita</h2>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "menu-open" : ""}`}>
        <ul id="navbar-item" className="page-links">
          <li className="link-text">
            <Link href="#featuredProjects" className="link-text">
              Projects
            </Link>
          </li>
          <li className="link-text">
            <Link href="#contact" className="link-text">
              Contact
            </Link>
          </li>
        </ul>
        <ul id="navbar-item" className="socials">
          <li className="social-icon">
            <Link href="#">
              <AiFillGithub className="social-icon" />
            </Link>
          </li>
          <li className="social-icon">
            <Link href="#">
              <AiFillLinkedin className="social-icon" />
            </Link>
          </li>
        </ul>
      </div>
      <button onClick={toggleMenu} className="toggle-button">
        <AiOutlineMenu className="menu-icon" />
      </button>
    </nav>
  );
}
