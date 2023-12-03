"use client";
import { useEffect, useState } from "react";
import { projects } from "@/public/data/projects";
import styles from "./page.module.css";
import ProjectsSearch from "./components/projectsSearch/projectsSearch";
import ProjectsFilter from "./components/projectsFilter/ProjectsFilter";
import NotFound from "./components/notfound/NotFound";
import ProjectCard from "./components/projectCard/ProjectCard";
import PageHeading from "../components/pageHeading/PageHeading";

function ProjectPage() {
  const [query, setQuery] = useState("");
  const [filteredValue, setFilteredValue] = useState("all");
  const [filteredList, setFilteredList] = useState(projects);

  function handleSearch(list) {
    if (query.length === 0) {
      setFilteredList(list);
      return;
    }
    const searchedProject = list.filter((project) =>
      project.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredList(searchedProject);
  }

  function handleFilter() {
    return projects.filter((project) => project.type === filteredValue);
  }

  useEffect(() => {
    if (filteredValue === "all") {
      handleSearch(projects);
      return;
    }
    handleSearch(handleFilter());

  }, [query, filteredValue]);

  return (
    <main className={styles.projectPage}>
      <PageHeading secondaryTitle="my work" primaryTitle="my portfolio" />

      <div className={styles.searchContainer}>
        <ProjectsSearch setQuery={setQuery} />
        <ProjectsFilter
          filteredValue={filteredValue}
          setFilteredValue={setFilteredValue}
        />
      </div>

      {filteredList.length > 0 ? (
        <div className={styles.projectContainer}>
          {filteredList.map(project => <ProjectCard project={project} key={project.id} />)}
        </div>
      ) : <NotFound message="No Projects Found , please try again!" />
      }
    </main>
  );
}
export default ProjectPage;
