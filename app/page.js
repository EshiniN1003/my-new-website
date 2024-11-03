import { userData } from "@/data/user-data";
import Contributions from "./components/contributions";
import HeroSection from "./components/hero-section";
import GitLanguage from "./components/language";
import Projects from "./components/projects";
import Rank from "./components/rank";
import GitStats from "./components/stats";

const profile = {
  name: "Eshini Nethmini",
  bio: "Passionate IT undergraduate at the University of Sri Jayawardenepura.Professional & Ambitious. I love creating websites and developing engaging front-end experiences",
  avatar_url: "https://avatars.githubusercontent.com/u/161203306?v=4", 
  location: "Homagama, Sri Lanka",
  email: "eshini.nethmini@gmail.com",
  public_repos: 4,
};


const projects = {
  items: [
    {
      name: "Personal Portfolio",
      description: "A personal portfolio showcasing my skills, projects, and journey as a software developer.",
      html_url: "https://github.com/FHSS-USJ/assignment-01-EshiniN1003.git",
    },
    {
      name: "Movie Web",
      description: "A web application that allows users to explore movie information, reviews, and ratings.",
      html_url: "https://github.com/FHSS-USJ/assignment-02-EshiniN1003.git",
    },
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection profile={profile} />
      <GitStats profile={profile} />
      <Projects projects={projects.items} profile={profile} />
      <GitLanguage />
      <Rank />
      <Contributions />
    </>
  );
}


export function generateMetadata() {
  return {
    title: `GitHub Profile of ${profile.name}`,
    description: profile.bio,
  };
}
