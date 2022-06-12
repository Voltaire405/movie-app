import movies from "./Film.json";
import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";

export function MovieGrid() {
    return (
        <ul className={styles.movieGrid} >
            {movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
        </ul>

    );
}