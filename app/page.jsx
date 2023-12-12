import { FaDownload } from "react-icons/fa";
import styles from "./page.module.css";
import SocialIcons from "./components/socialIcons/SocialIcons";
import Image from "next/image";

const FILE_NAME = "12TqVhhPcdom5TVNQ3K2_PSRdwSzAvLJg";

function HomePage() {
  return (
    <main className={`${styles.homeContainer}`}>
      <div className={`${styles.imgBackground}`}>
        <div className={styles.shape}></div>
        <div className={styles.imageBox}>
          <Image
            className={styles.personalImage}
            src="/assests/home/homeImage.jpg"
            alt="personal image"
            width={350}
            height={500}
          />
        </div>
      </div>
      <div className={styles.homeTextContainer}>
        <h1 className={styles.primaryHeading}>
          Hi, <span>I'm Rahma Esmail</span>. A Frontend Web Developer.
        </h1>

        <SocialIcons />

        <div className={styles.buttonBox}>
          <a
            href={`https://drive.google.com/u/1/uc?id=${FILE_NAME}&export=download`}
            rel="noreferrer"
            download
            target="_self"
            className={styles.button}
          >
            <span className={styles.buttonTxt}>Download CV</span>
            <span className={styles.buttonIcon}>
              <FaDownload />
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
export default HomePage;
