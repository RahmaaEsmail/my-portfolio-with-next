import { memo } from "react";
import styles from "./PageHeading.module.css";

function PageHeading({ secondaryTitle, primaryTitle }) {
  const [fisrtWord, secondWord] = primaryTitle.split(" ");

  return (
    <div className={styles.pageTitle}>
      <h3 className={styles.secondaryTitle}>{secondaryTitle}</h3>
      <h2 className={styles.primaryTitle}>
        {fisrtWord} <span>{secondWord}</span>
      </h2>
    </div>
  );
}

export default memo(PageHeading);
