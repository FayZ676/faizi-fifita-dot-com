import React from "react";
import Link from "next/link";
import Project from "../Project/Project";
import "./FeaturedProjects.css";

export default function FeaturedProjects({ projects }) {
  return (
    <div className="featured-projects-grid">
      {projects.map(
        (project) =>
          project.featuredStatus && (
            <Project project={project} key={project.id} />
          )
      )}
    </div>
  );
}
