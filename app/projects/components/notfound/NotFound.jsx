import { memo } from "react";
import styles from "./NotFound.module.css";

function NotFound({ message }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.notFoundMsg}>{message}</h2>
    </div>
  );
}

export default memo(NotFound);
