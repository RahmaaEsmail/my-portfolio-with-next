"use client";
import { useEffect, useState } from "react";
import { projects } from "@/public/data/projects";
import PageTitle from "../components/title/PageTitle";
import styles from "./page.module.css";
import Search from "../components/search/Search";
import Filter from "../components/filter/Filter";
import NotFound from "../components/notfound/NotFound";
import ProjectCard from "../components/card/ProjectCard";

function ProjectPage() {
  const listOfProjects = projects;
  const [query, setQuery] = useState("");
  const [filteredValue, setFilteredValue] = useState("all");
  const [filteredList, setFilteredList] = useState(listOfProjects);

  function handleSearch(list) {
    if (query.length > 1) {
      const searchedProject = listOfProjects.filter((project) =>
        project.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredList(searchedProject);
    } else {
      setFilteredList(list);
    }
  }

  useEffect(() => {
    if (filteredValue !== "all") {
      const filteredProject = listOfProjects.filter(
        (project) =>
          project.type.trim().toLowerCase() ===
          filteredValue.trim().toLowerCase()
      );
      handleSearch(filteredProject);
    } else {
      handleSearch(listOfProjects);
    }
  }, [query, filteredValue]);

  return (
    <div className={styles.projectPage}>
      <PageTitle secondaryTitle="my work" primaryTitle="my portfolio" />

      <div className={styles.searchContainer}>
        <Search query={query} onChange={setQuery} />
        <Filter filteredValue={filteredValue} onChange={setFilteredValue} />
      </div>

      {filteredList.length > 0 ? (
        <div className={styles.projectContainer}>
          {filteredList.map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
export default ProjectPage;
