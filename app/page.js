import Link from "next/link";
import supabase from "@/utils/supabase";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Navbar from "@/components/Navbar/Navbar";
import Stack from "@/components/Stack/Stack";
import Contact from "@/components/Contact/Contact";
import Divider from "@/components/Divider/Divider";
import Button from "@/components/Button/Button";
import FunFactsCard from "@/components/FunFactsCard/FunFactsCard";
import "./page.css";

export const revalidate = 0;

export default async function Home() {
  const { data: projects } = await supabase.from("projects").select("");
  const { data: facts } = await supabase.from("fun-facts").select("");

  return (
    <main className="main">
      <div className="main-content">
        <Navbar />
        <section id="about" className="section">
          <div className="about">
            <div className="intro">
              <h2 className="header">
                Hey there,
                <br />
                I&apos;m glad you&apos;re here 🥳
              </h2>
              <p className="subheader">
                I&apos;m Faizi, a full-stack software developer from Oregon
                focussed on building open source, well designed products that
                make life easier.
              </p>
            </div>
            <FunFactsCard facts={facts} />
          </div>
        </section>
        <Divider />
        <section id="featuredProjects" className="section">
          <h2 className="header">Projects 🪜</h2>
          <div className="featured-projects">
            <FeaturedProjects projects={projects} />
            <div className="flex-row">
              <Button text="See more" link="/projects" />
            </div>
          </div>
        </section>
        <section className="section">
          <h2 className="header">Favorite Tools 🛠️</h2>
          <Stack />
        </section>
        <Divider />
        <section id="contact" className="section">
          <h2 className="header">Send Me A Message 👋</h2>
          <Contact />
        </section>
      </div>
    </main>
  );
}
