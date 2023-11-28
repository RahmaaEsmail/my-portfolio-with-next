import styles from './Filter.module.css';

function Filter({filteredValue , onChange}) {
    return (
        <div>
            <select value={filteredValue} onChange={(e) => onChange(e.target.value)} className={styles.select}>
                <option value="all">All</option>
                <option value="next">Next</option>
                <option value="react">React</option>
                <option value="vanilla-JS">Vanilla JavaScript</option>
                <option value="Pure-HTMl&CSS">HTML & CSS</option>
            </select>
        </div>
    )
}

export default Filter
