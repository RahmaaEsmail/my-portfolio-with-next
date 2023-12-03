"use client";
import styles from "./page.module.css";
import SocialIcons from "../components/socialIcons/SocialIcons";
import Form from "./components/contactForm/ContactForm";
import PageHeading from "../components/pageHeading/PageHeading";

function ContactPage() {
  return (
    <main className="container">
      <PageHeading secondaryTitle="contact" primaryTitle="contact me" />
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
        <Form />
      </div>
    </main>
  );
}
export default ContactPage;
