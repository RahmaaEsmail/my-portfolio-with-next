import styles from "./page.module.css";
import PageHeading from "../components/pageHeading/PageHeading";
import ExperienceList from "./components/experienceList/ExperienceList";
import SkillsList from "./components/skillsList/SkillsList";

function AboutPage() {
  return (
    <main className="container">
      <PageHeading secondaryTitle="My states" primaryTitle={`ABOUT ME`} />

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
            Studies Bachelor of Computer Science - Computer Science department
            at faculty of Computers and Information , Tanta university. 2020 -
            2024
          </p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.aboutBoxTitle}>Experience :</h2>
          <ExperienceList />
        </div>

        <div className={styles.box}>
          <h2 className={styles.aboutBoxTitle}>Certificates :</h2>
          <p>1&#41; Route certified Frontend Web Developer</p>
          <p>
            2&#41; Udemy certified The Ultimate React Course 2023: React, Redux
            & More
          </p>
          <p>
            3&#41; Information Technology Institute (ITI) certified Frontend Web
            Developer
          </p>
          <a
            className={styles.viewMore}
            href="https://github.com/RahmaaEsmail/certifications"
            target="_blank"
          >
            View More
          </a>
        </div>
      </div>

      <div className={styles.skillBox}>
        <h2 className={styles.aboutBoxTitle}>My Skills</h2>
        <SkillsList />
      </div>
    </main>
  );
}
export default AboutPage;
