import { useEffect, useState } from "react";

import { MovieCard } from "./MovieCard";

import { get } from "./utils/HttpRequests";
import styles from "./MovieGrid.module.css";
import { Spinner } from "./components/Spinner";

export function MovieGrid() {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(
        () => {
            get("/discover/movie")
                .then((data) => {
                    setMovies(data.results);
                    setLoading(false);
                });
        }, []);

    if (loading) {
        return <Spinner />
    }
    return (
        <ul className={styles.movieGrid} >
            {movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
        </ul>

    );
}