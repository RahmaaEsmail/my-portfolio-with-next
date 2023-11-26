import { experiences } from "@/public/data/experience";
import PageTitle from "../components/title/PageTitle";
import styles from "./page.module.css";
import { skills } from "@/public/data/skills";

function AboutPage() {
  return (
    <div className="container">
      <PageTitle secondaryTitle="My states" primaryTitle={`ABOUT ME`} />

      <div className={styles.boxes}>

         <div className={styles.box}>
         <h2 className={styles.aboutBoxTitle}>Who am I ? </h2>
        <p>
          Hello there, My name is Rahma Esmail, I'm a React.js Frontend Web
          Developer, and I enjoy building everything with JavaScript.
        </p>
        <p>
          During this duration, I have learned a lot of technologies, created
          many cool website, and contributed to open-source projects.
        </p>
        <p>
          So I'm always seeking to have an opportunity that matches my skills,
          to make the best use of all that I have learned
        </p>
         </div>

         <div className={styles.box}>
         <h2 className={styles.aboutBoxTitle}>Education :</h2>
        <p>
        Studies Bachelor of Computer Science - Computer Science department at faculty of Computers and Information , Tanta university. 2020 - 2024
        </p>
         </div>

         <div className={styles.box}>
         <h2 className={styles.aboutBoxTitle}>Experience :</h2>
         {experiences.map(experience => {
          return (
            <p key={experience.id}>{experience.id}) {experience.experience}, {experience.type}, {experience.date}</p>
          )
         })}
        
         </div>

         <div className={styles.box}>
            <h2 className={styles.aboutBoxTitle}>Certificates :</h2>
            <p>1) Route certified Frontend Web Developer</p>
            <p>2) Udemy certified The Ultimate React Course 2023: React, Redux & More</p>
            <p>3) Information Technology Institute (ITI) certified Frontend Web Developer</p>
            <a className={styles.viewMore}  href="https://github.com/RahmaaEsmail/certifications" target="_blank">View More</a>
         </div>
      </div>

      <div className={styles.skillBox}>
            <h2 className={styles.aboutBoxTitle}>My Skills</h2>
            <div className={styles.skills}>
              {skills.map(skill => {
                return (
                  <div key={skill.id} className={styles.skill}>
                    <div>
                    <img className={skill.type ? styles.svgImage :""} src={skill.image}/> 
                    </div>
                    <h4>{skill.name}</h4>
                  </div>
                )
              })}
            </div>
         </div>
    </div>
  );
}
export default AboutPage;
