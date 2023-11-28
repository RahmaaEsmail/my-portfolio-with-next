'use client'
import styles from "./page.module.css";
import SocialIcons from "../components/socialIcon/SocialIcons";
import PageTitle from "../components/title/PageTitle";
import Form from "../components/form/Form";

function ContactPage() {
  return (
    <div className="container">
      <PageTitle secondaryTitle="contact" primaryTitle="contact me" />
      <div className={styles.contactContainer}>
        <ul className={styles.list}>
          <h3 className={styles.mainTitle}>CONTACT ME HERE</h3>
          <li className={styles.listItem}>
            <span>Name:</span>
            <span>Rahma Esmail</span>
          </li>

          <li className={styles.listItem}>
            <span>Email:</span>
            <span>
              <a href="mailto:rahmaaesmail26@gmail.com">
                rahmaaesmail26@gmail.com
              </a>
            </span>
          </li>

          <li className={styles.listItem}>
            <span>Address:</span>
            <span>Tanta, Egypt</span>
          </li>

          <SocialIcons />
        </ul>
        <Form/>
      </div>
    </div>
  );
}
export default ContactPage;
