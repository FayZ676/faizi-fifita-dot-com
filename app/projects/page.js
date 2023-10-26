import React from "react";
import Link from "next/link";
import ProjectsNavbar from "@/components/ProjectsNavbar/ProjectsNavbar";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Project from "@/components/Project/Project";
import supabase from "@/utils/supabase";
import "./page.css";

export const revalidate = 0;

export default async function Projects() {
  const { data: projects } = await supabase.from("projects").select("");
  return (
    <main className="main">
      <ProjectsNavbar />
      <section className="section-grid">
        <h2 className="header">Projects 🪜</h2>
        <div className="all-projects-grid">
          <FeaturedProjects projects={projects} />
          <div className="other-projects-grid">
            {projects.map(
              (project) =>
                !project.featuredStatus && (
                  <Project project={project} key={project.id} />
                )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
