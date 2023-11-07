import Image from 'next/image'
import styles from './page.module.css';
import { FaDownload, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';


function HomePage() {
  return (
    <div className={`${styles.homeContainer}`}>
      <div className={`${styles.imgBackground}`}>
        <div className={styles.shape}></div>
        <div className={styles.imageBox}>
        <Image className={styles.personalImage} src="/IMG-20230629-WA0045.jpg" alt="personal image" width={400} height={500}  />
        </div>
      </div>
      <div className={styles.homeTextContainer}>
        <h1 className={styles.primaryHeading}>
      Hi, <span>I'm Rahma Esmail</span>. A Frontend Web Developer.
      </h1>

     <div className={styles.socialIconsContainer}>
       <div className={styles.socialIconsBox}>
         <Link className={styles.icon} href="https://www.linkedin.com/in/rahma-esmail" target="_blank"><FaLinkedinIn/></Link>
       </div>
       <div className={styles.socialIconsBox}>
         <Link className={styles.icon} href="https://github.com/RahmaaEsmail" target="_blank"><FaGithub/></Link>
       </div>
       <div className={styles.socialIconsBox}>
         <Link className={styles.icon} href="https://wa.me/01205930760" target="_blank"><FaWhatsapp/></Link>
       </div>
     </div>

     <div className={styles.resumeBox}>
       <Link className={styles.resume} rel="noreferrer" href="https://drive.google.com/u/0/uc?id=1lKVt5hiSOQohht4aFLQKXOSdNkTgC6MT&export=download" target='_self' download>
        <span>Download Cv</span>
       <span><FaDownload/></span>
       </Link>
     </div>
      </div>
    </div>
  );
}
export default HomePage;
