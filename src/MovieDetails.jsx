import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { get } from "./utils/HttpRequests";
import styles from "./MovieDetails.module.css";


export function MovieDetails() {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(
        () => {
            get("/movie/" + movieId)
                .then((data) => setMovie(data));
        }, [movieId]
    );

    if(!movie) return null;

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