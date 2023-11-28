import Link from 'next/link';
import { FaDownload} from 'react-icons/fa';
import styles from './page.module.css';
import SocialIcons from './components/socialIcon/SocialIcons';


function HomePage() {
  return (
    <div className={`${styles.homeContainer}`}>
      <div className={`${styles.imgBackground}`}>
        <div className={styles.shape}></div>
        <div className={styles.imageBox}>
        <img className={styles.personalImage} src="/assests/cuteanimated_607.jpg" alt="personal image" />
        </div>
      </div>
      <div className={styles.homeTextContainer}>
        <h1 className={styles.primaryHeading}>
      Hi, <span>I'm Rahma Esmail</span>. A Frontend Web Developer.
      </h1>

     <SocialIcons/>

     <div className={styles.resumeBox}>
       <Link className={styles.resumeLink} rel="noreferrer" href="https://drive.google.com/u/0/uc?id=1lKVt5hiSOQohht4aFLQKXOSdNkTgC6MT&export=download" target='_top' download>
        <span className={styles.resumeTxt}>Download Cv</span>
       <span className={styles.resumeIcon}><FaDownload/></span>
       </Link>
     </div>
     
      </div>
    </div>
  );
}
export default HomePage;
