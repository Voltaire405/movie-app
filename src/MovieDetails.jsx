import { Fragment } from "react";

import styles from "./MovieDetails.module.css";
import movie from "./movie.json";

export function MovieDetails() {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
    return (
        <Fragment>
            <div className={styles.detailContainer}>
                <img className={`${styles.col} ${styles.movieImage}`}                
                    src={IMAGE_URL + movie.poster_path}
                    alt={movie.title} />
                     
                <div className={styles.col}>
                    <p><strong>Title: </strong> {movie.title}</p>
                    <p><strong>Genre: </strong>{movie.genres.map(
                        (genre) => (genre.name)
                    ).join(" - ")}</p>
                    <p><strong>Description: </strong> {movie.overview}</p>
                </div>
            </div>
        </Fragment>
    );
}