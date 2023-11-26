import styles from './Search.module.css';

function Search({onChange,query}) {
    return (
        <div>
            <input type="search" value={query} onChange={(e)=>onChange(e.target.value)} placeholder="Search for project...." className={styles.searchInput}/>
        </div>
    )
}

export default Search
