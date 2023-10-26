import React from "react";
import Image from "next/image";
import supabase from "@/utils/supabase";
import ProjectNavbar from "@/components/ProjectNavbar/ProjectNavbar";
import "./page.css";

export const revalidate = 0;

function formatDate(dateStr) {
  if (dateStr === null) {
    return "Present";
  }
  const options = { year: "numeric", month: "long" };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}

export default async function Page({ params }) {
  const { data: project } = await supabase
    .from("projects")
    .select("")
    .eq("id", params.projectId)
    .maybeSingle();

  const { data } = supabase.storage
    .from("personal-website-bucket")
    .getPublicUrl(`projects/${project.id}/thumbnail.jpeg`);

  const formattedStartDate = formatDate(project.startDate);
  const formattedEndDate = formatDate(project.endDate);

  return (
    <main>
      <ProjectNavbar />
      <section className="section-grid">
        <div className="header-grid">
          <div className="header-text-flexbox">
            <div className="date-status-flexbox">
              <p>{project.status}</p>
              <p>
                {formattedStartDate} – {formattedEndDate}
              </p>
            </div>
            <h1 className="title">{project.title}</h1>
            <ul className="made-with-flexbox">
              {project.madeWith &&
                project.madeWith.madeWith.map((value) => (
                  <li key={value} className="made-with-item">
                    {value}
                  </li>
                ))}
            </ul>
          </div>
          <div className="thumbnail-container">
            <Image
              className="thumbnail"
              src={data.publicUrl}
              fill={true}
              alt="Project Thumbnail Image"
            />
          </div>
        </div>
        <div className="body-grid">
          <p className="description">{project.description}</p>
        </div>
      </section>
    </main>
  );
}
