import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./ProjectsNavbar.css";

export default function ProjectsNavbar() {
  return (
    <nav className="navbar">
      <div className="socials">
        <Link href="#">
          <AiFillGithub className="social-icon" />
        </Link>
        <Link href="#">
          <AiFillLinkedin className="social-icon" />
        </Link>
      </div>
      <div className="page-links">
        <Link href="/" className="link-text">
          Home
        </Link>
      </div>
    </nav>
  );
}
