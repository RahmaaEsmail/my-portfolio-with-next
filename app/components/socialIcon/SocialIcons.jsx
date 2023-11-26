import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import styles from './SocilIcons.module.css';

function SocialIcons() {
    return (
        <div className={styles.socialIconsContainer}>
        <div className={styles.socialIconsBox}>
          <a className={styles.icon} href="https://www.linkedin.com/in/rahma-esmail" target="_blank"><FaLinkedinIn/></a>
        </div>
        <div className={styles.socialIconsBox}>
          <a className={styles.icon} href="https://github.com/RahmaaEsmail" target="_blank"><FaGithub/></a>
        </div>
        <div className={styles.socialIconsBox}>
          <a className={styles.icon} href="https://wa.me/01205930760" target="_blank"><FaWhatsapp/></a>
        </div>
        <div className={styles.socialIconsBox}>
          <a className={styles.icon} href="mailto:rahmaaesmail26@gmail.com"><FaEnvelope/></a>
        </div>
        
      </div>
    )
}

export default SocialIcons
