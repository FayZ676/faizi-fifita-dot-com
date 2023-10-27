import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./ProjectNavbar.css";

export default function ProjectNavbar() {
  return (
    <nav className="navbar">
      <div className="socials">
        <Link href="https://github.com/FayZ676">
          <AiFillGithub className="social-icon" />
        </Link>
      </div>
      <div className="page-links">
        <Link href="/projects/" className="link-text">
          Projects
        </Link>
      </div>
    </nav>
  );
}
