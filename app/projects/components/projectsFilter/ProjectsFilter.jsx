import styles from "./ProjectsFilter.module.css";

function ProjectsFilter({ filteredValue, setFilteredValue }) {
  return (
    <select
      value={filteredValue}
      onChange={(e) => setFilteredValue(e.target.value)}
      className={styles.select}
    >
      <option value="all">All</option>
      <option value="next">Next</option>
      <option value="react">React</option>
      <option value="js">Vanilla JavaScript</option>
      <option value="html-css">HTML & CSS</option>
    </select>
  );
}

export default ProjectsFilter;
