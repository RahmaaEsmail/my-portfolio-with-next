import styles from './PageTitle.module.css';
function PageTitle({secondaryTitle,primaryTitle}) {
    const [fisrtWord , secondWord] = primaryTitle.split(" ")
    return (
        <div className={styles.pageTitle}>
            <h3 className={styles.secondaryTitle}>{secondaryTitle}</h3>
            <h2 className={styles.primaryTitle}>{fisrtWord} <span>{secondWord}</span></h2>
        </div>
    )
}

export default PageTitle
