import { FaSearch } from "react-icons/fa";

import styles from "./Search.module.css";

export function Search() {
    return (
        <form className={styles.searchContainer}>
            <div className={styles.searchBox}>
                <input type="text"
                    placeholder="type something..."
                    maxLength={50}
                    className={styles.searchInput} />
                <button type="submit" className={styles.searchButton}>
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}
