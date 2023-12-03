import { skills } from "@/public/data/skills";
import styles from "./SkillsList.module.css";

function SkillsList() {
  return (
    <div className={styles.skills}>
      {skills.map((skill) => {
        return (
          <div key={skill.id} className={styles.skill}>
            <div>
              <img
                className={skill.type === "svg" ? styles.svgImage : ""}
                src={skill.image}
              />
            </div>
            <h4>{skill.name}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsList;
