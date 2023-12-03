import { FaGithub } from "react-icons/fa";
import styles from "./ProjectCard.module.css";
import Image from "next/image";

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={project.image} alt={project.title} />
      </div>
      <div className={styles.cardBody}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <a href={project.demo} target="_blank">
          View Demo
        </a>
        <a href={project.github} target="_blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
