import React from "react";
import Link from "next/link";
import "./Project.css";

function formatDate(dateStr) {
  if (dateStr === null) {
    return "Present";
  }
  const options = { year: "numeric", month: "long" };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}

export default function Project({ project }) {
  const projectLink = `/projects/${project.id}`;

  const formattedStartDate = formatDate(project.startDate);
  const formattedEndDate = formatDate(project.endDate);

  return (
    <a href={projectLink} className={`project ${project.featuredStatus}`}>
      <div className="date-and-status">
        <p className="status">{project.status}</p>
        <div className="date">
          <p>
            {formattedStartDate} – {formattedEndDate}
          </p>
        </div>
      </div>
      <h2 className="title">{project.title}</h2>
      <p className="description">{project.description}</p>
    </a>
  );
}
