import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { useQuery } from "../hooks/useQuery";
import styles from "./Search.module.css";

export function Search() {
    
    const [param, setParam] = useState("");
    const navigate = useNavigate();
    const searchParam = useQuery().get("search");
    useEffect(() => {
        setParam(searchParam || "");
    }, [searchParam]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/?search=' + param, {replace : true});
    };

    return (
        <form className={styles.searchContainer} 
        onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input type="text"
                    placeholder="type something..."
                    value={param}
                    onChange = {(e) => setParam(e.target.value)}
                    maxLength={50}
                    className={styles.searchInput} />
                <button type="submit" className={styles.searchButton}>
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}
