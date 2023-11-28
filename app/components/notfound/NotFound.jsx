import Link from 'next/link';
import styles from './NotFound.module.css';

function NotFound() {
    return (
        <div className={styles.container}>
        <h2 className={styles.notFoundMsg}>No Projects Found , please try again!</h2>
        </div>
    )
}

export default NotFound
