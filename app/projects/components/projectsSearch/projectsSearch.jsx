import { memo } from "react";
import styles from "./projectsSearch.module.css";

function ProjectsSearch({ setQuery }) {
  return (
    <input
      type="search"
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for project...."
      className={styles.searchInput}
    />
  );
}

export default memo(ProjectsSearch);
