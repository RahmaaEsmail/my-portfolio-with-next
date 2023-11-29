import styles from './Footer.module.css';

function Footer() {
    const date = new Date().getFullYear()
    
    return (
        <footer className={styles.footer}>
            <p>© {date} Copyright : <a href="https://rahmaaesmail.github.io/links-tree/" target='_blank'>Rahma Esmail</a></p>
        </footer>
    )
}

export default Footer
